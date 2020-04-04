import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDZkm8GRuXrsAPo27OU77X2T9WiUSyYET4",
    authDomain: "fir-storage-288e8.firebaseapp.com",
    databaseURL: "https://fir-storage-288e8.firebaseio.com",
    projectId: "fir-storage-288e8",
    storageBucket: "fir-storage-288e8.appspot.com",
    messagingSenderId: "263074752194",
    appId: "1:263074752194:web:a142008541a7c03f85fd5b",
    measurementId: "G-B2V39EQG36"
  };
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();

// Create a storage reference from our storage service
var storageRef = storage.ref("images");



export {db, storage, storageRef}

export default firebase;