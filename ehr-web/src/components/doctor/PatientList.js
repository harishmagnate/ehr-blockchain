import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Doctor from "../../api/Doctor";
import DoctorLoginContext from "../../contexts/DoctorLoginContext";
import Patient from "./Patient";
import "./static/css/PatientList.css"

function PatientList() {
    const style = {
        background: 'transparent',
        borderRadius: '15px',
        border: '0px',
        borderBottom: '1px solid'
    }

    const patients = [{ id: "1", firstName: "Piyush", lastName: "Gupta", email: "pg339875@gmail.com" },
    { id: "1", firstName: "Piyush", lastName: "Gupta", email: "pg339875@gmail.com" },
    { id: "1", firstName: "Piyush", lastName: "Gupta", email: "pg339875@gmail.com" },
    { id: "1", firstName: "Piyush", lastName: "Gupta", email: "pg339875@gmail.com" }]

    const doctorcontext = useContext(DoctorLoginContext)
    const navigate = useNavigate()

    const [id, setid] = useState("");
    const [iserror, setiserror] = useState(false);
    const [errormsg, seterrormsg] = useState("");
    const [patientsList, setpatientsList] = useState(patients);

    useEffect(() => {
        if(!doctorcontext.isLogin){
            navigate("/doctor/login")
        }
    })

    const handleId=(event)=>{
        console.log(typeof(id))
        setid(event.target.value)
    }

    const handleIdSearch = (event)=>{
        event.preventDefault()

        if(id.trim()===""){
            setiserror(true)
            seterrormsg("Please enter a valid ID")
            return
        }

        const obj = {
            id : ""+id
        }

        Doctor.searchPatientById(obj).then(data=>{
            console.log(data.data)
            setpatientsList(data.data)
        }).catch(err=>{
            console.log(err);
        })

    }

    function handleAll(){
        setpatientsList(patients)
    } 

    

    



    return (
        <div>

            <div className="container my-3 pt-5 bg-light">
                <h3 className="text-center text-dark" style={{ textDecoration: "underline", fontWeight: "bold" }}>Patients List</h3>
                <div className="row mt-5">
                    <div className="col-md-8 mx-auto">
                        <div className="row">
                            <div className="col-md-6 text-center">
                                <form onSubmit={handleIdSearch}>
                                    <input type="text" name="id" onChange={handleId} className="form-control" style={style} required placeholder="Enter Patient Id"></input>
                                    <br></br>
                                    <button type="submit" className="btn btn-outline-primary btn-outline-teal">Search Patient</button>
                                </form>
                            </div>
                            <div className="col-md-6 text-center" style={{ borderLeft: '1px solid grey' }}>
                                <form className="">
                                    <input type="text" className="form-control" style={style} required placeholder="Enter Firstname,Lastname or Email"></input>
                                    <br></br>
                                    <button className="btn btn-outline-primary btn-outline-teal">Search Patient</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="col-md-10 mx-auto mt-5">
                    <p className="btn btn-outline-primary btn-outline-teal" onClick={handleAll}>All Patients</p>
                    <p className="text-right"><Link to="/doctor/mypatients" className="text-teal">My Patients</Link></p>
                    <Patient patients={patientsList}></Patient>
                </div>

            </div>

            <div className="container">

            </div>
        </div>
    );
}

export default PatientList;