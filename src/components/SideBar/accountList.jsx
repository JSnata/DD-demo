import React, { useState } from 'react';
import { Divider } from '@mui/material';
import { concat as _concat } from 'lodash-es';

import List from '../../UI/List/List';
import Item from '../../UI/List/Item';
import { accountLinks } from '../../assets/dummy-data/navLinks';
import useLogout from '../../custom-hooks/useLogout';
import ConfirmationDialog from '../ConfirmationDialog';

function AccountList() {
  const [openDialog, setOpenDialog] = useState(false);
  const { logout } = useLogout();

  const openDialogHandler = () => {
    setOpenDialog(true);
  };

  const list = _concat(accountLinks, [
    {
      action: openDialogHandler,
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
      <ConfirmationDialog
        title="Are you sure?"
        content="Yuo will be logged out"
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        callback={logout}
      />
    </>
  );
}

export default AccountList;
