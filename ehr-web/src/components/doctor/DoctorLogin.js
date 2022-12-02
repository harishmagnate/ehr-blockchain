import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DoctorLoginContext from "../../contexts/DoctorLoginContext";
import styles from "./static/css/DoctorLogin.module.css"

function DoctorLogin() {
    const doctor = useContext(DoctorLoginContext);
    // const [message, setmessage] = useState(doctor.isLogin);
    const navigate = useNavigate()

    useEffect(()=>{
        
        if(doctor.isLogin){
            console.log("Navigate "+doctor.isLogin)
            navigate("/doctor")
            
        }
        
        console.log(doctor.isLogin)
        
    })
    
    
    function handleLogin(event){
        event.preventDefault();
        doctor.login()
        console.log("Doctor Try to login "+doctor.isLogin)
        // setmessage(doctor.isLogin)
        // console.log("Doctor is login "+doctor.isLogin)

    }
    return (
        <>
            <div className="container mt-3" style={{clipPath: "polygon(50% 0%, 100% 0, 100% 50%, 95% 80%, 75% 95%, 50% 100%, 25% 95%, 5% 80%, 0 50%, 0 0); height: 100%;"}}>
                <div className="row">
                    <div className="col-md-4 mt-5 mx-auto">
                    <center>
                        <img className="card-img-top img-circle mt-3" src="https://cdn.pixabay.com/photo/2017/01/31/22/32/doctor-2027768__340.png"></img>
                        </center>
                    </div>
                    <div className={"col-md-4 card "+ styles.card + " mx-auto mt-5 shadow-lg "}>
                        <div className="card-header text-light bg-info text-center">
                            <h3>LOGIN</h3>
                        </div>
                        
                        <div className={"card-body " + styles.c} style={{paddingTop:"0px"}}>
                            <form onSubmit={handleLogin}>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" required name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" required name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                                {/* <p className="text-danger font-weight-bold">{{ msg }}</p> */}
                                <br />
                                <button type="submit" className={"btn btn-info btn-block "+styles.submit}>Submit</button>
                            </form>
                            <p className="text-center pt-3"><Link to="/doctor/new">Dont have an Account? Register Here</Link></p>
                            {/* <p className="text-teal">{ message ? "Login" : "Not Login" }</p> */}
                        </div>
                        {/* <button onClick={()=>{doctor.logout(); setmessage(doctor.isLogin)}}>Logout</button> */}

                    </div>
                </div>
            </div>
        </>
    );
}

export default DoctorLogin;