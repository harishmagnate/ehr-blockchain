import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Doctor from "../../api/Doctor";
import DoctorLoginContext from "../../contexts/DoctorLoginContext";
import styles from "./static/css/DoctorLogin.module.css"

function DoctorLogin() {
    const doctorcontext = useContext(DoctorLoginContext);
    const navigate = useNavigate()

    const [username, setUsername] = useState();
    const [password, setPassword] = useState("");
    const [error, seterror] = useState();
    const [isError, setisError] = useState(false);
    const [isLogin, setisLogin] = useState(false);
    const [loginmsg, setloginmsg] = useState("");

    useEffect(() => {

        if (doctorcontext.isLogin) {
            console.log("Navigate " + doctorcontext.isLogin)
            navigate("/doctor")
        }
    },[])

    const handleUserName = (event) => {
        setUsername(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }


    function handleLogin(event) {
        event.preventDefault();
        if (password.trim() === "" || password.length <= 5) {
            console.log(password.length)
            setisError(true)
            seterror("Password length should be more then 5")
            return
        }

        const doctor = {
            username: username,
            password: password,
            type: 'doctor'
        }

        Doctor.doctorLogin(doctor).then(data => {
            setisError(false)
            console.log(data);
            setisLogin(true)
            // setloginmsg("Successfully Login. Redirecting to Home Page")
            doctorcontext.login()
            toast.success("Successfully Login.")
            setTimeout(() => {
                navigate("/doctor")
                console.log("done")
            }, 1000)
        }).catch(err => {
            if (err.response.data && err.response.data === "false") {
                setisError(true)
                seterror("Invalid Credentials")
                console.log(err.response.data);
            }
            else {
                setisError(true)
                seterror("Something Went Wrong!!")
            }
        })

    }
    return (
        <>
            <div className="container mt-3" style={{ clipPath: "polygon(50% 0%, 100% 0, 100% 50%, 95% 80%, 75% 95%, 50% 100%, 25% 95%, 5% 80%, 0 50%, 0 0); height: 100%;" }}>
                <div className="row">
                    <div className="col-md-4 mt-5 mx-auto">
                        <center>
                            <img className="card-img-top img-circle mt-3" src="https://cdn.pixabay.com/photo/2017/01/31/22/32/doctor-2027768__340.png"></img>
                        </center>
                    </div>
                    <div className={"col-md-4 card " + styles.card + " mx-auto mt-5 shadow-lg "}>
                        <div className="card-header text-light bg-info text-center">
                            <h3>LOGIN</h3>
                        </div>

                        <div className={"card-body " + styles.c} style={{ paddingTop: "0px" }}>
                            <form onSubmit={handleLogin}>
                                <div className="form-group">
                                    <label for="userNameId">User Name</label>
                                    <input type="text" onChange={handleUserName} required name="username" className="form-control" id="userNameId" aria-describedby="usernameHelp" placeholder="Enter Username" />
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
                            <p className="text-center pt-3"><Link to="/doctor/new">Dont have an Account? Register Here</Link></p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default DoctorLogin;