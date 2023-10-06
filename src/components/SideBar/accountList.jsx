import React from 'react';
import { Divider } from '@mui/material';
import { concat as _concat } from 'lodash-es';

import List from '../../UI/List/List';
import Item from '../../UI/List/Item';
import { accountLinks } from '../../assets/dummy-data/navLinks';
import useLogout from '../../custom-hooks/useLogout';

function AccountList() {
  const { logout } = useLogout();

  const list = _concat(accountLinks, [
    {
      action: logout,
      icon: 'ri-logout-box-line',
      title: 'Logout',
    },
  ]);

  return (
    <>
      <Divider sx={{ my: '25px' }} />
      <List>
        {list.map((item) => (
          <Item
            key={item.title}
            link={item.link}
            icon={item.icon}
            title={item.title}
            action={item.action}
          />
        ))}
      </List>
    </>
  );
}

export default AccountList;
