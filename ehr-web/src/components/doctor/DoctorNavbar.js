import { useContext } from "react";
import { Link } from "react-router-dom";
import DoctorLoginContext from "../../contexts/DoctorLoginContext";

function Navbar() {
    const doctor = useContext(DoctorLoginContext)
    const handleLogout = ()=>{
        console.log("Logging Out");
        doctor.logout()
        
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/doctor">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Pricing</a>
                    </li>
                    {doctor.isLogin && <li className="nav-item">
                        <Link className="nav-link" to="#" onClick={handleLogout}>Logout</Link>
                    </li>}
                    { !doctor.isLogin && 
                    <li className="nav-item">
                        <Link className="nav-link" to="/doctor/login">Login</Link>
                    </li>}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;