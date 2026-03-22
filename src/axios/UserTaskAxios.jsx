import axios from "axios"

const URL= "https://localhost:7207/api/UserTaskControllers/"

//1.1
export const GetUserTaskReakt=()=>
{
    return axios.get(`${URL}getUserTask`)
}

//1.2
export const GetUserTaskByIDReact=(id)=>
{
    return axios.get(`${URL}GetUserTaskByID/${id}`)
}

//1.3
export const GetUserTaskByNameAndPasswordReact =(name , id)=>
{
    return axios.get(`${URL}GetUserTaskByNameAndPassword/${name}/${id}`)
}

//2
export const AddReact =(obg)=>
{
    return axios.post(`${URL}Add`, obg)
}

//3
export const RemoveReact =(id)=>
{
    return axios.delete(`${URL}Remove/${id}`)
}

//4
export const UpDate =(obg)=>
{
    return axios.put(`${URL}UpDate`, obg)
}



