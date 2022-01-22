// FireBase APP
import FireBaseAppCFG from "../config/firebaseConfig";

import { collection, addDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

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
      console.error("Error adding document: ", e.message);
      onError(e);
    }
  },
};

export default FireBaseAPI;
