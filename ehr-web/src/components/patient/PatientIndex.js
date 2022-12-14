import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PatientContext from "../../contexts/PatientContext";
import CovidScreening from "./CovidScreening";
import MedicalInformation from "./MedicalInformation";
import PatientHistory from "./PatientHistory";
import PhysicalExam from "./PhysicalExam";
import styles from "./static/css/index.module.css"
import SurgicalHistory from "./SurgicalHistory";
function Home() {

    const navigate = useNavigate()
    const patient = useContext(PatientContext)

    //managing States

    const [showExam, setshowExam] = useState(true);
    const [showHistory, setshowHistory] = useState(false);
    const [showScreening, setshowScreening] = useState(false);
    const [showSurgicalHistory, setshowSurgicalHistory] = useState(false);
    const [showInformation, setshowInformation] = useState(false);

    useEffect(() => {
        if (!patient.isLogin) {
            navigate("/patient/login")
        }
    })


    const handleExam = ()=>{
        console.log("Exam Open")
        setshowExam(true)
        setshowHistory(false)
        setshowInformation(false)
        setshowSurgicalHistory(false)
        setshowScreening(false)

    }

    const handlePatientHistory = ()=>{
        console.log("Patient History")
        setshowExam(false)
        setshowHistory(true)
        setshowInformation(false)
        setshowSurgicalHistory(false)
        setshowScreening(false)
    }

    const handleScreening = ()=>{
        console.log("Covid 19")
        setshowExam(false)
        setshowHistory(false)
        setshowInformation(false)
        setshowSurgicalHistory(false)
        setshowScreening(true)
    }

    const handleSurgicalHistory = ()=>{
        console.log("Surgical history")
        setshowExam(false)
        setshowHistory(false)
        setshowInformation(false)
        setshowSurgicalHistory(true)
        setshowScreening(false)
    }

    const handleMedicalInfromation = ()=>{
        console.log("Medical Information")
        setshowExam(false)
        setshowHistory(false)
        setshowInformation(true)
        setshowSurgicalHistory(false)
        setshowScreening(false)
    }

    var data = ""

    if(showExam) data = <PhysicalExam></PhysicalExam>

    else if(showHistory) data = <PatientHistory></PatientHistory>

    else if(showScreening) data = <CovidScreening></CovidScreening>

    else if(showSurgicalHistory) data = <SurgicalHistory></SurgicalHistory>

    else data = <MedicalInformation></MedicalInformation>

    


    return (
        <div className="container bg-light mt-3">
            <div className="row p-5">
                <div className="col-md-12 mx-auto">
                    <nav className={"nav nav-pills nav-fill "+styles.navtabs}>
                        <a className={`nav-link  ${showExam ? styles.active : ""}`} aria-current="page" href="#" onClick={handleExam}>Physical Exam - Vitals</a>
                        <a className={`nav-link  ${showHistory ? styles.active : ""}`} href="#" onClick={handlePatientHistory}>Patient History</a>
                        <a className={`nav-link  ${showScreening ? styles.active : ""}`} href="#" onClick={handleScreening}>COVID-19 Screening</a>
                        <a className={`nav-link  ${showSurgicalHistory ? styles.active : ""}`} href="#" onClick={handleSurgicalHistory}>Surgical History</a>
                        <a className={`nav-link  ${showInformation ? styles.active : ""}`} href="#" onClick={handleMedicalInfromation}>Medication Information</a>
                    </nav>
                    <br></br>
                    <div className="text-dark">
                        {data}
                    </div>
                    
                </div>
            </div>

        </div>
    );
}

export default Home;