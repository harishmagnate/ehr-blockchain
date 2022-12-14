import { useState } from "react";

import styles from "./static/css/surgical.module.css"

function MedicalInformation() {
    const [details, setdetails] = useState({
        drugname: "clobinate , sofra",
        route: "",
        dayssupply: "",
        diet: "",
        sideeffects: "",
        time: ['Morning','Evening']
    });


    return (
        <div className="col-md-12 ">
            <form>
                <div className={"form-row " + styles.formrow}>
                    <div className={"form-group col-md-6  " + styles.formgroup} >
                        <label for="FirstName"><b>Drug Name</b></label><br></br>
                        <input type="text" className="form-control" name="drugname" value={details.drugname} readOnly />
                    </div>
                    <div className={"form-group col-md-6  " + styles.formgroup} >
                        <label for="FirstName"><b>Route</b></label><br></br>
                        <input type="text" className="form-control" name="route" value={details.route} readOnly />
                    </div>
                    <div className={"form-group col-md-6  " + styles.formgroup} >
                        <label for="FirstName"><b>Days Supply</b></label><br></br>
                        <input type="text" className="form-control" name="dayssupply" value={details.dayssupply} readOnly />
                    </div>
                    <div className={"form-group col-md-6  " + styles.formgroup} >
                        <label for="FirstName"><b>Diet to follow</b></label><br></br>
                        <input type="text" className="form-control" name="diet" value={details.diet} readOnly />
                    </div>
                    <div className={"form-group col-md-6  " + styles.formgroup} >
                        <label for="FirstName"><b>Side effects</b></label><br></br>
                        <input type="text" className="form-control" name="sideeffects" value={details.sideeffects} readOnly />
                    </div>

                    <div className={"form-group col-md-6 " + styles.formgroup} >
                        <label for="FirstName"><b>Time to medicate</b></label><br></br>
                        <input type="checkbox" className="form-control-check" disabled checked={details.time.includes("Morning")} /><span className={styles.check}>Morning</span><br></br>
                        <input type="checkbox" className="form-control-check" disabled checked={details.time.includes("Afternoon")}/><span className={styles.check}>Afternoon</span><br></br>
                        <input type="checkbox" className="form-control-check" disabled checked={details.time.includes("Evening")}/><span className={styles.check}>Evening</span><br></br>
                    </div>

                </div>
            </form>
        </div>
    );
}

export default MedicalInformation;