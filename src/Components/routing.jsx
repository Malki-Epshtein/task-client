import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddTask from './addTask'
import LogIn from './logIn'
import Register from './register'
import ShowTask from './showTask'
import ShowTaskDic from './showTaskDic'
import BreakAway from './breakAway'
import Home from './home'

const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/addTask" element={<AddTask/>}></Route>
            <Route path="/login" element={<LogIn/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/showTask" element={<ShowTask/>}></Route>
            <Route path="/showTaskDic" element={<ShowTaskDic/>}></Route>
            <Route path="/breakAway" element={<BreakAway/>}></Route>
        </Routes>

    </div>
  )
}

export default Routing