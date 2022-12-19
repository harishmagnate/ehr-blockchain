import { BrowserRouter, Route, Routes } from "react-router-dom";
import DoctorLogin from './DoctorLogin';
import DoctorRegistration from "./DoctorRegistration";
import MyPatient from "./MyPatient";
import Navbar from "./DoctorNavbar";
import PatientList from "./PatientList";
import PatientRecord from "./PatientReccord";
function DoctorHome() {
    return (
        <>
            <Navbar></Navbar>
            <Routes>
                <Route path="/login" element={<DoctorLogin></DoctorLogin>}></Route>
                <Route path="/new" element={<DoctorRegistration></DoctorRegistration>}></Route>
                <Route path="/" element={<PatientList></PatientList>}></Route>
                <Route path="/mypatients" element={<MyPatient></MyPatient>}></Route>
                <Route path="/mypatients/record/:id" element={<PatientRecord></PatientRecord>}></Route>
            </Routes>
        </>



    );
}

export default DoctorHome;