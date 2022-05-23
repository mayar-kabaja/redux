import React from 'react'
import { useDispatch } from 'react-redux'
import {login , logout} from './fetshurs/User';

function Login() {
  const dispatch = useDispatch()
  return (
    <>
    <button onClick={()=> {dispatch(login({name : 'mayar' , age : 20,email:'mayar@gmail.com'}))}}>Login</button>
    <button onClick={()=> {dispatch(logout())}}>Logout</button>
    </>
  )
}

export default Login