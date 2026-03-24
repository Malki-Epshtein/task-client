import axios from "axios"

const URL = "https://task-server-jf3v.onrender.com/"

//1.1
export const GetTaskReakt = () => {
    return axios.get(`${URL}GetTasks`)
}

//1.2
export const GetTaskByIDReact = (id) => {
    return axios.get(`${URL}GetTaskById/${id}`)
}

//2
export const AddReact = (obg) => {
    return axios.post(`${URL}Add`, obg)
}

//3
export const RemoveReact = (id) => {
    return axios.delete(`${URL}Remove/${id}` )
}

//4
export const UpDateReact = (obg) => {
    return axios.put(`${URL}UpDate`, obg)
}