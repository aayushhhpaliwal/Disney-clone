import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { setUserLoginDetails } from './features/user/userSlice';
// import { useDispatch, useSelector } from "react-redux";

const firebaseConfig = {
  apiKey: "AIzaSyAgZ1wBwoZKOB-tms9Kd8SqwyP7zCSvg4A",
  authDomain: "disney-clone-75969.firebaseapp.com",
  projectId: "disney-clone-75969",
  storageBucket: "disney-clone-75969.appspot.com",
  messagingSenderId: "1066316600505",
  appId: "1:1066316600505:web:7527d9671c07a6eb0a3768",
  measurementId: "G-XG3W3E6XR9"
};
   
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  

  export const auth = getAuth(app);
  export const provider = new GoogleAuthProvider();


  export const signInWithGoogle = () => {

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result)
        // const name = result.user.displayName;
        // const email = result.user.email;
        // const profilePic = result.user.photoURL;
  
        // localStorage.setItem("name", name);
        // localStorage.setItem("email", email);
        // localStorage.setItem("profilePic", profilePic);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  // const storage = firebase.storage();

export default db;