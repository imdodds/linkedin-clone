import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBK8LuAShNg4zJSMBKspsLNCkPLhXqsu30",
  authDomain: "linkedin-clone-a56fb.firebaseapp.com",
  projectId: "linkedin-clone-a56fb",
  storageBucket: "linkedin-clone-a56fb.appspot.com",
  messagingSenderId: "19030071445",
  appId: "1:19030071445:web:a593110d098d71620c639c",
  measurementId: "G-ENYWCEWT7E"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };


// firebase.initializeApp(firebaseConfig);

// export const firestore = firebase.firestore();
// export default firebase;