import React from 'react';
import { Paper } from '@mui/material';
import useDocument from '../../custom-hooks/useDocument';
import useAuthContext from '../../custom-hooks/useAuthContext';
import classes from './Profile.module.css';
import Item from './item';

function Profile() {
  const { user } = useAuthContext();
  const { document } = useDocument('users', user.uid);

  const { email, displayName, gender, street, birthDate, photoUrl } =
    document || {};

  if (!document) {
    return null;
  }

  return (
    <div className="content__wrapper">
      <h2 className="main_title">Profile</h2>
      {document && (
        <Paper elevation={0} className={classes.profile_wrapper}>
          {photoUrl && (
            <div className={classes.profile_image_block}>
              <img className={classes.profile_image} src={photoUrl} alt="" />
            </div>
          )}

          <div className={classes.content}>
            {displayName && (
              <h2 className={classes.title}>Hello there, {displayName}</h2>
            )}

            <ul className={classes.profile_data_list}>
              {email && <Item title="Email" value={email} />}
              {gender && <Item title="Gender" value={gender} />}
              {street && <Item title="Address" value={street} />}
              {birthDate && <Item title="Date of Birth" value={birthDate} />}
            </ul>
          </div>
        </Paper>
      )}
    </div>
  );
}

export default Profile;
