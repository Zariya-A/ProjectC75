import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyAXC3tjM3sXb4OGYRzw7E6jlhziK89KL_w",
  authDomain: "projectc71-69a03.firebaseapp.com",
  projectId: "projectc71-69a03",
  storageBucket: "projectc71-69a03.appspot.com",
  messagingSenderId: "376895596538",
  appId: "1:376895596538:web:f2b37578f0ab9fe6786643"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
