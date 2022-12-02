import styles from "./static/css/PatientLogin.module.css"
import patient from "./static/images/patient.png"
import { Link } from "react-router-dom";

function PatientLogin() {
    return (
        <>
            <div className="container mt-3" style={{ clipPath: "polygon(50% 0%, 100% 0, 100% 50%, 95% 80%, 75% 95%, 50% 100%, 25% 95%, 5% 80%, 0 50%, 0 0); height: 100%;" }}>
                <div className="row">

                    <div className={"col-md-4 card " + styles.card + " mx-auto mt-5 shadow-lg "} style={{ width: "95%" }}>
                        <div className="card-header text-light bg-info text-center">
                            <h3>PATIENT LOGIN</h3>
                        </div>

                        <div className={"card-body " + styles.c} style={{ paddingTop: "0px" }}>
                            <form action="http://localhost:5000/login" method="post">
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
                                <button type="submit" className={"btn btn-info btn-block " + styles.submit}>Submit</button>
                            </form>
                            <p className="text-center pt-3"><Link to="/patient/new">Dont have an Account? Register Here</Link></p>
                        </div>

                    </div>
                    <div className="col-md-4 mt-5 mx-auto">
                        <center>
                            <img className="card-img-top img-circle mt-3" src={patient}></img>
                        </center>
                    </div>

                </div>
            </div>
        </>
    );
}

export default PatientLogin;