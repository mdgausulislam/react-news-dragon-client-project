// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBx0l3f1aeCGVftO4Rs7_dANQU1v3S16RU",
  authDomain: "news-dragon-client-firebase.firebaseapp.com",
  projectId: "news-dragon-client-firebase",
  storageBucket: "news-dragon-client-firebase.appspot.com",
  messagingSenderId: "327743370254",
  appId: "1:327743370254:web:15828ccf468962eb9c385f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;