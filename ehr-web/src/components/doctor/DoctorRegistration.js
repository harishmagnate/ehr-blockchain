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
        <div className={styles.container + " container"}>
            <h1>Doctor Registration Form</h1>
            <hr />
            <form onSubmit={handleSubmit}>
                <label for="FirstName"><b>First Name</b></label>
                <input type="text" placeholder="Enter FirstName" name="firstName" value={doctorInfo.firstName} onChange={handleChange} required />

                <label for="LastName"><b>Last Name</b></label>
                <input type="text" placeholder="Enter LastName" name="lastName" value={doctorInfo.lastName} onChange={handleChange} required />

                <label for="UserName"><b>User Name</b></label>
                <input type="text" placeholder="Enter UserName" name="username" value={doctorInfo.username} onChange={handleChange} required />

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" value={doctorInfo.password} onChange={handleChange} required />

                <label for="Gender"><b>Gender</b></label>
                <br /><br />
                <input type="radio" value="male" id="male" onChange={handleChange} name="gender" />
                <label for="male">Male</label>

                <input type="radio" value="female" id="female" onChange={handleChange} name="gender" />
                <label for="female">Female</label><br /><br />

                <label for="Email Id"><b>Email Id</b></label>
                <input type="text" placeholder="Enter Email Id" name="email" onChange={handleChange} value={doctorInfo.email} required />

                <label for="Mobile No"><b>Mobile No</b></label>
                <input type="text" placeholder="Enter Mobile No" name="mobile" onChange={handleChange} value={doctorInfo.mobile} required />

                <label for="Specialist In"><b>Specialy</b></label>
                <input type="text" placeholder="Enter specialty" name="specialty" onChange={handleChange} value={doctorInfo.specialty} required />

                <label for="Address"><b>Address</b></label>
                <input type="text" placeholder="Enter Address" name="address" onChange={handleChange} value={doctorInfo.address} required />

                <label for="State"><b>State</b></label>
                <input type="text" placeholder="Enter state" name="state" onChange={handleChange} value={doctorInfo.state} required />

                <label for="City"><b>City</b></label>
                <input type="text" placeholder="Enter city" name="city" onChange={handleChange} value={doctorInfo.city} required />

                <label for="Pincode"><b>Pincode</b></label>
                <input type="text" placeholder="Enter Pincode" name="pincode" onChange={handleChange} value={doctorInfo.pincode} required />

                <input type="submit" value="Register" className={styles.button} />

            </form>
            {(isError) && <p className="text-center pt-3 text-success">{errorMessage}</p>}
            <p className="text-center pt-3"><Link to="/doctor">Already have an Account? Login Here</Link></p>
        </div>
    );
}

export default DoctorRegistration;