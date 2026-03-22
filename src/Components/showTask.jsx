import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../styles/showTask.css'
import { RemoveReact } from '../axios/TaskAxios'
import { deleteTask } from '../redux/reduser/taskDB'


const ShowTask = () => {
    let taskDBShowTask=useSelector(x=>x.taskDBReducer.taskDB)
    let tzShowTask=useSelector(x=>x.userDBReducer.tzUser)
    let dispatch=useDispatch()


    const DeleteTask=async(id)=>
    {
        alert(id)//לבדיקה לא לשכוח למחוק!
      await RemoveReact(id)
      dispatch(deleteTask(id))
    }

  


    return  <div>
        
     {taskDBShowTask.filter(task => task.tzUser == tzShowTask).length == 0 ? (
        <p>No tasks found for the current user run add tasks!!!!!!!!!!!!!!!!!</p>
    ) : (
        <ul>{taskDBShowTask.filter(task => task.tzUser == tzShowTask).map(task => (
        <li style={{color:task.tColort}} key={task.idTask} >
                <span>{task.discreption}</span>
                <span>{`kindNameTask: ${task.kindNameTask}`}</span>
                <span>{`NameUser: ${task.nameUser}`}</span>
                <span>{ task.dataTask  }</span>
                <button onClick={()=> DeleteTask(task.idTask)}>Delete</button>
        </li>
        
    ))}
    </ul>
    
    )}
    
    
    </div>
}

export default ShowTask