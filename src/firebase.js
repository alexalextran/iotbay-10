// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const app = firebase.initializeApp({
  apiKey: "AIzaSyAQWQaPmstW4fRKmDCBR_MHvuvc-etkC3w",
  authDomain: "iotbay.firebaseapp.com",
  projectId: "iotbay",
  storageBucket: "iotbay.appspot.com",
  messagingSenderId: "701394348594",
  appId: "1:701394348594:web:4cd1621a282420ffa12a2b"
});

// Initialize Firebase
export const auth = app.auth()
export default app