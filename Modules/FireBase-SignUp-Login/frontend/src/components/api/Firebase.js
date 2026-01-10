// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAVsqOD3tNn2Fx44Wji5vwX4PI7b5cHUuw",
	authDomain: "sata-brainbits.firebaseapp.com",
	projectId: "sata-brainbits",
	storageBucket: "sata-brainbits.firebasestorage.app",
	messagingSenderId: "282128914413",
	appId: "1:282128914413:web:deef88d68d32019125f9e4",
	measurementId: "G-LZVRZ13X92",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
