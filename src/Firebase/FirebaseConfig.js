
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBxMair2dqoWYVn3PYrz4X9AqS0WsM6bLw",
  authDomain: "shipment-delivery-applic-1ce51.firebaseapp.com",
  databaseURL: "https://shipment-delivery-applic-1ce51-default-rtdb.firebaseio.com",
  projectId: "shipment-delivery-applic-1ce51",
  storageBucket: "shipment-delivery-applic-1ce51.appspot.com",
  messagingSenderId: "814666219452",
  appId: "1:814666219452:web:4809fd0fe0641bd692f5b9",
  measurementId: "G-5XG64K99VS"
};




const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const db = getAuth(app)



