import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase.config';
import useAuthContext from './useAuthContext';

const useLogin = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const login = (email, password) => {
    setError(null);
    setIsPending(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        dispatch({ type: 'LOGIN', payload: res.user });
        toast.success('Succesfully logged in');
        navigate('/');
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

  return { login, error, isPending };
};

export default useLogin;
