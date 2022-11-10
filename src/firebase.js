import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDBzAALITX0X0PAefGwyjmNhSflPKvaE8s",
  authDomain: "netflex-temp.firebaseapp.com",
  projectId: "netflex-temp",
  storageBucket: "netflex-temp.appspot.com",
  messagingSenderId: "890423878036",
  appId: "1:890423878036:web:9b153a6bbc3c19bb806f81"
};



const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore;
const auth = firebaseApp.auth();


export { auth };
export default db; 

