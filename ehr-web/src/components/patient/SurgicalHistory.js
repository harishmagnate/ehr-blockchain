import { useState } from "react";

import styles from "./static/css/surgical.module.css"

function SurgicalHistory() {

    const arr = ['Back Surgery', 'Appendectomy', 'Angioplasty', 'CABG', 'Carpal Tunnel Release', 'Cataract Surgery', 'Cholecystectomy', 'Amputation']

    const [details, setdetails] = useState([]);

    const handleChange = (event) => {
        const value = event.target.value
        var disease = details.filter(dis=> dis!== value)
        
        if(disease.length===details.length){
            disease.push(value)
        }

        setdetails(disease)
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        // var check = document.getElementsByClassName("form-control-check")
        // console.log(check);



        console.log(details);
    }


    return (
        <div className="col-md-12 ">
            <form onSubmit={handleSubmit}>
                <div className={"form-row " + styles.formrow}>
                    <div className={"form-group col-md-8  " + styles.formgroup} >
                        <label for="FirstName"><b>Have you had any of the following surgeries?</b></label><br></br>
                        { arr.map(dis => {
                            return <><input type="checkbox" className="form-control-check"  value={dis} onChange={handleChange}  /><span className={styles.check}>{dis}</span><br></br></>
                        }) }
                    </div>
                </div>
                <center><input type="submit" className="btn btn-lg text-light font-weight-bold" style={{ background: "teal" }} value="Submit" /></center>
            </form>
        </div>
    );
}

export default SurgicalHistory;