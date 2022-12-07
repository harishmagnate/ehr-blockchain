import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PatientContext from "../../contexts/PatientContext";

function Home() {

    const navigate = useNavigate()
    const patient = useContext(PatientContext)
    useEffect(()=>{
        if(!patient.isLogin){
            navigate("/patient/login")
        }
    })
    return ( 
        <h1>Patient Home Page</h1>
     );
}

export default Home;