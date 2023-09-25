/*eslint-disable */
import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import useDeleteUser from '../../custom-hooks/useDeleteUser';
import useUpdateUser from '../../custom-hooks/useUpdateUser';
import SettingsInput from '../../UI/Inputs/SettingsInput';
import useAuthContext from '../../custom-hooks/useAuthContext';
import useUpdateStorage from '../../custom-hooks/useUpdateStorage';
import SecondaryButton from '../../UI/Buttons/SecondaryButton';
import s from './Settings.module.css';
import FileUploader from '../../components/FileUploader/FileUploader';

function Settings() {
  const { user, authIsReady, dispatch } = useAuthContext();
  const { updateUser } = useUpdateUser();
  const { delUser, error, isPending } = useDeleteUser();
  const [file, setFile] = useState('');
  const [flag, setFlag] = useState(false);
  const { url } = useUpdateStorage(file, 'userImages', user.uid, flag );

console.log(url)
  const initialValues = {
    displayName: '',
    street: '',
    birthDate: '',
    gender: '',
    photo: '',
  };

  const handleProfileSettings = (formValue) => {
    const updateData = {};

    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(formValue)) {
      if (value) {
        updateData[key] = value;
      }
    }
    updateUser(user, updateData)
    if(file){
      setFlag(true);
    }
  };

  useEffect(() => {
    if(url && flag){
      updateUser(user, { photoUrl: url, })
    }
  }, [url, flag]);

  return (
    <div className="content__wrapper">
      <h2 className="main_title">Settings</h2>
      <div className={s.settings}>
        {/* <div className={s.settings__top}>
          <button className={s.setting__btn}>My Details</button>
          <button className={`${s.setting__btn} ${s.active__btn}`}>Profile</button>
          <button className={s.setting__btn}>Password</button>
          <button className={s.setting__btn}>Email</button>
          <button className={s.setting__btn}>Notification</button>
        </div> */}
        <div className={s.details__form}>
          {/* <h2 className={s.profile__title}>Profile</h2> */}
          <p className={s.description}>
            Update your photo and personal details here
          </p>
          <Formik
            initialValues={initialValues}
            onSubmit={handleProfileSettings}
          >
            <Form>
              <div className={s.form__group}>
                <SettingsInput
                  name="displayName"
                  id="displayName"
                  type="displayName"
                  label="displayName"
                  placeholder="displayName"
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
              <div className={s.form__group}>
                <FileUploader category="userImages" id={user.uid} setFile={setFile}/>
                <div className={s.profile__img_btns}>
                  <button
                    type="button"
                    className={s.dlt__btn}
                    onClick={() => delUser(user)}
                  >
                    Delete
                  </button>
                  <button type="submit" className={s.update__btn}>
                    Update
                  </button>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Settings;
