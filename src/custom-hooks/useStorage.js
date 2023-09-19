import { useEffect, useState } from 'react';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase.config';

const useStorage = (category, id) => {
  const [url, setUrl] = useState([]);
  useEffect(() => {
    const listRef = ref(storage, `${category}/${id}`);
    const resItems = [];

    listAll(listRef)
      .then((res) => {
        res.items.forEach((itemRef) => {
          getDownloadURL(itemRef)
            .then((result) => {
              resItems.push(result);
              setUrl(resItems);
            })
            .catch((error) => {
              console.log(error.message);
            });
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [id]);

  return { url };
};

export default useStorage;
