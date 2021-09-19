import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

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

// TODO: Verificar si se puede refactorizar
const googleLogin = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/photoslibrary.readonly");

  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
      console.log("Ingresa con exito");

      return token;
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(error);
    });
};

export { auth };
//export default googleLogin;
