import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, setConnected, setcurrentUser, settzUser } from '../redux/reduser/uaersDB';
import { useNavigate } from 'react-router-dom';
import { AddReact, GetUserTaskByNameAndPasswordReact } from '../axios/UserTaskAxios';

const Register = () => {

    const [tzUserValue,setTzUserValue]=useState(" ");
    const [nameUserValue,setNameUserValue]=useState("")
    const [passwordUserValue,setPasswordUserValue,]=useState("")

    let dispatch=useDispatch()
    let navigate=useNavigate() 
    let userDBRegister =useSelector((x)=>x. userDBReducer.userDB)

 
   const addUserRegister= async()=>{
         let user = (await GetUserTaskByNameAndPasswordReact(nameUserValue, passwordUserValue)).data;
        if(user)     {
            alert("user already exists")
            return
        }
        await AddReact({tzUser:tzUserValue,nameUser:nameUserValue,passwordUser:passwordUserValue})
        dispatch(addUser({tzUser:tzUserValue,nameUser:nameUserValue,passwordUser:passwordUserValue}))
        let currentUserLocalStorage = nameUserValue
        let tzUserLocalStorage = tzUserValue 
        dispatch(setConnected(true))
        alert("welcome "+nameUserValue)
        dispatch(setcurrentUser(nameUserValue))
        dispatch(settzUser(tzUserValue))
        localStorage.setItem("currentUserLocalStorage" ,JSON.stringify(currentUserLocalStorage))
        localStorage.setItem("tzUserLocalStorage" ,JSON.stringify(tzUserLocalStorage))
        navigate("/showTask")
    }
  return (
    <div>
        <input type="text" placeholder='input tzUser' onChange={(e)=>setTzUserValue(e.target.value)}></input>
        <input type="text" placeholder='input name'onChange={(e)=>setNameUserValue(e.target.value)}></input>
        <input type="text" placeholder='input password' onChange={(e)=>setPasswordUserValue(e.target.value)}></input>
        <button onClick={()=>addUserRegister()}>add user</button>
    </div>
  )
}

export default Register