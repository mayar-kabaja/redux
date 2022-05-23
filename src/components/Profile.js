import React from 'react'
import { useSelector } from 'react-redux'

function Profile() {
  const  user  = useSelector((state) => state.user.value)
  return (
    <div>Profile
      <div>name : {user.name}</div>
      <div>age : {user.age}</div>
      <div>email : {user.email}</div>
    </div>
    
  )
}

export default Profile