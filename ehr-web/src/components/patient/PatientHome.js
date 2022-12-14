import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./PatientNavbar";
import Home from "./PatientIndex";
import PatientLogin from "./PatientLogin";
import PatientRegistration from "./PatientRegistration";
function PatientHome() {
    return (
        <>
        <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/login" element={<PatientLogin></PatientLogin>}></Route>
                <Route path="/new" element={<PatientRegistration></PatientRegistration>}></Route>
            </Routes>
        </>



    );
}

export default PatientHome;