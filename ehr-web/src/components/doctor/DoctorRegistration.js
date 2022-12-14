import styles from "./static/css/registration.module.css"
import Doctor from "../../api/Doctor";
import { toast } from 'react-toastify';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function DoctorRegistration() {
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [doctorInfo, setDoctorInfo] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        username: "",
        password: "",
        gender: "",
        email: "",
        mobile: "",
        specialty: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        type: "doctor"
    });

    const handleChange = (event) => {
        setDoctorInfo({ ...doctorInfo, [event.target.name]: event.target.value });
    };

    const navigate = useNavigate()

    const saveRegistration = () => {
        Doctor.registerDoctor(doctorInfo).then(data => {
            setIsError(false)
            console.log(data);
            toast.success('Successfully Saved. Try to login')
            setTimeout(() => {
                navigate("/doctor")
            }, 1000)
        }).catch(err => {
            setIsError(true)
            toast.error("Save Failed. Pl try again")
            setErrorMessage("Failed to Save")
            console.log(err.response.data);
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        saveRegistration()
    }

    return (
        <div className="container mt-3 bg-light">
            <h4 className="text-center pt-5 text-dark font-weight-bold" style={{ textDecoration: "underline" }}>New Doctor Registration</h4>
            <div className="row">
                <div className="col-md-12 p-5">
                    <form onSubmit={handleSubmit}>
                        <div className={"form-row " + styles.formrow}>
                            <div className={"form-group col-md-4 " + styles.formgroup} >
                                <label for="FirstName"><b>First Name</b></label>
                                <input type="text" className="form-control" placeholder="Enter FirstName" name="firstName" value={doctorInfo.firstName} onChange={handleChange} required />
                            </div>
                            <div className={"form-group col-md-4 " + styles.formgroup} >
                                <label for="FirstName"><b>Middle Name</b></label>
                                <input type="text" className="form-control" placeholder="Enter MiddleName" name="middlename" value={doctorInfo.middleName} onChange={handleChange} required />
                            </div>
                            <div className={"form-group col-md-4 " + styles.formgroup} >
                                <label for="LastName"><b>Last Name</b></label>
                                <input type="text" placeholder="Enter LastName" name="lastName" value={doctorInfo.lastName} onChange={handleChange} required />
                            </div>
                            <div className={"form-group col-md-6 " + styles.formgroup} >
                                <label for="UserName"><b>User Name</b></label>
                                <input type="text" className="form-control" placeholder="Enter UserName" name="username" value={doctorInfo.username} onChange={handleChange} required />
                            </div>
                            <div className={"form-group col-md-6 " + styles.formgroup} >
                                <label for="psw"><b>Password</b></label>
                                <input type="password" className="form-control" placeholder="Enter Password" name="password" value={doctorInfo.password} onChange={handleChange} required />
                            </div>
                            <div className={"form-group col-md-12 " + styles.formgroup} >
                                <label for="Gender"><b>Gender</b></label>
                                <br /><br />
                                <input type="radio" className="form-radio-control" value="male" id="male" onChange={handleChange} name="gender" />
                                <label for="male">Male</label>

                                <input type="radio" className="form-radio-control" value="female" id="female" onChange={handleChange} name="gender" />
                                <label for="female">Female</label><br /><br />
                            </div>
                            <div className={"form-group col-md-4 " + styles.formgroup} >
                                <label for="Email Id"><b>Email Id</b></label>
                                <input type="text" className="form-control" placeholder="Enter Email Id" name="email" onChange={handleChange} value={doctorInfo.email} required />
                            </div>
                            <div className={"form-group col-md-4 " + styles.formgroup} >
                                <label for="Mobile No"><b>Mobile No</b></label>
                                <input type="text" className="form-control" placeholder="Enter Mobile No" name="mobile" onChange={handleChange} value={doctorInfo.mobile} required />
                            </div>
                            <div className={"form-group col-md-4 " + styles.formgroup} >
                                <label for="Specialist In"><b>Specialy</b></label>
                                <input type="text" className="form-control" placeholder="Enter specialty" name="specialty" onChange={handleChange} value={doctorInfo.specialty} required />
                            </div>
                            

                            <div className={"form-group col-md-4 " + styles.formgroup} >
                                <label for="State"><b>State</b></label>
                                <input type="text" className="form-control" placeholder="Enter state" name="state" onChange={handleChange} value={doctorInfo.state} required />
                            </div>
                            <div className={"form-group col-md-4 " + styles.formgroup} >
                                <label for="City"><b>City</b></label>
                                <input type="text" className="form-control" placeholder="Enter city" name="city" onChange={handleChange} value={doctorInfo.city} required />
                            </div>
                            <div className={"form-group col-md-4 " + styles.formgroup} >
                                <label for="Pincode"><b>Pincode</b></label>
                                <input type="text" className="form-control" placeholder="Enter Pincode" name="pincode" onChange={handleChange} value={doctorInfo.pincode} required />
                            </div>
                            <div className={"form-group col-md-12 " + styles.formgroup} >
                            <label for="Address"><b>Address</b></label>
                            <textarea rows="2" className="form-control" placeholder="Enter Address" name="address" onChange={handleChange} value={doctorInfo.address} required />
                        </div>
                        </div>
                        <center><input type="submit" className="btn btn-lg text-light font-weight-bold" style={{background:"teal"}} value="Register" /></center>

                    </form>
                    {(isError) && <p className="text-center pt-3 text-success">{errorMessage}</p>}
                    <p className="text-center pt-3"><Link to="/doctor">Already have an Account? Login Here</Link></p>
                </div>
            </div >
        </div >
    );
}

export default DoctorRegistration;