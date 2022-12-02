import { useState } from "react";
import DoctorLoginContext from "./DoctorLoginContext";

function DoctorLoginState(props) {
    const [isLogin, setisLogin] = useState(false);

    const login = ()=>{
        setisLogin(true)
    }

    const logout = ()=>{
        setisLogin(false)
    }
    return ( 
        <DoctorLoginContext.Provider value={{isLogin,login,logout}}>
            {props.children}
        </DoctorLoginContext.Provider>
     );
}

export default DoctorLoginState;