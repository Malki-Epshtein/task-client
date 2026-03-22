import axios from "axios"

const URL= "https://localhost:7207/api/KindTaskControllers/"

//1.1
export const GetKindTaskReakt=()=>
{
    return axios.get(`${URL}GetKindTasks`)
}

//1.2

export const GetKindTasksById=(id)=>
{
    return axios.get(`${URL}GetKindTasksById/${id}` )
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
export const UpDateReact =(obg)=>
{
    return axios.put(`${URL}UpDate`, obg)
}