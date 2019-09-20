import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCgJie67kTfotXTWzehFJNY7ifPlIF4Qvo",
  authDomain: "newtopia-c96ad.firebaseapp.com",
  databaseURL: "https://newtopia-c96ad.firebaseio.com",
  projectId: "newtopia-c96ad",
  storageBucket: "",
  messagingSenderId: "539620287782",
  appId: "1:539620287782:web:d016074812ab645fab0de7"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()
