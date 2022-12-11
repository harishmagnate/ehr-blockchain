import styles from "./static/css/PatientLogin.module.css"
import patient from "./static/images/patient.png"
import { Link, useNavigate } from "react-router-dom";
import Patient from "../../api/Patient";
import { useContext, useEffect, useState } from "react";
import PatientContext from "../../contexts/PatientContext";

function PatientLogin() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState("");
    const [error, seterror] = useState();
    const [isError, setisError] = useState(false);
    const [isLogin, setisLogin] = useState(false);
    const [loginmsg, setloginmsg] = useState("");

    const navigate = useNavigate()

    const patientc = useContext(PatientContext)

    useEffect(()=>{
        if(patientc.isLogin){
            navigate("/patient")
        }
    },[])

    const handleusername = (event) => {
        // console.log(event.target.value)
        setUsername(event.target.value)
    }

    const handlePassword = (event) => {
        // console.log(event.target.value)
        setPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (password.trim() === "" || password.length <= 5) {
            console.log(password.length)
            setisError(true)
            seterror("Password length should be more then 5")
            return
        }

        const member = {
            username: username,
            password: password,
            type: 'patient'
        }

        Patient.patientLogin(member).then(data => {
            setisError(false)
            console.log(data);
            setisLogin(true)
            setloginmsg("Successfully Login. Redirecting to Home Page")
            patientc.login()
            setTimeout(()=>{
                navigate("/patient")
                console.log("done")
            },1000)
        }).catch(err => {
            if (err.response.data && err.response.data === "false") {
                setisError(true)
                seterror("Invalid Credentials")
                console.log(err.response.data);
            }
            else{
                setisError(true)
                seterror("Something Went Wrong!!")
            }
        })

    }



    return (
        <>
            <div className="container mt-3" style={{ clipPath: "polygon(50% 0%, 100% 0, 100% 50%, 95% 80%, 75% 95%, 50% 100%, 25% 95%, 5% 80%, 0 50%, 0 0); height: 100%;" }}>
                <div className="row">

                    <div className={"col-md-4 card " + styles.card + " mx-auto mt-5 shadow-lg "} style={{ width: "95%" }}>
                        <div className="card-header text-light bg-info text-center">
                            <h3>PATIENT LOGIN</h3>
                        </div>

                        <div className={"card-body " + styles.c} style={{ paddingTop: "0px" }}>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label for="exampleInputusername1">username address</label>
                                    <input type="text" onChange={handleusername} required name="username" className="form-control" id="exampleInputusername1" aria-describedby="usernameHelp" placeholder="Enter username" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" onChange={handlePassword} required name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                                {isError && <p className="text-danger text-center font-weight-bold">{error}</p>}
                                {isLogin && <p className="text-teal text-center">{loginmsg}</p>}
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