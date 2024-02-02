/*eslint-disable */
import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { Formik, Form } from 'formik';
import { toast } from 'react-toastify';

import useDeleteUser from '../../custom-hooks/useDeleteUser';
import useUpdateUser from '../../custom-hooks/useUpdateUser';
import SettingsInput from '../../UI/Inputs/SettingsInput';
import useAuthContext from '../../custom-hooks/useAuthContext';
import useUpdateStorage from '../../custom-hooks/useUpdateStorage';
import s from './Settings.module.css';
import FileUploader from '../../components/FileUploader/FileUploader';
import ConfirmationDialog from '../../components/ConfirmationDialog';

const initialValues = {
  displayName: '',
  street: '',
  email: '',
  birthDate: '',
  gender: '',
  photo: '',
};

function isEmptyValues(obj) {
  return Object.values(obj).every((value) => value.trim() === '');
}

function Settings() {
  const { user } = useAuthContext();
  const { updateUser, successMessage: updateUserSuccessMessage } =
    useUpdateUser();
  const { deleteUserHandler: deleteUser } = useDeleteUser();
  const [file, setFile] = useState('');
  const [flag, setFlag] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [successMessageFlag, setSuccessMessageFlag] = useState(false);
  const { url } = useUpdateStorage(file, 'userImages', user.uid, flag);

  const handleProfileSettings = (formValue, { resetForm }) => {
    const updateData = {};

    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(formValue)) {
      if (value) {
        updateData[key] = value;
      }
    }
    updateUser(user, updateData);
    resetForm();
    if (file) {
      setFlag(true);
    }
  };

  useEffect(() => {
    if (url && flag) {
      updateUser(user, { photoUrl: url });
    }
  }, [url, flag]);

  useEffect(() => {
    if (updateUserSuccessMessage && !successMessageFlag) {
      console.log(successMessageFlag);
      setSuccessMessageFlag(true);
      toast.success(updateUserSuccessMessage);
    }
  }, [updateUserSuccessMessage, successMessageFlag]);

  return (
    <div className="content__wrapper">
      <ConfirmationDialog
        title="Are you sure?"
        content="This action will delete account permanently"
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        callback={deleteUser}
      />
      <h2 className="main_title">Settings</h2>
      <div className={s.settings}>
        <div className={s.details__form}>
          <Formik
            initialValues={initialValues}
            onSubmit={handleProfileSettings}
          >
            {({ values }) => (
              <Form>
                <div className={s.title}>
                  <h3 className={s.description}>
                    Update your photo and personal details here
                  </h3>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => {
                      setOpenDialog(true);
                    }}
                  >
                    Delete Account
                  </Button>
                </div>

                <div className={s.form__group}>
                  <FileUploader setFile={setFile} name="photo" />
                </div>

                <div className={s.form__group}>
                  <SettingsInput
                    name="displayName"
                    id="displayName"
                    type="displayName"
                    label="Name"
                  />
                  <SettingsInput
                    name="street"
                    id="street"
                    type="text"
                    label="Street"
                    placeholder="SYL 3108"
                  />
                </div>
                <div className={s.form__group}>
                  <SettingsInput
                    name="email"
                    id="email"
                    type="email"
                    label="Email"
                    placeholder="example@gmail.com"
                  />
                  <SettingsInput
                    name="phone"
                    id="phone"
                    type="number"
                    label="Phone Number"
                    placeholder="+880 17*******"
                  />
                </div>
                <div className={s.form__group}>
                  <SettingsInput
                    name="birthDate"
                    id="birthDate"
                    type="date"
                    label="Date of Birth"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <SettingsInput
                    type="text"
                    id="gender"
                    name="gender"
                    label="Gender"
                    placeholder="Male"
                  />
                </div>

                <div className={s.actions_wrapper}>
                  <Button
                    variant="contained"
                    type="submit"
                    color="primary"
                    disabled={isEmptyValues(values)}
                  >
                    Update
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Settings;
