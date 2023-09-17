/* eslint-disable max-len */
import React, { useState } from 'react';

import SecondaryMenu from '../../UI/Menu/SecondaryMenu';
import s from './UserNav.module.css';

function UserNav({ profileImg, menuData, clickHandler }) {
  const [hiddenMenu, setHiddenMenu] = useState(true);

  return (
    <div className={s.user_nav}>
      <button type="button" className={s.user_btn} onClick={() => setHiddenMenu((s) => !s)}>
        <img src={profileImg} alt="" />
      </button>
      {!hiddenMenu ? <SecondaryMenu clickHandler={clickHandler} menuData={menuData} /> : null}
    </div>
  );
}

export default UserNav;
