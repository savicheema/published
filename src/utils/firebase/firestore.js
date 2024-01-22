import {
  collection,
  query,
  where,
  getDocs,
  getFirestore,
  doc,
  getDoc,
} from "firebase/firestore";
import { app } from ".";

import { unstable_noStore as noStore } from "next/cache";

export const db = getFirestore(app);

export const getAllPublishedPosts = async () => {
  noStore();
  const publishedPosts = [];

  const postsCollection = collection(db, "posts");
  const q = query(postsCollection, where("isReviewed", "==", true));

  try {
    const postsSnapshot = await getDocs(q);
    postsSnapshot.forEach((snapshot) => {
      publishedPosts.push({ ...snapshot.data(), id: snapshot.id });
    });
  } catch (error) {
    console.error(error);
  }

  return publishedPosts;
};

export const getPost = async ({ id }) => {
  const postRef = doc(db, "posts", `${id}`);
  let postData = {};
  try {
    const postSnap = await getDoc(postRef);
    if (postSnap.exists()) {
      postData = { ...postSnap.data(), id };
    } else {
      console.log(`No post with id ${id} exists.`);
    }
  } catch (error) {
    return error;
  }

  return postData;
};
