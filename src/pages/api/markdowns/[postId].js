import { getPost } from "@/utils/firebase/firestore";

export default async function handler(req, res) {
  console.log("REQUEST", req.query.postId);
  const post = await getPost({ id: req.query.postId });

  const getPostMarkdown = (post) => {
    return new Promise((resolve, reject) => {
      if (post.hasFile !== undefined && !post.hasFile) {
        resolve(post.markdown);
        return;
      }

      fetch(post?.url)
        .then((response) => {
          return response?.text();
        })
        .then((text) => {
          resolve(text);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  const markdown = await getPostMarkdown(post);
  res.status(200).send(markdown);
}
