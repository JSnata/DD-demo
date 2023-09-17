import { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { auth, db } from '../firebase.config';
import useAuthContext from './useAuthContext';

const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const signup = (userName, email, password) => {
    setError(null);
    setIsPending(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        updateProfile(res.user, {
          displayName: userName,
        });

        setDoc(doc(db, 'users', res.user.uid), {
          uid: res.user.uid,
          displayName: userName,
          email,
        });

        dispatch({ type: 'LOGIN', payload: res.user });
        toast.success('Account created');
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

  return { signup, error, isPending };
};

export default useSignup;
