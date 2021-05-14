import firebase from "firebase";
require('@firebase/firestore')

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC6ar6wCuMiz-Kc4XipNQD96IEAwysmysI",
    authDomain: "secret-santa-a91a1.firebaseapp.com",
    databaseURL: "https://secret-santa-a91a1-default-rtdb.firebaseio.com",
    projectId: "secret-santa-a91a1",
    storageBucket: "secret-santa-a91a1.appspot.com",
    messagingSenderId: "38630632954",
    appId: "1:38630632954:web:9bfaa6b0ae423c24bbc843"
  };
  // Initialize Firebase
var db = firebase.initializeApp(firebaseConfig);
export default firebase.firestore();