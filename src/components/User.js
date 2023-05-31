import React from 'react'
import { useSelector } from 'react-redux';

function User() {

    const user = useSelector((state) => state.user);
    console.log(user);
  return (
    <div>
        <p>Username: {user.user.name} </p>
        <p>User Email: {user.user.email} </p>
    </div>
  )
}

export default User;