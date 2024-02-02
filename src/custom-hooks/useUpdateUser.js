import { useState, useEffect } from 'react';
import { updateProfile, deleteUser } from 'firebase/auth';
import { doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import useLogout from './useLogout';
import { db } from '../firebase.config';

const useUpdateUser = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { logout } = useLogout();

  const updateUser = (user, value) => {
    setError(null);
    setIsPending(true);
    try {
      updateProfile(user, { ...user, ...value });
      updateDoc(doc(db, 'users', user.uid), value);
      setSuccessMessage('Profile is updated');
      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      setError(err.message);
      toast.error(`Something went wrong: (${err.message})`);
    }
  };

  const delUser = (user) => {
    setError(null);
    setIsPending(true);
    try {
      deleteDoc(doc(db, 'users', user.uid));
      deleteUser(user);
      logout();
      setSuccessMessage('Profile is deleted');
      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      setError(err.message);
      toast.error(`Something went wrong: (${err.message})`);
    }
  };

  useEffect(() => () => setIsCancelled(true), []);
  return {
    updateUser,
    delUser,
    successMessage,
    error,
    isPending,
  };
};

export default useUpdateUser;
