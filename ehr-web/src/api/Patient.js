import axios from "axios"

class Patient{
    constructor(){
        this.url = "http://localhost:5000"
    }

    patientLogin = (login) =>{
        return axios.post(this.url+"/login",login)
    }

    registerPatient = (data) =>{
        return axios.post(this.url+"/patient/register",data)
    }
    
}

export default new Patient()