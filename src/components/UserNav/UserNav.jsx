import React from 'react';
import useDocument from '../../custom-hooks/useDocument';
import avatarImg from '../../assets/images/profile.png';
import s from './UserNav.module.css';

function UserNav({ userId }) {
  const { document } = useDocument('users', userId);

  return (
    <div className={s.user_nav}>
      {document && <img src={document.photoUrl || avatarImg} alt="" />}
    </div>
  );
}

export default UserNav;
