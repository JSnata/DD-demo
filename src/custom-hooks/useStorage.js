import { useEffect, useState } from 'react';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase.config';

const useStorage = (id) => {
  const [url, setUrl] = useState([]);
  useEffect(() => {
    const listRef = ref(storage, `products/${id}`);
    const resItems = [];

    listAll(listRef)
      .then((res) => {
        res.items.forEach((itemRef) => {
          getDownloadURL(itemRef)
            .then(() => {
              resItems.push(res);
              setUrl(resItems);
            })
            .catch((error) => {
              console.log(error);
            });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return { url };
};

export default useStorage;
