import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "./static/css/index.module.css"
import DoctorLoginContext from "../../contexts/DoctorLoginContext";
import CovidScreening from "./patienthealthrecord/CovidScreening";
import PatientHistory from "./patienthealthrecord/PatientHistory";
import SurgicalHistory from "./patienthealthrecord/SurgicalHistory";
import PhysicalExam from "./patienthealthrecord/PhysicalExam";
import MedicalInformation from "./patienthealthrecord/MedicalInformation";

function PatientRecord() {

    const doctorcontext = useContext(DoctorLoginContext)
    const navigate = useNavigate()
    useEffect(() => {
        if (!doctorcontext.isLogin) {
            navigate("/doctor/login")
        }
    })

    const [showRecord, setshowRecord] = useState(true);
    const [showMedication, setshowMedication] = useState(false);


    const handleRecord = () => {
        setshowRecord(true)
        setshowMedication(false)
        console.log("record");
    }

    const handleMedication = () => {
        setshowRecord(false)
        setshowMedication(true)
        console.log("medication");
    }



    return (
        <div className="container bg-light mt-3">
            <div className="row p-5">
                <div className="col-md-12 mx-auto">
                    <nav className={"nav nav-pills nav-fill " + styles.navtabs}>
                        <a className={`nav-link  ${showRecord ? styles.active : ""}`} aria-current="page" onClick={handleRecord}>Medical Record</a>
                        <a className={`nav-link  ${showMedication ? styles.active : ""}`} onClick={handleMedication}>Prescribe Medication</a>
                    </nav>
                    <br></br>
                    <div className="text-dark">
                        { showRecord && <CovidScreening></CovidScreening>}
                        <br></br>
                        { showRecord && <PatientHistory></PatientHistory>}
                        <br></br>
                        { showRecord && <SurgicalHistory></SurgicalHistory>}
                        <br></br>
                        { showRecord && <PhysicalExam></PhysicalExam> }
                        <br></br>
                        { showMedication && <MedicalInformation></MedicalInformation>}
                        
                    </div>

                </div>
            </div>

        </div>
    );
}

export default PatientRecord;