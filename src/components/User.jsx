import React from 'react';
import { useSelector } from 'react-redux';

function User() {
  const user = useSelector((state) => state.user);
  return (
    <div>
      <p>
        {user.user.name}
      </p>
      <p>
        {user.user.email}
      </p>
    </div>
  );
}

export default User;
