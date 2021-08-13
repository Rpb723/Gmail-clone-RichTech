import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCQKw6qkBf8wYR_565_H2M-bJ893xIKcjw",
    authDomain: "clone-richtech.firebaseapp.com",
    projectId: "clone-richtech",
    storageBucket: "clone-richtech.appspot.com",
    messagingSenderId: "555733479916",
    appId: "1:555733479916:web:9c59b78e4681e45646d0c9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };