import axios from "axios"

class Doctor{
    constructor(){
        this.url = "http://localhost:5000"
    }

    doctorLogin = (login) =>{
        return axios.post(this.url+"/login",login)
    }

    searchPatientById = (obj) =>{
        console.log(typeof(obj.id))
        return axios.get(this.url+"/users/searchPatients/"+obj.id)
    }

    registerDoctor = (data) =>{
        return axios.post(this.url+"/doctor/register",data)
    }
    
}

export default new Doctor()