import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAE1GPya5ioDI5ZQJxKKOqHDoZJ_RqKk9A",
    authDomain: "todo-app-51134.firebaseapp.com",
    projectId: "todo-app-51134",
    storageBucket: "todo-app-51134.appspot.com",
    messagingSenderId: "163093080793",
    appId: "1:163093080793:web:72cb18349f55dd74a9acc8",
    measurementId: "G-RR0B269LKZ"
})

const db = firebaseApp.firestore();
 
export default db;