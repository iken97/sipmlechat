import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB-cyY5mws3Xh2NKnjYsgTXViPHI_tS8Dc",

    authDomain: "catchat-6bff9.firebaseapp.com",
  
    projectId: "catchat-6bff9",
  
    storageBucket: "catchat-6bff9.appspot.com",
  
    messagingSenderId: "744405010703",
  
    appId: "1:744405010703:web:8b4512b694cd064556167a",
  
    measurementId: "G-58NZEKM2N1"
  
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db, auth}