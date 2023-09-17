import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase.config';

const useCollection = (col) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState('');
  // if we don't use a ref --> infinite loop in useEffect
  // _query is an array and is "different" on every function call
  useEffect(() => {
    const ref = collection(db, col);
    const unsub = onSnapshot(
      ref,
      (snapshot) => {
        const results = [];
        // console.log(snapshot);
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });

        // if (category) {
        //   const categoryDocuments = results.filter(
        //     (doc) => doc.category === category,
        //   );
        //   setDocuments(categoryDocuments);
        //   setTitle(results[0].category);
        // } else {
        setDocuments(results);
        // }
        setError(null);
      },
      (error) => {
        setError(`could not fetch the data, error: ${error}`);
      },
    );

    return () => unsub();
  }, [col]);

  return { documents, error, title };
};

export default useCollection;
