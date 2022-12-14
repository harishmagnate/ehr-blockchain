import { useState } from "react";

import styles from "./static/css/physicalexam.module.css"

function PatientHistory() {
    const [details, setdetails] = useState({
        heartattack: "",
        stroke: "",
        bloodclot: "",
        cancerdiagnosed: "",
        brokenbone: "",
        other: ""
    });

    const handleChange = (event) => {
        setdetails({ ...details, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) =>{
        event.preventDefault()
        console.log(details);
    }

    return (
        <div className="col-md-12 ">
            <form onSubmit={handleSubmit}>
                <div className={"form-row " + styles.formrow}>
                    <div className={"form-group col-md-6  " + styles.formgroup} >
                        <label for="FirstName"><b>Have you ever had a heart attack?</b></label><br></br>
                        <input type="radio" className="form-radio-control" name="heartattack" value="yes" onChange={handleChange} required />Yes<br></br>
                        <input type="radio" className="form-radio-control" name="heartattack" value="no" onChange={handleChange} required />No
                    </div>
                    <div className={"form-group col-md-6  " + styles.formgroup} >
                        <label for="FirstName"><b>Have you ever had a stroke?</b></label><br></br>
                        <input type="radio" className="form-radio-control" name="stroke" value="yes" onChange={handleChange} required />Yes<br></br>
                        <input type="radio" className="form-radio-control" name="stroke" value="no" onChange={handleChange} required />No
                    </div>
                    <div className={"form-group col-md-6  " + styles.formgroup} >
                        <label for="FirstName"><b>Have you ever had a blood clot?</b></label><br></br>
                        <input type="radio" className="form-radio-control" name="bloodclot" value="yes" onChange={handleChange} required />Yes<br></br>
                        <input type="radio" className="form-radio-control" name="bloodclot" value="no" onChange={handleChange} required />No
                    </div>
                    <div className={"form-group col-md-6  " + styles.formgroup} >
                        <label for="FirstName"><b>Have you ever been diagnosed with cancer?</b></label><br></br>
                        <input type="radio" className="form-radio-control" name="cancerdiagnosed" value="yes" onChange={handleChange} required />Yes<br></br>
                        <input type="radio" className="form-radio-control" name="cancerdiagnosed" value="no" onChange={handleChange} required />No
                    </div>
                    <div className={"form-group col-md-6 " + styles.formgroup} >
                        <label for="FirstName"><b>Have you ever broken a bone?</b></label><br></br>
                        <input type="radio" className="form-radio-control" name="brokenbone" value="yes" onChange={handleChange} required />Yes<br></br>
                        <input type="radio" className="form-radio-control" name="brokenbone" value="no" onChange={handleChange} required />No
                    </div>

                    <div className={"form-group col-md-6 " + styles.formgroup} >
                        <label for="FirstName"><b>Any other medical conditions not mentioned today?</b></label>
                        <input type="text" className="form-control" placeholder="Enter Your Condition" name="other" value={details.other} onChange={handleChange}/>
                    </div>

                </div>
                <center><input type="submit" className="btn btn-lg text-light font-weight-bold" style={{ background: "teal" }} value="Submit" /></center>
            </form>
        </div>
    );
}

export default PatientHistory;