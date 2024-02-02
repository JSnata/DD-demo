import { useEffect, useState } from 'react';
import { doc, collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase.config';

const useDocument = (col, id) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);

  // realtime document data
  useEffect(() => {
    const ref = doc(collection(db, col), id);

    // need to make sure the doc exists & has data
    const unsub = onSnapshot(
      ref,
      (snapshot) => {
        setDocument({ ...snapshot.data(), id: snapshot.id });
        setError(null);
      },
      // eslint-disable-next-line no-shadow
      (error) => {
        setError(`could not fetch the data: ${error}`);
      }
    );

    // unsubscribe on unmount
    return () => unsub();
  }, [col, id]);

  return { document, error };
};

export default useDocument;
