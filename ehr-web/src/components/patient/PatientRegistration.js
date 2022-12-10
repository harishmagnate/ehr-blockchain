import styles from "./static/css/registration.module.css"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Patient from "../../api/Patient";
import { toast } from 'react-toastify';


function PatientRegistration() {

    const [isRegistered, setisRegistered] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [patientInfo, setPatientInfo] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        phone: "",
        emergencyContactNumber: "",
        email: "",
        nationality: "",
        dateOfBirth: "",
        preferredLanguage: "",
        city: "",
        state: "",
        country: "",
        pincode: "",
        address: ""
    });    

    const navigate = useNavigate()

    const handleChange = (event) => {
        setPatientInfo({ ...patientInfo, [event.target.name]: event.target.value });
      };

    const saveRegistrationData = () => {     
        Patient.registerPatient(patientInfo).then(data => {
            setIsError(false)
            console.log(data);
            toast.success('Successfully Saved')
            setTimeout(() => {
                navigate("/patient")
            }, 1000)
        }).catch(err => {
            setIsError(true)
            toast.error("Save Failed. Pl try again")
            console.log(err.response.data);
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(event)
        var check = document.getElementById("check")
        if (check.checked) {
            console.log("Submitted")
            setisRegistered(true)
            saveRegistrationData()            
        }
        else {
            setIsError(true)
            console.log("Please Agree the terms and Condition");
            setErrorMessage("Please Agree the terms and Condition")
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
                                    <input type="text" name="firstName" value={patientInfo.firstName} onChange={handleChange} placeholder="First Name" className="form-control"></input>
                                </div>
                                <div className={"form-group col-md-4 " + styles.formgroup}>
                                    <label>Middle Name</label>
                                    <input type="text" name="middleName" value={patientInfo.middleName} onChange={handleChange} placeholder="Middle Name" className="form-control"></input>
                                </div>
                                <div className={"form-group col-md-4 " + styles.formgroup}>
                                    <label>Last Name</label>
                                    <input type="text" name="lastName" value={patientInfo.lastName} onChange={handleChange} placeholder="Last Name" className="form-control"></input>
                                </div>
                            </div>
                            <div className={"form-row " + styles.formrow}>
                                <div className={"form-group col-md-4 " + styles.formgroup}>
                                    <label>Phone Number</label>
                                    <input type="number" name="phoneNumber" value={patientInfo.phoneNumber} onChange={handleChange}  placeholder="Phone Number" className="form-control"></input>
                                </div>
                                <div className={"form-group col-md-4 " + styles.formgroup}>
                                    <label>Emergency Contact Number</label>
                                    <input type="number" name="emergencyContactNumber" value={patientInfo.emergencyContactNumber} onChange={handleChange} placeholder="Emergency Contact Number" className="form-control"></input>
                                </div>
                                <div className={"form-group col-md-4 " + styles.formgroup}>
                                    <label>Email</label>
                                    <input type="email" name="email" value={patientInfo.email} onChange={handleChange} placeholder="Email" className="form-control"></input>
                                </div>
                                <div className={"form-group col-md-4 " + styles.formgroup}>
                                    <label>Nationality</label>
                                    <input type="text" name="nationality" value={patientInfo.nationality} onChange={handleChange} placeholder="Nationality" className="form-control"></input>
                                </div>
                                <div className={"form-group col-md-4 " + styles.formgroup}>
                                    <label>Date Of Birth</label>
                                    <input type="date" name="dateOfBirth" value={patientInfo.dateOfBirth} onChange={handleChange} placeholder="Date Of Birth" className="form-control"></input>
                                </div>
                                <div className={"form-group col-md-4 " + styles.formgroup}>
                                    <label>Preffered Language</label>
                                    <select placeholder="Preffered Language" name="preferredLanguage" value={patientInfo.preferredLanguage} onChange={handleChange} className="form-control">
                                        <option>Preffered Language</option>
                                        <option>English</option>
                                        <option>Hindi</option>
                                        <option>Marathi</option>
                                        <option>Gujarati</option>
                                    </select>
                                </div>
                                <div className={"form-group col-md-3 " + styles.formgroup}>
                                    <label>City</label>
                                    <input type="text" placeholder="City" name="city" value={patientInfo.city} onChange={handleChange} className="form-control"></input>
                                </div>
                                <div className={"form-group col-md-3 " + styles.formgroup}>
                                    <label>State</label>
                                    <input type="text" placeholder="State" name="state" value={patientInfo.state} onChange={handleChange} className="form-control"></input>
                                </div>
                                <div className={"form-group col-md-3 " + styles.formgroup}>
                                    <label>Country</label>
                                    <input type="text" placeholder="Country" name="country" value={patientInfo.country} onChange={handleChange} className="form-control"></input>
                                </div>
                                <div className={"form-group col-md-3 " + styles.formgroup}>
                                    <label>Pincode</label>
                                    <input type="number" placeholder="Pincode" name="pincode" value={patientInfo.pincode} onChange={handleChange} className="form-control"></input>
                                </div>
                                <div className={"form-group col-md-12 " + styles.formgroup}>
                                    <label>Address</label>
                                    <textarea rows="2" name="address" value={patientInfo.address} onChange={handleChange} className="form-control"></textarea>
                                    <input type="checkbox" id="check" className="form-control-check mt-3"></input>
                                    <span className="text-dark ml-2">I hereby give my consent and authorize Manipal Hospitals to process, store , use, disclose my personal or sensitive information /data collected as per Manipal Privacy policy.
                                    </span>
                                </div>

                            </div>
                            <center><input type="submit" className="btn text-light btn-lg font-weight-bold" style={{ background: "teal" }} ></input></center>

                        </form>
                        {(isRegistered || isError) && <p className="text-center pt-3 text-success">{errorMessage}</p>}
                        <p className="text-center pt-3"><Link to="/patient">Already have an Account? Login Here</Link></p>
                    </div>
                </div>
            </div >
        </>
    );
}

export default PatientRegistration;