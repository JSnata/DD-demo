import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import { auth } from '../firebase.config';
import useAuthContext from './useAuthContext';

const useLogout = () => {
  const navigate = useNavigate();
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const logout = () => {
    signOut(auth)
      .then(() => {
        dispatch({ type: 'LOGOUT' });
        toast('Logged out');
        navigate('/dashboard');
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
  return { logout, error, isPending };
};

export default useLogout;
