import axios from "axios";

const config = {
    baseURL: `http://localhost:8000/`,
    timeout: 6000,
}

export const Request = {
    async post(url, data){
        return axios.post(url, data, config)  
    },

    async get(url){
        return axios.get(url, config)
    }
}