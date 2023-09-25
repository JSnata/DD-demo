/* eslint-disable max-len */
import React, { useState } from 'react';
import useDocument from '../../custom-hooks/useDocument';

import SecondaryMenu from '../../UI/Menu/SecondaryMenu';
import s from './UserNav.module.css';

function UserNav({ userId, menuData, clickHandler }) {
  const [hiddenMenu, setHiddenMenu] = useState(true);
  const { document } = useDocument('users', userId);

  return (
    <div className={s.user_nav}>
      <button
        type="button"
        className={s.user_btn}
        onClick={() => setHiddenMenu((s) => !s)}
      >
        {document && <img src={document.photoUrl} alt="" />}
      </button>
      {!hiddenMenu ? (
        <SecondaryMenu clickHandler={clickHandler} menuData={menuData} />
      ) : null}
    </div>
  );
}

export default UserNav;
