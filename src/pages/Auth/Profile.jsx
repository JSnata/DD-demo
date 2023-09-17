import React from 'react';
import useDocument from '../../custom-hooks/useDocument';
import useAuthContext from '../../custom-hooks/useAuthContext';

function Profile() {
  const { user } = useAuthContext();
  const { document } = useDocument('users', user.uid);
  return (
    <div>
      <h2>Profile data</h2>
      { document 
      &&
 <ul>
      <li>{document.email}</li>
      <li>{document.gender}</li>
      <li>{document.phone}</li>
      <li>{document.street}</li>
    </ul>
      }
    </div>
  );
}

export default Profile;
