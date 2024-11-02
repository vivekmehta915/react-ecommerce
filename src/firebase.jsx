import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDin6x2HEGY2P1YG8P8BRLDpeDSAsQDikQ",
    authDomain: "ecommerce-6d54a.firebaseapp.com",
    projectId: "ecommerce-6d54a",
    storageBucket: "ecommerce-6d54a.firebasestorage.app",
    messagingSenderId: "867571455529",
    appId: "1:867571455529:web:4c87214055dec2f2ddae38",
    measurementId: "G-KFJDT5CFQ4"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth, db, onAuthStateChanged };

