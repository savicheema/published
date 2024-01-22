import { getPost } from "@/utils/firebase/firestore";
import React from "react";
import Markdown from "react-markdown";
import Image from "next/image";

const Post = async ({ params }) => {
  const post = await getPost({ id: params.postId });
  const response = await fetch(post?.url);
  const text = await response?.text();

  return (
    <main>
      <h1 style={{ marginTop: "0" }}>{post.title}</h1>
      <p>{post.subheading}</p>
      <Image
        src={post.featuredImage}
        width="720"
        height="480"
        alt="featured image"
      />
      <Markdown>{post.firstParagraph}</Markdown>
      <Markdown>{text}</Markdown>
    </main>
  );
};

export default Post;
