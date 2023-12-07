import { db } from './config';
import { doc, setDoc } from "firebase/firestore";

export const addDocument = async (collection, id, data) => {
  const query = doc(db, "users", id);
          
  await setDoc(query, {
    ...data,
    createAt: Date.now()
  })
}