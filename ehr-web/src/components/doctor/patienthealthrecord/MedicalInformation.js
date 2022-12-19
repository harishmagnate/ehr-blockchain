import { useState } from "react";

import styles from "../static/css/surgical.module.css"

function MedicalInformation() {
    const [details, setdetails] = useState({
        drugname: "",
        route: "",
        dayssupply: "",
        diet: "",
        sideeffects: "",
        time: []
    });


    const handleChange = (event) => {
        setdetails({ ...details, [event.target.name]: event.target.value });
    }

    const handleTime = (event) => {
        const value = event.target.value
        var mediTime = details.time.filter(time => time !== value)

        if (mediTime.length === details.time.length) {
            mediTime.push(value)
        }

        // console.log(mediTime)

        setdetails({...details, time : mediTime})
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(details)
    }


    return (
        <div className="col-md-12 ">
            <form onSubmit={handleSubmit}>
                <div className={"form-row " + styles.formrow}>
                    <div className={"form-group col-md-6  " + styles.formgroup} >
                        <label for="FirstName"><b>Drug Name</b></label><br></br>
                        <input type="text" className="form-control" name="drugname" value={details.drugname} onChange={handleChange} />
                    </div>
                    <div className={"form-group col-md-6  " + styles.formgroup} >
                        <label for="FirstName"><b>Route</b></label><br></br>
                        <input type="text" className="form-control" name="route" value={details.route} onChange={handleChange} />
                    </div>
                    <div className={"form-group col-md-6  " + styles.formgroup} >
                        <label for="FirstName"><b>Days Supply</b></label><br></br>
                        <input type="text" className="form-control" name="dayssupply" value={details.dayssupply} onChange={handleChange} />
                    </div>
                    <div className={"form-group col-md-6  " + styles.formgroup} >
                        <label for="FirstName"><b>Diet to follow</b></label><br></br>
                        <input type="text" className="form-control" name="diet" value={details.diet} onChange={handleChange} />
                    </div>
                    <div className={"form-group col-md-6  " + styles.formgroup} >
                        <label for="FirstName"><b>Side effects</b></label><br></br>
                        <input type="text" className="form-control" name="sideeffects" value={details.sideeffects} onChange={handleChange} />
                    </div>

                    <div className={"form-group col-md-6 " + styles.formgroup} >
                        <label for="FirstName"><b>Time to medicate</b></label><br></br>
                        <input type="checkbox" className="form-control-check" value="morning" onChange={handleTime}/><span className={styles.check}>Morning</span><br></br>
                        <input type="checkbox" className="form-control-check" value="afternoon" onChange={handleTime}/><span className={styles.check}>Afternoon</span><br></br>
                        <input type="checkbox" className="form-control-check" value="evening" onChange={handleTime}/><span className={styles.check}>Evening</span><br></br>
                    </div>

                </div>
                <center><input type="submit" className="btn btn-lg text-light font-weight-bold" style={{ background: "teal" }} value="Submit" /></center>
            </form>
        </div>
    );
}

export default MedicalInformation;