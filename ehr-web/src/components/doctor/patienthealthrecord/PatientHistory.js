import { useState } from "react";

import styles from "../static/css/physicalexam.module.css"

function PatientHistory() {
    const [details, setdetails] = useState({
        heartattack: "yes",
        stroke: "no",
        bloodclot: "no",
        cancerdiagnosed: "no",
        brokenbone: "yes",
        other: "nothing"
    });




    return (
        <div className="col-md-12 ">
            <form>
                <div className={"form-row " + styles.formrow}>
                    <div className={"form-group col-md-6  " + styles.formgroup} >
                        <label for="FirstName"><b>Have you ever had a heart attack?</b></label><br></br>
                        <input disabled type="radio" className="form-radio-control" name="heartattack" value="yes" checked={details.heartattack==="yes"}  />Yes<br></br>
                        <input disabled type="radio" className="form-radio-control" name="heartattack" value="no"  checked={details.heartattack==="no"} />No
                    </div>
                    <div className={"form-group col-md-6  " + styles.formgroup} >
                        <label for="FirstName"><b>Have you ever had a stroke?</b></label><br></br>
                        <input disabled type="radio" className="form-radio-control" name="stroke" value="yes" checked={details.stroke==="yes"}  />Yes<br></br>
                        <input disabled type="radio" className="form-radio-control" name="stroke" value="no" checked={details.stroke==="no"}  />No
                    </div>
                    <div className={"form-group col-md-6  " + styles.formgroup} >
                        <label for="FirstName"><b>Have you ever had a blood clot?</b></label><br></br>
                        <input disabled type="radio" className="form-radio-control" name="bloodclot" value="yes" checked={details.bloodclot==="yes"}  />Yes<br></br>
                        <input disabled type="radio" className="form-radio-control" name="bloodclot" value="no" checked={details.bloodclot==="no"}  />No
                    </div>
                    <div className={"form-group col-md-6  " + styles.formgroup} >
                        <label for="FirstName"><b>Have you ever been diagnosed with cancer?</b></label><br></br>
                        <input disabled type="radio" className="form-radio-control" name="cancerdiagnosed" value="yes" checked={details.cancerdiagnosed==="yes"} />Yes<br></br>
                        <input disabled type="radio" className="form-radio-control" name="cancerdiagnosed" value="no" checked={details.cancerdiagnosed==="no"} />No
                    </div>
                    <div className={"form-group col-md-6 " + styles.formgroup} >
                        <label for="FirstName"><b>Have you ever broken a bone?</b></label><br></br>
                        <input disabled type="radio" className="form-radio-control" name="brokenbone" value="yes" checked={details.brokenbone==="yes"}  />Yes<br></br>
                        <input disabled type="radio" className="form-radio-control" name="brokenbone" value="no"  checked={details.brokenbone==="no"} />No
                    </div>

                    <div className={"form-group col-md-6 " + styles.formgroup} >
                        <label for="FirstName"><b>Any other medical conditions not mentioned today?</b></label>
                        <input disabled type="text" className="form-control" placeholder="Enter Your Condition" name="other" value={details.other}  />
                    </div>

                </div>
            </form>
        </div>
    );
}

export default PatientHistory;