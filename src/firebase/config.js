import {initializeApp} from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword, updateProfile, signOut, onAuthStateChanged } from 'firebase/auth'
import {getFirestore, addDoc, collection, serverTimestamp, onSnapshot, doc, where, query, orderBy, deleteDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDuntUr1OE-c5FE7D2WjTFPU95FsI7l8gU",
    authDomain: "mymoney-cb9c5.firebaseapp.com",
    projectId: "mymoney-cb9c5",
    storageBucket: "mymoney-cb9c5.appspot.com",
    messagingSenderId: "531590949133",
    appId: "1:531590949133:web:6f7d7f955439a3a4e92844"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)





export {app, db, serverTimestamp, getAuth, createUserWithEmailAndPassword, updateProfile, signOut, onAuthStateChanged, addDoc, collection, onSnapshot, doc, where, query, orderBy, deleteDoc}
