import { useState, useEffect } from 'react';
import { deleteUser } from 'firebase/auth';
import { doc, deleteDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import useLogout from './useLogout';
import { db } from '../firebase.config';

const useDeleteUser = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { logout } = useLogout();

  const delUser = (user) => {
    console.log(user);
    setError(null);
    setIsPending(true);
    deleteUser(user)
      .then(() => {
        console.log('im here');
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
    delUser,
    error,
    isPending,
  };
};

export default useDeleteUser;
