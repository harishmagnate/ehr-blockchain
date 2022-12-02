import styles from "./static/css/registration.module.css"

function DoctorRegistration() {

    function handleSubmit(event){
        event.preventDefault()
        console.log("submitted")
    }
    return (
        <div className={styles.container + " container"}>
            <h1>Registration Form</h1>
            <hr />
            <form onSubmit={handleSubmit}>
                <label for="FirstName"><b>FirstName</b></label>
                <input type="text" placeholder="Enter FirstName" name="FirstName" required />

                <label for="LastName"><b>LastName</b></label>
                <input type="text" placeholder="Enter LastName" name="LastName" required />

                <label for="UserName"><b>UserName</b></label>
                <input type="text" placeholder="Enter UserName" name="UserName" required />

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required />

                <label for="Gender"><b>Gender</b></label>
                <br /><br />
                <input type="radio" id="html" name="fav_language" value="HTML" />
                <label for="html">Male</label>
                <input type="radio" id="css" name="fav_language" value="CSS" />
                <label for="css">Female</label><br /><br />

                <label for="Email Id"><b>Email Id</b></label>
                <input type="text" placeholder="Enter Email Id" name="Email Id" required />

                <label for="Mobile No"><b>Mobile No</b></label>
                <input type="text" placeholder="Enter Mobile No" name="Mobile No" required />

                <label for="Specialist In"><b>Specialist In</b></label>
                <br /><br />
                <select id="division" name="division">
                    <div style={{ width: "200px" }}>
                        <option>Enter Specialist</option></div>
                    <option value="1">Gynocologist</option>
                    <option value="2">Neurologist</option>
                    <option value="3">pediatrician</option>
                    <option value="4">General Surgeon</option>
                </select>
                <br />
                <br />
                <br />

                <label for="Address"><b>Address</b></label>
                <input type="text" placeholder="Enter Address" name="Address" required />

                <label for="State"><b>State</b></label>
                <br /><br />
                <select id="division" name="division">
                    <div style={{ width: "200px" }}>
                        <option>Enter State</option></div>
                    <option value="1">TamilNadu</option>
                    <option value="2">Kerala</option>
                    <option value="3">Assam</option>
                    <option value="4">Delhi</option>
                </select>
                <br /><br />

                <label for="City"><b>City</b></label>
                <br /><br />
                <select id="division" name="division">
                    <div style={{ width: "200px" }}>
                        <option>Enter State</option></div>
                    <option value="1">Chennai</option>
                    <option value="2">Banglore</option>
                    <option value="3">Ossur</option>
                    <option value="4">Thanjavur</option>
                </select>
                <br />
                <br />
                <br />

                <label for="Pincode"><b>Pincode</b></label>
                <input type="text" placeholder="Enter Pincode" name="Pincode" required />


                <label>
                    <input type="checkbox" checked="checked" name="remember" style={{ marginBottom: "15px" }} /> Remember me
                </label>

                
                    <input type="submit" value="Register" className={styles.button}/>
                
            </form>
        </div>
    );
}

export default DoctorRegistration;