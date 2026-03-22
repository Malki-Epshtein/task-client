import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setConnected, setcurrentUser, settzUser } from '../redux/reduser/uaersDB'
import { useNavigate } from 'react-router-dom'
import { GetUserTaskByNameAndPasswordReact } from '../axios/UserTaskAxios'

const LogIn = () => {

     const [nameUserValue,setNameUserValue]=useState("")
     const [passwordUserValue,setPasswordUserValue,]=useState("")

     let dispatch=useDispatch()
     let navigate=useNavigate()

     let userDBLogIn =useSelector((x)=>x. userDBReducer.userDB)
     
    const checkUser= async()=>
    {
        if(userDBLogIn.length==0)
        {
            alert("stuil loading data from server please wait a moment and try again")
            return;
        }

        
        let user = (await GetUserTaskByNameAndPasswordReact(nameUserValue, passwordUserValue)).data;
        if(user)
        {
            let currentUserLocalStorage = user.nameUser
            let tzUserLocalStorage = user.tzUser
            alert("welcome "+user.nameUser)
            dispatch(setConnected(true))
            dispatch(setcurrentUser(user.nameUser))
            dispatch(settzUser(user.tzUser))
            localStorage.setItem("currentUserLocalStorage" ,JSON.stringify(currentUserLocalStorage))
            localStorage.setItem("tzUserLocalStorage" ,JSON.stringify(tzUserLocalStorage))
            navigate("/showTask")
        }
        else
        {
            alert("user not found")
           
        }
    }
  return (
    <div>
        <input type="text" placeholder='input name'onChange={(e)=>setNameUserValue(e.target.value)}></input>
        <input type="text" placeholder='input password' onChange={(e)=>setPasswordUserValue(e.target.value)}></input>
        <button onClick={()=>checkUser()}>login</button>  
    </div>
  )
}

export default LogIn