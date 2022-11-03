import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/storage'; 
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC28p-cfO34G34NVOkNptFbu5C2Dnx6XS4",
  authDomain: "netflix-3a4db.firebaseapp.com",
  projectId: "netflix-3a4db",
  storageBucket: "netflix-3a4db.appspot.com",
  messagingSenderId: "541838944498",
  appId: "1:541838944498:web:999b6f4cc416cac27f886b",
  measurementId: "G-5W2P7LFGD6"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
