import axios from "axios";

export const getUsers = (currentPage = 0, pageSize = 10)=>{
    return axios.get(`/api/1.0/users?currentPage=${currentPage}&pageSize=${pageSize}`);
}