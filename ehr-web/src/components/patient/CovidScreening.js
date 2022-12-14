import { useState } from "react";

import styles from "./static/css/physicalexam.module.css"

function CovidScreening() {

    const [showDose, setshowDose] = useState(false);

    const [details, setdetails] = useState({
        coviddiagnosis: "",
        covidstatus: "",
        vaccinestatus: "",
        vaccinetype: "",
        firstdose: "",
        seconddose: "",
        boosterdose: ""
    });

    const handleChange = (event) => {
        setdetails({ ...details, [event.target.name]: event.target.value });

    };

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(details);
    }

    var form = ""

    if (details.vaccinestatus === "yes") {
        form = <div className={"form-row " + styles.formrow} id="dosedetails">
            <div className={"form-group col-md-6  " + styles.formgroup} >
                <label for="FirstName"><b>Manufacturer</b></label><br></br>
                <input type="radio" className="form-radio-control" name="vaccinetype" value="Covaxin" onChange={handleChange} required />Covaxin<br></br>
                <input type="radio" className="form-radio-control" name="vaccinetype" value="Covishield" onChange={handleChange} required />Covishield
            </div>
            <div className={"form-group col-md-6 " + styles.formgroup} >
                <label for="FirstName"><b>1st Dose Date</b></label><br></br>
                <input type="date" className="form-control" name="firstdose" value={details.firstdose} onChange={handleChange} required />
            </div>
            <div className={"form-group col-md-6 " + styles.formgroup} >
                <label for="FirstName"><b>2nd Dose Date</b></label><br></br>
                <input type="date" className="form-control" name="seconddose" value={details.seconddose} onChange={handleChange}  />
            </div>
            <div className={"form-group col-md-6 " + styles.formgroup} >
                <label for="FirstName"><b>Booster Dose Date</b></label><br></br>
                <input type="date" className="form-control" name="boosterdose" value={details.boosterdose} onChange={handleChange}  />
            </div>



        </div>
    }
    else {
        form = ""
    }



    return (
        <div className="col-md-12 ">
            <form onSubmit={handleSubmit}>
                <div className={"form-row " + styles.formrow}>
                    <div className={"form-group col-md-6  " + styles.formgroup} >
                        <label for="FirstName"><b>Contact with someone with COVID diagnosis</b></label><br></br>
                        <input type="radio" className="form-radio-control" name="coviddiagnosis" value="yes" onChange={handleChange} required />Yes<br></br>
                        <input type="radio" className="form-radio-control" name="coviddiagnosis" value="no" onChange={handleChange} required />No
                    </div>
                    <div className={"form-group col-md-6  " + styles.formgroup} >
                        <label for="FirstName"><b>Current COVID Status</b></label><br></br>
                        <input type="radio" className="form-radio-control" name="covidstatus" value="Unknown" onChange={handleChange} required />Unknown<br></br>
                        <input type="radio" className="form-radio-control" name="covidstatus" value="Known Exposure" onChange={handleChange} required />Known Exposure<br></br>
                        <input type="radio" className="form-radio-control" name="covidstatus" value="Suspected" onChange={handleChange} required />Suspected<br></br>
                        <input type="radio" className="form-radio-control" name="covidstatus" value="Tested Negative" onChange={handleChange} required />Tested Negative<br></br>
                        <input type="radio" className="form-radio-control" name="covidstatus" value="History of COVID" onChange={handleChange} required />History of COVID<br></br>
                        <input type="radio" className="form-radio-control" name="covidstatus" value="Not Tested" onChange={handleChange} required />Not Tested<br></br>
                    </div>
                    <div className={"form-group col-md-6  " + styles.formgroup} >
                        <label for="FirstName"><b>COVID Vaccine Status</b></label><br></br>
                        <input type="radio" className="form-radio-control" name="vaccinestatus" value="yes" onChange={handleChange} required />Yes<br></br>
                        <input type="radio" className="form-radio-control" name="vaccinestatus" value="no" onChange={handleChange} required />No
                    </div>
                </div>{form}
                <center><input type="submit" className="btn btn-lg text-light font-weight-bold" style={{ background: "teal" }} value="Submit" /></center>
            </form>
        </div>
    );

}

export default CovidScreening;