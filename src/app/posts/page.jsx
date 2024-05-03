import React from "react";
import { getAllPublishedPosts } from "@/utils/firebase/firestore";
import Link from "next/link";
import Image from "next/image";

const Posts = async () => {
  const posts = await getAllPublishedPosts();

  return (
    <main>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {!!posts.length ? (
          <>
            {posts.map((post, index) => (
              <Link href={`posts/${post.id}`} key={index}>
                <div
                  style={{
                    flex: "1 0 auto",
                    margin: "0 12px",
                    marginBottom: "12px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    padding: "8px",
                  }}
                >
                  <Image width="300" height="200" src={post.featuredImage} />
                  <div style={{ margin: "4px 0" }}>
                    {post.title || "No title"}
                  </div>
                </div>
              </Link>
            ))}
          </>
        ) : (
          "No posts"
        )}
      </div>
    </main>
  );
};

export default Posts;
