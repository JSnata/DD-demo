/* eslint-disable import/no-extraneous-dependencies */
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAoioanx8oZ5fVLUkev4ydsfcKav2ClK-I',
  authDomain: 'dd-demo-a3d17.firebaseapp.com',
  projectId: 'dd-demo-a3d17',
  storageBucket: 'dd-demo-a3d17.appspot.com',
  messagingSenderId: '643543308791',
  appId: '1:643543308791:web:12ae092433e9282170b6f2',

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
