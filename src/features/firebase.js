import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDNSEqHhmAquvvrpS-xAzzP-4NjeXTDmqM",
    authDomain: "colne-c24b7.firebaseapp.com",
    projectId: "colne-c24b7",
    storageBucket: "colne-c24b7.appspot.com",
    messagingSenderId: "652745671344",
    appId: "1:652745671344:web:9f2807fe6be10306d5f175"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
export const db = getFirestore(firebaseApp)


export const auth = firebase.auth()
export const provider = new firebase.auth.GoogleAuthProvider()

