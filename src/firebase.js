import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA3VbTh9LJBSJSdTzfPM79B30_ly88PmRA",
    authDomain: "messenger-app-19aec.firebaseapp.com",
    databaseURL: "https://messenger-app-19aec.firebaseio.com",
    projectId: "messenger-app-19aec",
    storageBucket: "messenger-app-19aec.appspot.com",
    messagingSenderId: "986228840830",
    appId: "1:986228840830:web:0656bc20c2a021fb6e7b2f",
    measurementId: "G-LRY16PP7NL"
});

const db = firebaseApp.firestore();

export default db;