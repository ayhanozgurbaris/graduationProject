import axios from "axios";

export const getUsers = ()=>{
    return axios.get('/api/1.0/users');
}