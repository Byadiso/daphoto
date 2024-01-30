// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKy7gIMRiiZ6KlUjPrlf3MgV3v-wGpBAc",
  authDomain: "daphoto-6beb1.firebaseapp.com",
  projectId: "daphoto-6beb1",
  storageBucket: "daphoto-6beb1.appspot.com",
  messagingSenderId: "859007645504",
  appId: "1:859007645504:web:75ae45590885eecac2aca5",
  measurementId: "G-RGEPZ7H4EF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage= getStorage(app)

