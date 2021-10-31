import firebase from "firebase"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCbMRhBIG8HrG66hPw2RzEQ5slB9KhuUSc",
    authDomain: "twitter-clone-dc6cd.firebaseapp.com",
    projectId: "twitter-clone-dc6cd",
    storageBucket: "twitter-clone-dc6cd.appspot.com",
    messagingSenderId: "168476557981",
    appId: "1:168476557981:web:2968f5224aab7dfe9eca74",
    measurementId: "G-3LJ8GWRJHB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;