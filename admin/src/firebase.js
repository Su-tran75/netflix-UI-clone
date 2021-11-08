import firebase from "firebase";
// import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCByqaC3z4jECx5bCvEOhXLvafRkW0yo2k",
  authDomain: "netflix-clone-99ea9.firebaseapp.com",
  projectId: "netflix-clone-99ea9",
  storageBucket: "netflix-clone-99ea9.appspot.com",
  messagingSenderId: "207499286719",
  appId: "1:207499286719:web:968541428cb6370c0bce0a"
};

firebase.initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
