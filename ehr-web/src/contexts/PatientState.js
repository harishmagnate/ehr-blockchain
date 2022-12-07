import { useState } from "react";
import PatientContext from "./PatientContext";

function PatientState(props) {
    const [isLogin, setisLogin] = useState(false);

    const login = ()=>{
        setisLogin(true)
    }

    const logout = ()=>{
        setisLogin(false)
    }
    return ( 
        <PatientContext.Provider value={{isLogin,login,logout}}>
            {props.children}
        </PatientContext.Provider>
     );
}

export default PatientState;