import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import DoctorLoginContext from "../../contexts/DoctorLoginContext";

function MyPatient() {

    const patients = [{ id: "1", firstName: "Piyush", lastName: "Gupta", email: "pg339875@gmail.com" },
    { id: "1", firstName: "Piyush", lastName: "Gupta", email: "pg339875@gmail.com" },
    { id: "1", firstName: "Piyush", lastName: "Gupta", email: "pg339875@gmail.com" },
    { id: "1", firstName: "Piyush", lastName: "Gupta", email: "pg339875@gmail.com" }]


    const doctorcontext = useContext(DoctorLoginContext)
    const navigate = useNavigate()
    useEffect(() => {
        if(!doctorcontext.isLogin){
            navigate("/doctor/login")
        }
    })

    return (
        <div className="container mt-5">
            <h2 className="text-light text-center" style={{ fontWeight: "bold" }}>Your Patients List</h2>
            <div className="row">
                <div className="col-md-12">
                    <table class="table table-dark table-striped mt-5">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {patients.map(patient => {
                                return (
                                    <tr>
                                        <th scope="row">{patient.id}</th>
                                        <td>{patient.firstName}</td>
                                        <td>{patient.lastName}</td>
                                        <td>{patient.email}</td>
                                        <td><Link className="btn btn-success btn-sm px-3" to="/doctor/mypatients/record/1">View Records</Link></td>
                                    </tr>
                                );
                            }
                            )}
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    );
}

export default MyPatient;