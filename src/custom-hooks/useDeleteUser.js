import { useState, useEffect } from 'react';
import { deleteUser } from 'firebase/auth';
import { doc, deleteDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import useLogout from './useLogout';
import { db } from '../firebase.config';
import useAuthContext from './useAuthContext';

const useDeleteUser = () => {
  const { user } = useAuthContext();
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { logout } = useLogout();

  const deleteUserHandler = () => {
    setError(null);
    setIsPending(true);
    deleteUser(user)
      .then(() => {
        deleteDoc(doc(db, 'users', user.uid));
      })
      .then(() => {
        logout();
      })
      .then(() => {
        toast.success('Profile deleted');
        if (!isCancelled) {
          setIsPending(false);
          setError(null);
        }
      })
      .catch((err) => {
        setError(err.message);
        toast.error(`Something went wrong: (${err.message})`);
      });
  };

  useEffect(() => () => setIsCancelled(true), []);
  return {
    deleteUserHandler,
    error,
    isPending,
  };
};

export default useDeleteUser;
