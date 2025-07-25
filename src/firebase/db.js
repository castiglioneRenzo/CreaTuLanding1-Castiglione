import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { app } from "./config";

export const db = getFirestore(app);

export const getCollectionData = async (collectionName) => {
  const col = collection(db, collectionName);
  const snapshot = await getDocs(col);
return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
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

export const getDocumentsByCategory = async (collectionName, category) => {
    const col = collection(db, collectionName);
    const snapshot = await getDocs(col);
    return snapshot.docs
        .map((doc) => ({ id: doc.id, ...doc.data() }))
        .filter((item) => item.category === category);
    }

export const getCategories = async (collectionName) => {
    const col = collection(db, collectionName);
    const snapshot = await getDocs(col);
    const categories = snapshot.docs
        .map((doc) => doc.data().category)
        .filter((value, index, self) => self.indexOf(value) === index);
    return categories;
};

export const getDocumentById = async (collectionName, id) => {
    const col = collection(db, collectionName);
    const snapshot = await getDocs(col);
    const doc = snapshot.docs.find((doc) => doc.id === id);
    return doc ? { id: doc.id, ...doc.data() } : null;
};

