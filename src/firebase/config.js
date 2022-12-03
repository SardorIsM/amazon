import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCiXycBrt-UOi8slYwRLtfv0ZfbYpQ8Myc",
    authDomain: "fir-3aedf.firebaseapp.com",
    projectId: "fir-3aedf",
    storageBucket: "fir-3aedf.appspot.com",
    messagingSenderId: "219320393732",
    appId: "1:219320393732:web:9f2287cd1e6c8bdbd7d551",
    measurementId: "G-PGFLCRZCN8"
  };

  const backend = firebase.initializeApp(firebaseConfig);
  const auth = backend.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider, backend}