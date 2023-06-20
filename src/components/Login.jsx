import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/userSlice';

function User() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        onChange={(event) => setEmail(event.target.value)}
      />
      <button
        type="button"
        onClick={() => {
          dispatch(setUser(name, email));
        }}
      >
        Login
      </button>
    </div>
  );
}

export default User;
