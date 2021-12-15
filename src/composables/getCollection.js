import { ref } from "vue";
import { projectFirestore } from "../firebase/config";

const getCollection = (collection) => {
  const documents = ref(null);
  const error = ref(null);

  let collectionRef = projectFirestore
    .collection(collection)
    .orderBy("createdAt");

  collection.onSnapshot(
    (snap) => {
      let results = [];
      snap.docs.forEeach((doc) => {
        doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
      });
      documents.value = results;
      error.value = null;
    },
    (err) => {
      console.log(err.message);
      documents.value = nullerror.value = "cold not fetch data ";
    }
  );
  return { documents, error };
};

export default getCollection;
