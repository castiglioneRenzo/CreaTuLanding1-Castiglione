import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { app } from "./config";

export const db = getFirestore(app);

export const getCollectionData = async (collectionName) => {
  const col = collection(db, collectionName);
  const snapshot = await getDocs(col);
  return snapshot.docs.map((doc) => doc.data());
};

export const addDocumentToCollection = async (collectionName, data) => {
  const col = collection(db, collectionName);
    try {
        const docRef = await addDoc(col, data);
        return docRef.id;
    } catch (error) {
        console.error("Error adding document: ", error);
        throw error;
    }
};