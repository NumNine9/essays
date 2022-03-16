// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDbcXcVZsVxcfLuAoUyNm2hV9y_VbPaFUc",
  authDomain: "fir-eedaf.firebaseapp.com",
  projectId: "fir-eedaf",
  storageBucket: "fir-eedaf.appspot.com",
  messagingSenderId: "1049829857927",
  appId: "1:1049829857927:web:2eaf1ed67d9562ea92f622",
  measurementId: "G-L7M23NV25V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore();
document.addEventListener('DOMContentLoaded', function() {
  const loadEl = document.querySelector('#load');
  try {
    let app = firebase.app();
    let features = [
      'auth', 
      'database', 
      'firestore',
      'functions',
      'messaging', 
      'storage', 
      'analytics', 
      'remoteConfig',
      'performance',
    ].filter(feature => typeof app[feature] === 'function');
    loadEl.textContent = `Firebase SDK loaded with ${features.join(', ')}`;
  } catch (e) {
    console.error(e);
    loadEl.textContent = 'Error loading the Firebase SDK, check the console.';
  }
});