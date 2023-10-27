import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBjFkfse-x_9uMSw-sh0H1r3gR1hjIDuNM",
  authDomain: "tarefasproject-f64ef.firebaseapp.com",
  projectId: "tarefasproject-f64ef",
  storageBucket: "tarefasproject-f64ef.appspot.com",
  messagingSenderId: "431065183769",
  appId: "1:431065183769:web:ff2a7850a8d5e44c90dc88"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export { db };
