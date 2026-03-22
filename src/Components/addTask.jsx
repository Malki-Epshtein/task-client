import React, { use, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, fillTaskDB } from '../redux/reduser/taskDB'
import { useNavigate } from 'react-router-dom'

import {  GetKindTasksById } from '../axios/KindTaskAxios'
import { AddReact, GetTaskReakt } from '../axios/TaskAxios'




const AddTask = () => {

    const [discreptionValue,setDiscreptionValue]=useState("")
    const [passwordKindValue,setPasswordKindValue]=useState("")
    const [dataTaskValue,setDataTaskValue]=useState("")

    let dispatch=useDispatch()
    let tzUserAddTask=useSelector(x=>x.userDBReducer.tzUser)
    let navigate=useNavigate()
 
  
    const addTaskFront=async()=>
    {

       
      if ( !discreptionValue || !passwordKindValue || !dataTaskValue) {
          alert("Please fill in all fields before adding the task.");
          return;
        }
      try
      {
              let taskType = (await GetKindTasksById(passwordKindValue)).data
              let color = taskType.tcolor
              const taskToSave = {discreption: discreptionValue,passwordKind: passwordKindValue,tzUser: tzUserAddTask,tColort: color,dataTask: dataTaskValue};
              debugger 

            let idTaskReturn = (await AddReact(taskToSave)).data;
            const updatedTask = { ...taskToSave, idTask: idTaskReturn };

            dispatch(addTask(updatedTask))//כי חבל לי על הקריאה לשרת פעמיים
            alert(`the task : ${discreptionValue}, ${passwordKindValue}, ${tzUserAddTask}, ${color}, ${dataTaskValue} is added`);
            navigate("/showTask")
      }
      catch (er) {
 
              if (er.response && er.response.data) {
              alert("שגיאה מהשרת: " + er.response.data);//כדי שלא יפול
    } 
}

      
    }
  return (
    <div>
      <input type="text" placeholder='input discreption' onChange={(e)=>setDiscreptionValue(e.target.value)}></input>
      <input type="date" placeholder='input dataTask' onChange={(e)=>setDataTaskValue(e.target.value)}></input>
      <label for="passwordKind">choose kind of task</label>
      <select id="passwordKind" name="choose kind of task" onChange={(e)=>setPasswordKindValue(e.target.value)}>
        <option value="">choose..</option>
        <option value="1">cleaning</option>
        <option value="2">bought</option>
        <option value="3">washing</option>
        <option value="4">ironing</option>
        <option value="5">cooking</option>
      </select>
      <button onClick={()=>addTaskFront()}>add task</button>   
    </div>
  )
}

export default AddTask