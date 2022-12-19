import { useState } from "react";

import styles from "../static/css/physicalexam.module.css"

function CovidScreening() {

    const [showDose, setshowDose] = useState(false);

    const [details, setdetails] = useState({
        coviddiagnosis: "yes",
        covidstatus: "Not Tested",
        vaccinestatus: "yes",
        vaccinetype: "Covishield",
        firstdose: "",
        seconddose: "",
        boosterdose: ""
    });

    const handleChange = (event) => {
        setdetails({ ...details, [event.target.name]: event.target.value });

    };


    var form = ""

    if (details.vaccinestatus === "yes") {
        form = <div className={"form-row " + styles.formrow} id="dosedetails">
            <div className={"form-group col-md-6  " + styles.formgroup} >
                <label for="FirstName"><b>Manufacturer</b></label><br></br>
                <input readOnly type="radio" className="form-radio-control" name="vaccinetype" value="Covaxin" checked={details.vaccinetype==="Covaxin"} disabled />Covaxin<br></br>
                <input readOnly type="radio" className="form-radio-control" name="vaccinetype" value="Covishield" checked={details.vaccinetype==="Covishield"} disabled />Covishield
            </div>
            <div className={"form-group col-md-6 " + styles.formgroup} >
                <label for="FirstName"><b>1st Dose Date</b></label><br></br>
                <input readOnly type="date" className="form-control" name="firstdose" value={details.firstdose}  />
            </div>
            <div className={"form-group col-md-6 " + styles.formgroup} >
                <label for="FirstName"><b>2nd Dose Date</b></label><br></br>
                <input readOnly type="date" className="form-control" name="seconddose" value={details.seconddose} onChange={handleChange} />
            </div>
            <div className={"form-group col-md-6 " + styles.formgroup} >
                <label for="FirstName"><b>Booster Dose Date</b></label><br></br>
                <input readOnly type="date" className="form-control" name="boosterdose" value={details.boosterdose} onChange={handleChange}  />
            </div>



        </div>
    }
    else {
        form = ""
    }



    return (
        <div className="col-md-12 ">
            <form>
                <div className={"form-row " + styles.formrow}>
                    <div className={"form-group col-md-6  " + styles.formgroup} >
                        <label for="FirstName"><b>Contact with someone with COVID diagnosis</b></label><br></br>
                        <input readOnly type="radio" className="form-radio-control" name="coviddiagnosis" value="yes" checked={details.coviddiagnosis==="yes"}  disabled/>Yes<br></br>
                        <input readOnly type="radio" className="form-radio-control" name="coviddiagnosis" value="no" checked={details.coviddiagnosis==="no"} disabled/>No
                    </div>
                    <div className={"form-group col-md-6  " + styles.formgroup} >
                        <label for="FirstName"><b>Current COVID Status</b></label><br></br>
                        <input readOnly type="radio" className="form-radio-control" name="covidstatus" value="Unknown"  checked={details.covidstatus==="Unknown"}  disabled/>Unknown<br></br>
                        <input readOnly type="radio" className="form-radio-control" name="covidstatus" value="Known Exposure" checked={details.covidstatus==="Known Exposure"}  disabled/>Known Exposure<br></br>
                        <input readOnly type="radio" className="form-radio-control" name="covidstatus" value="Suspected" checked={details.covidstatus==="Suspected"} disabled/>Suspected<br></br>
                        <input readOnly type="radio" className="form-radio-control" name="covidstatus" value="Tested Negative" checked={details.covidstatus==="Tested Negative"} disabled/>Tested Negative<br></br>
                        <input readOnly type="radio" className="form-radio-control" name="covidstatus" value="History of COVID" checked={details.covidstatus==="History of COVID"} disabled/>History of COVID<br></br>
                        <input readOnly type="radio" className="form-radio-control" name="covidstatus" value="Not Tested" checked={details.covidstatus==="Not Tested"} disabled/>Not Tested<br></br>
                    </div>
                    <div className={"form-group col-md-6  " + styles.formgroup} >
                        <label for="FirstName"><b>COVID Vaccine Status</b></label><br></br>
                        <input readOnly type="radio" className="form-radio-control" name="vaccinestatus" value="yes" checked={details.vaccinestatus==="yes"}  disabled/>Yes<br></br>
                        <input readOnly type="radio" className="form-radio-control" name="vaccinestatus" value="no" checked={details.vaccinestatus==="no"}  disabled/>No
                    </div>
                </div>{form}
            </form>
        </div>
    );

}

export default CovidScreening;