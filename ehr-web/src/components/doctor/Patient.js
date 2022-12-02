export default function Patient(props){
    
    return(
        <div className="container">
                <div className="col-md-12 mx-auto">
                    <div className="row">
                        <table class="table table-dark table-striped">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Access</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.patients.map(patient => {
                                        return (
                                            <tr>
                                                <th scope="row">{patient.id}</th>
                                                <td>{patient.firstName}</td>
                                                <td>{patient.lastName}</td>
                                                <td>{patient.email}</td>
                                                <td><button className="btn btn-success btn-sm px-3">Request</button></td>
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