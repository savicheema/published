import { getPost } from "@/utils/firebase/firestore";
import React from "react";
import Markdown from "react-markdown";
import Image from "next/image";
import SubHeadingMarkDown from "@/app/posts/components";
import styles from "./page.module.css";
import "./post-page.css";

const Post = async ({ params }) => {
  const { postId } = params;

  const post = await getPost({ id: postId });

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

  return (
    <main>
      <h1 style={{ marginTop: "0" }}>{post.title}</h1>
      <SubHeadingMarkDown>{post.firstParagraph}</SubHeadingMarkDown>

      <Image
        src={post.featuredImage}
        width="720"
        height="480"
        alt="featured image"
        priority={true}
        className={styles.featuredImage}
      />
      <Markdown>{post.firstParagraph}</Markdown>
      {post.hasFile && /::twitter|::youtube/.test(markdown) ? (
        <iframe
          src={`http://localhost:3000/markdowns/${postId}`}
          width={1080}
          height={720}
          frameBorder={0}
        ></iframe>
      ) : (
        <Markdown>{markdown}</Markdown>
      )}
    </main>
  );
};

export default Post;
