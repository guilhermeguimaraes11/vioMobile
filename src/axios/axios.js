import axios from "axios";

const api = axios.create({
    baseURL:"http://10.89.240.79:5000/api/v1/",
    headers:{
        'Accept':'application/json'
    }
});

const sheets = {
    postLogin:(user)=>api.post("login/", user)
}

export default sheets;