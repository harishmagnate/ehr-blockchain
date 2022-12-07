import axios from "axios"

class Patient{
    constructor(){
        this.url = "http://localhost:5000"
    }

    patientLogin = (login) =>{
        return axios.post(this.url+"/login",login)
    }
    
}

export default new Patient()