// import s from './MainNav.module.css';
import React from 'react';
import List from '../List/List';
import Item from '../List/Item';

function MainNav() {
  return (
    <nav>
      <List>
        <Item link="/" end>
          Home
        </Item>
        <Item link="/user">User</Item>
      </List>
    </nav>
  );
}

export default MainNav;
