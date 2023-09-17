import React from 'react';
import List from '../../UI/List/List';
import Item from '../../UI/List/Item';
import navLinks from '../../assets/dummy-data/navLinks';

function MainNav() {
  return (
    <nav>
      <List>
        {navLinks.map((item) => (
          <Item
            link={item.path}
            icon={item.icon}
            display={item.display}
            end
          />
        ))}
      </List>
    </nav>
  );
}

export default MainNav;
