import { createSlice } from "@reduxjs/toolkit"


const initialState=
{
    taskDB:[]   
}

export const SliceTaskDB=createSlice({
    name:"taskDB",
    initialState,
    reducers:{
        addTask:(state,action)=>
        {
            state.taskDB.push(action.payload)
        },
        deleteTask:(state,action)=>
        {
          state.taskDB = state.taskDB.filter(x => x.idTask != action.payload)
        },
        fillTaskDB:(state,action)=>
        {
            state.taskDB=action.payload
        }

    }})

export const{addTask,fillTaskDB,deleteTask}=SliceTaskDB.actions
export default SliceTaskDB.reducer
