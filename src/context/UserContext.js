import { useEffect, useState } from "react";
import { createContext } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  updatePassword,
} from "firebase/auth";
import app from "../firebase/firebase.init";

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const githubSignIn = () => {
    return signInWithPopup(auth, githubProvider);
  };

  const updateUserProfile = (name, url) => {
    return updateProfile(auth.currentUser, { displayName: name, photoURL: url })
  };

  const userSignOut = () => {
    return signOut(auth)
  };

  const changePassword = (newPassword) => {
    return updatePassword(auth.currentUser, newPassword)
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserData(user);
      } else {
        setUserData(null);
      }
      setIsLoading(false);
    });
    return () => unSubscribe();
  }, []);

  const shareData = {
    userData,
    isLoading,
    createUser,
    signInWithEmail,
    googleSignIn,
    githubSignIn,
    updateUserProfile,
    userSignOut,
    changePassword
  };

  return (
    <AuthContext.Provider value={shareData}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
