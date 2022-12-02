function MyPatient() {

    const patients = [{ id: "1", firstName: "Piyush", lastName: "Gupta", email: "pg339875@gmail.com" },
    { id: "1", firstName: "Piyush", lastName: "Gupta", email: "pg339875@gmail.com" },
    { id: "1", firstName: "Piyush", lastName: "Gupta", email: "pg339875@gmail.com" },
    { id: "1", firstName: "Piyush", lastName: "Gupta", email: "pg339875@gmail.com" }]

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
                                        <td><button className="btn btn-success btn-sm px-3">View Records</button></td>
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