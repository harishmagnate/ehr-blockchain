import { useState } from "react";

import styles from "../static/css/physicalexam.module.css"

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
        vision: "Blind",
        hearing: "Hearing Grossly Intact"
    });

    const handleChange = (event) => {
        setdetails({ ...details, [event.target.name]: event.target.value });
    };


    return (
        <div className="col-md-12">
            <form>
                <div className={"form-row " + styles.formrow}>
                    <div className={"form-group col-md-6 " + styles.formgroup} >
                        <label for="FirstName"><b>Systolic BP (mmHg)</b></label>
                        <input disabled type="text" className="form-control" placeholder="Enter Systolic BP" name="systolicbp" value={details.systolicbp} />
                    </div>
                    <div className={"form-group col-md-6 " + styles.formgroup} >
                        <label for="FirstName"><b>Diastolic BP (mmHg)</b></label>
                        <input disabled type="text" className="form-control" placeholder="Enter Diastolic BP" name="diastolicbp" value={details.diastolicbp} />
                    </div>
                    <div className={"form-group col-md-6 " + styles.formgroup} >
                        <label for="FirstName"><b>Pulse (beats/min)</b></label>
                        <input disabled type="text" className="form-control" placeholder="Enter Pulse (beats/min)" name="pulse" value={details.pulse} />
                    </div>
                    <div className={"form-group col-md-6 " + styles.formgroup} >
                        <label for="FirstName"><b>Pulse Oximetry (%)</b></label>
                        <input disabled type="text" className="form-control" placeholder="Enter Pulse Oximetry" name="pulseoxi" value={details.pulseoxi} />
                    </div>

                    <div className={"form-group col-md-3 " + styles.formgroup} >
                        <label for="FirstName"><b>Respiratory Rate (breths/min)</b></label>
                        <input disabled type="text" className="form-control" placeholder="Enter Respiratory Rate" name="respiratoryrate" value={details.respiratoryrate} />
                    </div>
                    <div className={"form-group col-md-3 " + styles.formgroup} >
                        <label for="FirstName"><b>Temperature(F)</b></label>
                        <input disabled type="text" className="form-control" placeholder="Enter Temperature" name="temperature" value={details.temperature} />
                    </div>
                    <div className={"form-group col-md-3 " + styles.formgroup} >
                        <label for="FirstName"><b>Height (cm)</b></label>
                        <input disabled type="text" className="form-control" placeholder="Enter Height" name="height" value={details.height} />
                    </div>
                    <div className={"form-group col-md-3 " + styles.formgroup} >
                        <label for="FirstName"><b>Weight (kg)</b></label>
                        <input disabled type="text" className="form-control" placeholder="Enter Weight" name="weight" value={details.weight} />
                    </div>

                    <div className={"form-group col-md-6 " + styles.formgroup} >
                        <label for="FirstName"><b>Vision</b></label><br></br>
                        <input disabled type="radio" className="form-radio-control" name="vision" value="Vision Grossly Intact" checked={details.vision==="Vision Grossly Intact"} />Vision Grossly Intact<br></br>
                        <input disabled type="radio" className="form-radio-control" name="vision" value="Visual Impairment" checked={details.vision==="Visual Impairment"}/>Visual Impairment<br></br>
                        <input disabled type="radio" className="form-radio-control" name="vision" value="Blind" checked={details.vision==="Blind"}/>Blind

                    </div>
                    <div className={"form-group col-md-6 " + styles.formgroup} >
                        <label for="FirstName"><b>Hearing </b></label><br></br>
                        <input disabled type="radio" className="form-radio-control" name="hearing" value="Hearing Grossly Intact" checked={details.hearing==="Hearing Grossly Intact"} />Hearing Grossly Intact<br></br>
                        <input disabled type="radio" className="form-radio-control" name="hearing" value="Hearing Decrease"  checked={details.hearing==="Hearing Decrease"}/>Hearing Decrease<br></br>

                    </div>

                </div>
            </form>
        </div>
    );
}

export default PhysicalExam;