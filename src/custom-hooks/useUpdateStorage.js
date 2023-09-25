// eslint-disable-next-line label-has-associated-control
import { useState, useEffect } from 'react';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../firebase.config';
import { toast } from 'react-toastify';

const useUpdateStorage = (file, category, id, flag) => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [progresspercent, setProgresspercent] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
  const [isPending, setIsPending] = useState(false);

  // const updateStorage = (file, category, id, callback) => {
  useEffect(() => {
    if (flag) {
      setError(null);
      setIsPending(true);
      const storageRef = ref(storage, `${category}/${id}/${file.name}`);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgresspercent(progress);
        },
        (err) => {
          setError(err);
          toast.error(`Something went wrong: (${err.message})`);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setUrl(downloadURL);
            toast.success('Succesfully updated img');
          });
        }
      );
      // }
    }
  }, [file, category, id, flag]);

  return { url, error, isPending };

  // useEffect(() => {

  // }, [file, category, id]);
};

export default useUpdateStorage;
