// FireBase APP
import FireBaseAppCFG from "../config/firebaseConfig";

import { collection, addDoc, getDocs } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const FireBaseAPI = {
  test: () => console.log("Hello world!"),

  save: async (
    collectionName,
    data,
    onSuccess = (response) => {},
    onError = (response) => {}
  ) => {
    try {
      const docRef = await addDoc(
        collection(FireBaseAppCFG.db, collectionName),
        data
      );
      console.log("Document written with ID: ", docRef.id);
      onSuccess(docRef);
    } catch (e) {
      console.error("Error adding document: ", e.message);
      onError(e);
    }
  },

  findAll: async (collectionName) => {
    const querySnapshot = await getDocs(
      collection(FireBaseAppCFG.db, collectionName)
    );
    const result = [];

    querySnapshot.forEach((doc) => {
      var data = doc.data();
      data.documentId = doc.id;
    });

    return result;
  },

  saveUser: async (
    user,
    onSuccess = (response) => {
      console.log(response);
    },
    onError = (error) => {}
  ) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        FireBaseAppCFG.auth,
        user.email,
        user.password
      );
      onSuccess(userCredential);
      user.FireBaseAPI.save("user", user);
    } catch (e) {
      console.error("Error adding document: %s", e.message);
      onError(e);
    }
  },

  logIn: async (
    user,
    onSuccess = (response) => {},
    onError = (error) => {}
  ) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        FireBaseAppCFG.auth,
        user.email,
        user.password
      );
      onSuccess(userCredential);
    } catch (e) {
      console.error("Error when signing in: %s", e.message);
      onError(e);
    }
  },

  logOut: async () => {
    FireBaseAppCFG.auth.signOut();
  },
};

export default FireBaseAPI;
