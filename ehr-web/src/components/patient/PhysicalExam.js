import { useState } from "react";

import styles from "./static/css/physicalexam.module.css"

function PhysicalExam() {

    const [details, setdetails] = useState({
        systolicbp: "",
        diastolicbp: "",
        pulse: "",
        pulseoxi: "",
        respiratoryrate: "",
        temperature: "",
        height: "",
        weight: "",
        vision: "",
        hearing: ""
    });

    const handleChange = (event) => {
        setdetails({ ...details, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) =>{
        event.preventDefault()
        console.log(details);
    }

    return (
        <div className="col-md-12">
            <form onSubmit={handleSubmit}>
                <div className={"form-row " + styles.formrow}>
                    <div className={"form-group col-md-6 " + styles.formgroup} >
                        <label for="FirstName"><b>Systolic BP (mmHg)</b></label>
                        <input type="text" className="form-control" placeholder="Enter Systolic BP" name="systolicbp" value={details.systolicbp} onChange={handleChange} required />
                    </div>
                    <div className={"form-group col-md-6 " + styles.formgroup} >
                        <label for="FirstName"><b>Diastolic BP (mmHg)</b></label>
                        <input type="text" className="form-control" placeholder="Enter Diastolic BP" name="diastolicbp" value={details.diastolicbp} onChange={handleChange} required />
                    </div>
                    <div className={"form-group col-md-6 " + styles.formgroup} >
                        <label for="FirstName"><b>Pulse (beats/min)</b></label>
                        <input type="text" className="form-control" placeholder="Enter Pulse (beats/min)" name="pulse" value={details.pulse} onChange={handleChange} required />
                    </div>
                    <div className={"form-group col-md-6 " + styles.formgroup} >
                        <label for="FirstName"><b>Pulse Oximetry (%)</b></label>
                        <input type="text" className="form-control" placeholder="Enter Pulse Oximetry" name="pulseoxi" value={details.pulseoxi} onChange={handleChange} required />
                    </div>

                    <div className={"form-group col-md-3 " + styles.formgroup} >
                        <label for="FirstName"><b>Respiratory Rate (breths/min)</b></label>
                        <input type="text" className="form-control" placeholder="Enter Respiratory Rate" name="respiratoryrate" value={details.respiratoryrate} onChange={handleChange} required />
                    </div>
                    <div className={"form-group col-md-3 " + styles.formgroup} >
                        <label for="FirstName"><b>Temperature(F)</b></label>
                        <input type="text" className="form-control" placeholder="Enter Temperature" name="temperature" value={details.temperature} onChange={handleChange} required />
                    </div>
                    <div className={"form-group col-md-3 " + styles.formgroup} >
                        <label for="FirstName"><b>Height (cm)</b></label>
                        <input type="text" className="form-control" placeholder="Enter Height" name="height" value={details.height} onChange={handleChange} required />
                    </div>
                    <div className={"form-group col-md-3 " + styles.formgroup} >
                        <label for="FirstName"><b>Weight (kg)</b></label>
                        <input type="text" className="form-control" placeholder="Enter Weight" name="weight" value={details.weight} onChange={handleChange} required />
                    </div>

                    <div className={"form-group col-md-6 " + styles.formgroup} >
                        <label for="FirstName"><b>Vision</b></label><br></br>
                        <input type="radio" className="form-radio-control" name="vision" value="Vision Grossly Intact" onChange={handleChange} required />Vision Grossly Intact<br></br>
                        <input type="radio" className="form-radio-control" name="vision" value="Visual Impairment" onChange={handleChange} required />Visual Impairment<br></br>
                        <input type="radio" className="form-radio-control" name="vision" value="Blind" onChange={handleChange} required />Blind

                    </div>
                    <div className={"form-group col-md-6 " + styles.formgroup} >
                        <label for="FirstName"><b>Hearing </b></label><br></br>
                        <input type="radio" className="form-radio-control" name="hearing" value="Hearing Grossly Intact" onChange={handleChange} required />Hearing Grossly Intact<br></br>
                        <input type="radio" className="form-radio-control" name="hearing" value="Hearing Decrease" onChange={handleChange} required />Hearing Decrease<br></br>

                    </div>

                </div>
                <center><input type="submit" className="btn btn-lg text-light font-weight-bold" style={{ background: "teal" }} value="Submit" /></center>
            </form>
        </div>
    );
}

export default PhysicalExam;