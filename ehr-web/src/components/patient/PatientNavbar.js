import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import PatientContext from "../../contexts/PatientContext";

function Navbar() {
    const patient = useContext(PatientContext)
    const navigate  = useNavigate()
    const handleLogout = ()=>{
        console.log("Logging Out");
        patient.logout()
        navigate("/doctor/login")

        
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
                        <Link className="nav-link" to="/patient">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/patient/new">Register</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Pricing</a>
                    </li>
                    {patient.isLogin && <li className="nav-item">
                        <Link className="nav-link" to="#" onClick={handleLogout}>Logout</Link>
                    </li>}
                    { !patient.isLogin && 
                    <li className="nav-item">
                        <Link className="nav-link" to="/patient/login">Login</Link>
                    </li>}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;