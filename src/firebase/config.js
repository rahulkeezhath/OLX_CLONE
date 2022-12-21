import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyDbvQtp5bp-2dl1FSZZJM3qIuhgm28hNcc",
    authDomain: "fir-54bae.firebaseapp.com",
    projectId: "fir-54bae",
    storageBucket: "fir-54bae.appspot.com",
    messagingSenderId: "240250911092",
    appId: "1:240250911092:web:c4ef98a720688bfff35421",
    measurementId: "G-2SZY1LXCCF"
  };
  
  export default firebase.initializeApp(firebaseConfig)