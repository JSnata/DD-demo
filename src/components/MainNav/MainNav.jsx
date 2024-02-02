import React from 'react';
import List from '../../UI/List/List';
import Item from '../../UI/List/Item';
import navLinks, { guestNavLinks } from '../../assets/dummy-data/navLinks';
import useAuthContext from '../../custom-hooks/useAuthContext';

function MainNav() {
  const { user } = useAuthContext();

  return (
    <nav>
      <List>
        {(user ? navLinks : guestNavLinks).map((item) => (
          <Item
            key={item.link}
            link={item.link}
            icon={item.icon}
            title={item.title}
          />
        ))}
      </List>
    </nav>
  );
}

export default MainNav;
