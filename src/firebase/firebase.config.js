// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClK4v82BhkDKeYbXzxqvhNdLt8HfCGl0Y",
  authDomain: "bog-bear-toy.firebaseapp.com",
  projectId: "bog-bear-toy",
  storageBucket: "bog-bear-toy.appspot.com",
  messagingSenderId: "330956307878",
  appId: "1:330956307878:web:f839cd5d38f1df6a27e367"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;