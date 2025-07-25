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

export const getUniqueProductosByTitle = async () => {
    const col = collection(db, "productos");
    const snapshot = await getDocs(col);
    const productos = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    const unique = [];
    const titles = new Set();
    const duplicates = [];

    for (const producto of productos) {
        if (!titles.has(producto.title)) {
            titles.add(producto.title);
            unique.push(producto);
        } else {
            duplicates.push(producto.id);
        }
    }

    // Elimina los documentos duplicados en Firebase
    if (duplicates.length > 0) {
        const { deleteDoc, doc } = await import("firebase/firestore");
        for (const id of duplicates) {
            await deleteDoc(doc(db, "productos", id));
        }
    }

    return unique;
};