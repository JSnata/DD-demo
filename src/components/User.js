import React from 'react'
import { useSelector } from 'react-redux';

function User() {

    const user = useSelector((state) => state.user.value)

  return (
    <div>
        <p>Username: {user.name} </p>
        <p>User Email: {user.email} </p>
    </div>
  )
}

export default User