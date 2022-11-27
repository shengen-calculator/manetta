// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "XXXXXXXX-XXXXXX",
    authDomain: "manetta-2022.firebaseapp.com",
    projectId: "manetta-2022",
    storageBucket: "manetta-2022.appspot.com",
    messagingSenderId: "758735920980",
    appId: "1:12312312312:web:12312312312c1231231c1",
    measurementId: "G-1XXXXXXXX1W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);