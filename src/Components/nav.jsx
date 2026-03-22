import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import '../styles/nav.css'

const Nav = () => {
    let conention=useSelector(x=>x. userDBReducer.isCenected)
    let currentUserNav=useSelector(x=>x. userDBReducer.currentUser)
  return (
    <div>
        {conention ? (
            <div>
                <Link to="/home">home</Link>
                <Link to="/addTask">addTask</Link>
                <Link to="/login">login</Link>
                <Link to="/register">register</Link>
                <Link to="/showTask">showTask</Link>
                <Link to="/showTaskDic">showTaskDic</Link>
                <Link to="/breakAway">breakAway</Link>
                <h1>hello {currentUserNav}</h1>
            </div>
        ) : (
           <div>
                <Link to="/home">home</Link>
                <Link to="/login">login</Link>
                <Link to="/register">register</Link>
                 <h1>hello {currentUserNav}</h1>
           </div>
        )}

    </div>
  )
}

export default Nav