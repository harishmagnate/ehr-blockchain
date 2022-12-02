import styles from "./static/css/registration.module.css"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
function PatientRegistration() {

    const [isRegistered, setisRegistered] = useState(false);
    const [errorMessage, seterrorMessage] = useState("");
    const [isError, setisError] = useState(false);

    const navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault()
        var check = document.getElementById("check")
        if (check.checked) {
            console.log("Submitted")
            setisRegistered(true)
            seterrorMessage("Successfully Registered")
            setTimeout(() => {
                navigate("/patient")
            }, 1000)
        }
        else{
            setisError(true)
            console.log("Please Agree the terms and Condition");
            seterrorMessage("Please Agree the terms and Condition")
        }


    }
    return (
        <>

            <div className="container mt-3 bg-light">
                <h4 className="text-center pt-5 text-dark font-weight-bold" style={{ textDecoration: "underline" }}>New Patient Registration</h4>
                <div className="row">
                    <div className="col-md-12 p-5">
                        <form onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className={"form-group col-md-4 " + styles.formgroup}>
                                    <label>First Name</label>
                                    <input type="text" placeholder="First Name" className="form-control"></input>
                                </div>
                                <div className={"form-group col-md-4 " + styles.formgroup}>
                                    <label>Middle Name</label>
                                    <input type="text" placeholder="Middle Name" className="form-control"></input>
                                </div>
                                <div className={"form-group col-md-4 " + styles.formgroup}>
                                    <label>Last Name</label>
                                    <input type="text" placeholder="Last Name" className="form-control"></input>
                                </div>
                            </div>
                            <div className={"form-row " + styles.formrow}>
                                <div className={"form-group col-md-4 " + styles.formgroup}>
                                    <label>Phone Number</label>
                                    <input type="number" placeholder="Phone Number" className="form-control"></input>
                                </div>
                                <div className={"form-group col-md-4 " + styles.formgroup}>
                                    <label>Emergency Contact Number</label>
                                    <input type="number" placeholder="Emergency Contact Number" className="form-control"></input>
                                </div>
                                <div className={"form-group col-md-4 " + styles.formgroup}>
                                    <label>Email</label>
                                    <input type="email" placeholder="Email" className="form-control"></input>
                                </div>
                                <div className={"form-group col-md-4 " + styles.formgroup}>
                                    <label>Nationality</label>
                                    <input type="text" placeholder="Nationality" className="form-control"></input>
                                </div>
                                <div className={"form-group col-md-4 " + styles.formgroup}>
                                    <label>Date Of Birth</label>
                                    <input type="date" placeholder="Date Of Birth" className="form-control"></input>
                                </div>
                                <div className={"form-group col-md-4 " + styles.formgroup}>
                                    <label>Preffered Language</label>
                                    <select placeholder="Preffered Language" className="form-control">
                                        <option>Preffered Language</option>
                                        <option>English</option>
                                        <option>Hindi</option>
                                        <option>Marathi</option>
                                        <option>Gujarati</option>
                                    </select>
                                </div>
                                <div className={"form-group col-md-3 " + styles.formgroup}>
                                    <label>City</label>
                                    <input type="text" placeholder="City" className="form-control"></input>
                                </div>
                                <div className={"form-group col-md-3 " + styles.formgroup}>
                                    <label>State</label>
                                    <input type="text" placeholder="State" className="form-control"></input>
                                </div>
                                <div className={"form-group col-md-3 " + styles.formgroup}>
                                    <label>Country</label>
                                    <input type="text" placeholder="Country" className="form-control"></input>
                                </div>
                                <div className={"form-group col-md-3 " + styles.formgroup}>
                                    <label>Pincode</label>
                                    <input type="number" placeholder="Pincode" className="form-control"></input>
                                </div>
                                <div className={"form-group col-md-12 " + styles.formgroup}>
                                    <label>Address</label>
                                    <textarea rows="2" className="form-control"></textarea>
                                    <input type="checkbox" id="check" className="form-control-check mt-3"></input>
                                    <span className="text-dark ml-2">I hereby give my consent and authorize Manipal Hospitals to process, store , use, disclose my personal or sensitive information /data collected as per Manipal Privacy policy.
                                    </span>
                                </div>

                            </div>
                            <center><input type="submit" className="btn text-light btn-lg font-weight-bold" style={{ background: "teal" }} ></input></center>

                        </form>
                        { (isRegistered || isError) && <p className="text-center pt-3 text-success">{errorMessage}</p>}
                        <p className="text-center pt-3"><Link to="/patient">Already have an Account? Login Here</Link></p>
                    </div>
                </div>
            </div >
        </>
    );
}

export default PatientRegistration;