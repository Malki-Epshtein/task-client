import React, { use, useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setConnected, setcurrentUser, settzUser } from '../redux/reduser/uaersDB'

const BreakAway = () => { 
    let navigate = useNavigate()
    let dispatch=useDispatch()
    let nameBreakAway = useSelector(x => x.userDBReducer.currentUser)

    useEffect(() => {
    alert(`${nameBreakAway} are break away`)
    dispatch(setConnected(false))
    dispatch(setcurrentUser("not conectuon"))
    dispatch(settzUser(" "))
    navigate("/login")
    }, [dispatch])

  return (
    <div></div>
  )
}

export default BreakAway