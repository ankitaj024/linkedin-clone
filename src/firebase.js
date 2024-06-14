import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCpqVlcTBWid2LJjOwgqnZaak-wbsUn8yk",
  authDomain: "linkedin-clone24.firebaseapp.com",
  projectId: "linkedin-clone24",
  storageBucket: "linkedin-clone24.appspot.com",
  messagingSenderId: "305128442038",
  appId: "1:305128442038:web:86e08f4ddb746fdc2e7e17",
  measurementId: "G-RD4F41MBPF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
