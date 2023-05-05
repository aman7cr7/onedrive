import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC6IihkMfwumeUKAjps-aeGmx_sVkYBb0I",
  authDomain: "file-storr.firebaseapp.com",
  projectId: "file-storr",
  storageBucket: "file-storr.appspot.com",
  messagingSenderId: "855780096104",
  appId: "1:855780096104:web:7115b4db1fed48f4b663dd",
  measurementId: "G-0V21BGE0XM"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
export const database = {
  users: firestore.collection("users"),
  docs: firestore.collection("docs"),
  files: firestore.collection("files"),
  date: firebase.firestore.FieldValue.serverTimestamp(),
};

export const storage = firebase.storage();

export const auth = firebase.auth();
