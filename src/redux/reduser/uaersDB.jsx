import { createSlice } from "@reduxjs/toolkit"


const initialState={
    userDB:[],
    isCenected:localStorage.getItem("currentUserLocalStorage")? true :false,
    currentUser:JSON.parse(localStorage.getItem("currentUserLocalStorage")) ||"not conected",
    tzUser: JSON.parse(localStorage.getItem("tzUserLocalStorage"))||"",
}  


export const SliceuserDB=createSlice({
    name:"userDB",
    initialState,
    reducers:{
        addUser:(state,action)=>
        {
            state.userDB.push(action.payload)
        },
        setConnected:(state,action)=>
        {
            state.isCenected=action.payload
        },
        setcurrentUser:(state,action)=>
        {
            state.currentUser=action.payload
        },
        settzUser:(state,action)=>
        {
            state.tzUser=action.payload
        },
        fillUserDB:(state,action)=>
        {
            state.userDB=action.payload
        }
        
    }})
export const{addUser,setConnected,setcurrentUser,settzUser,fillUserDB}=SliceuserDB.actions
export default SliceuserDB.reducer
