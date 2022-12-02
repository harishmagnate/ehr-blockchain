import { BrowserRouter, Route, Routes } from "react-router-dom";
import PatientLogin from "./PatientLogin";
import PatientRegistration from "./PatientRegistration";
function PatientHome() {
    return (
            <Routes>
                <Route path="/" element={<PatientLogin></PatientLogin>}></Route>
                <Route path="/new" element={<PatientRegistration></PatientRegistration>}></Route>
            </Routes>


    );
}

export default PatientHome;