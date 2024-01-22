import Image from "next/image";
import Link from "next/link";
import { getAllPublishedPosts } from "@/utils/firebase/firestore";

export default async function Home() {
  const posts = await getAllPublishedPosts();
  return (
    <main>
      {!!posts.length ? (
        <>
          {posts.map((post, index) => (
            <Link href={`posts/${post.id}`} key={index}>
              <div className="underline">{post.title}</div>
            </Link>
          ))}
        </>
      ) : (
        "No posts"
      )}
    </main>
  );
}
