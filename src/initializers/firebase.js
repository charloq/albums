import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

var config = {
  apiKey: "AIzaSyD2ZVUZsOCG49hoiPhtSeOG2-JL3ULebrI",
  authDomain: "albumes-facilito-react-45efb.firebaseapp.com",
  projectId: "albumes-facilito-react-45efb",
  storageBucket: "albumes-facilito-react-45efb.appspot.com",
  messagingSenderId: "827442316517",
  appId: "1:827442316517:web:486efc3bb9076b6352800c",
  measurementId: "G-H701H54WFK",
};

initializeApp(config);
const auth = getAuth();

export { auth };
//export default googleLogin;
