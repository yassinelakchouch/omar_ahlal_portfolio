import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import { getDatabase } from "firebase/database";
/* import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'; */

const firebaseConfig = {
  apiKey: "AIzaSyD48utn0siQFK08SU6rV1B_8vy_jJ-51Uc",
  authDomain: "omar-dashboard.firebaseapp.com",
  projectId: "omar-dashboard",
  storageBucket: "omar-dashboard.appspot.com",
  messagingSenderId: "619935960306",
  appId: "1:619935960306:web:1d616870b85a6acdbe946b" ,
  /*databaseURL: "marwan-test01.europe-west3.firebaseio.com" */
  databaseURL: "https://omar-dashboard-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();



// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);



export { storage,database, firebase as default};
