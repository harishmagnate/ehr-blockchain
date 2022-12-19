import { useState } from "react";

import styles from "../static/css/surgical.module.css"

function SurgicalHistory() {

    const arr = ['Back Surgery', 'Appendectomy', 'Angioplasty', 'CABG', 'Carpal Tunnel Release', 'Cataract Surgery', 'Cholecystectomy', 'Amputation']

    const [details, setdetails] = useState(["Back Surgery","Carpal Tunnel Release"]);

    return (
        <div className="col-md-12 ">
            <form>
                <div className={"form-row " + styles.formrow}>
                    <div className={"form-group col-md-8  " + styles.formgroup} >
                        <label for="FirstName"><b>Have you had any of the following surgeries?</b></label><br></br>
                        {arr.map(dis => {
                            return <><input disabled type="checkbox" className="form-control-check" checked={details.includes(dis)} /><span className={styles.check}>{dis}</span><br></br></>
                        })}
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SurgicalHistory;