// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/app';
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyB27UjHlbybOA96B08YQqGfLgnRMeoQvh8",
    authDomain: "ebay-253b1.firebaseapp.com",
    projectId: "ebay-253b1",
    storageBucket: "ebay-253b1.appspot.com",
    messagingSenderId: "933297958762",
    appId: "1:933297958762:web:fc61d41c05166837c7ff13",
    measurementId: "G-V19WMVQCMZ"
  };

  const server = firebase.initializeApp(firebaseConfig);
  const auth  =server.auth();
  const provider = new firebase.auth.GoogleAuthProvider

  export {auth, provider}