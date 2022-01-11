import { collection, addDoc } from "firebase/firestore";

import db from "../config/firebaseConfig";

const FireBaseAPI = {
  save: async (collectionName, data) => {
    try {
      const docRef = await addDoc(collection(db, collectionName), data);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  },
};

export default FireBaseAPI;
