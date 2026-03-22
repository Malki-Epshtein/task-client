import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fillUserDB } from '../redux/reduser/uaersDB';
import { GetKindTaskReakt} from '../axios/KindTaskAxios';
import { fillkindTaskDB } from '../redux/reduser/kindTaskDB';
import { AddReact, GetUserTaskReakt } from '../axios/UserTaskAxios';
import { fillTaskDB } from '../redux/reduser/taskDB';
import { GetTaskReakt } from '../axios/TaskAxios';


const  DataLoad= () => {

let dispatch=useDispatch();
const hasAlerted = useRef(false);//שלא יהיה מלא פעמים ALERT


//1

let taskLoadData = useSelector(x =>  x.taskDBReducer.taskDB)
let userTaskLoadData = useSelector(x => x.userDBReducer.userDB)
let kindTaskLoadData = useSelector(x => x.kindTaskDBReducer.kindTaskDB)



    useEffect(() => {

        if(userTaskLoadData.length == 0)
        {

          const giveUserDB =async ()=> {

            try{
                 let response = await GetUserTaskReakt();
                 let arrDemo = response?.data;
                  dispatch(fillUserDB(arrDemo));
            }
            catch(e)
            {
                if(!hasAlerted.current)
                {
                hasAlerted.current = true
                alert("שגיאת שרת: "+e.response?.data)
                }
            }
         
          }
          giveUserDB()
        }
       
    }, [dispatch]);


//2

useEffect(()=>
{

    if(kindTaskLoadData.length == 0)
    {

    const giveKindTaskDB = async ()=>{

        try{
              let response = await GetKindTaskReakt();
              let arrDemo = response?.data;
        dispatch(fillkindTaskDB(arrDemo))

        }
       catch(e)
       {
        if(!hasAlerted.current)
        {
                hasAlerted.current = true
               alert("שגיאת שרת: "+e.response?.data)
        }
       }
      
        }
        giveKindTaskDB()
    }
},[dispatch])

//3

useEffect(()=>
{

    if(taskLoadData.length == 0)
    {
    const giveTaskDB = async ()=>{ 
        try{
            let response = await GetTaskReakt();
            let arrDemo = response?.data;
            dispatch(fillTaskDB(arrDemo))
        }  
        
        catch(e)
        {
            if(!hasAlerted.current)
            {
             hasAlerted.current = true
             alert("שגיאת שרת: "+e.response?.data)
            }
        }
     
        }   
        giveTaskDB()

    }
},[dispatch])


return null 
}


export default DataLoad