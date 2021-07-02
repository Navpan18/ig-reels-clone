import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCidyDErrvNlVF5b-gN9Anm3hYkkGeajT0",
    authDomain: "ig-reels-clone-nav.firebaseapp.com",
    projectId: "ig-reels-clone-nav",
    storageBucket: "ig-reels-clone-nav.appspot.com",
    messagingSenderId: "849616696175",
    appId: "1:849616696175:web:4eadc0569589c584116e9a",
    measurementId: "G-0F6RF3YMXQ"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db =firebaseApp.firestore()
  export default db;