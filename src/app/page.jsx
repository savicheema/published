import Image from "next/image";
import Link from "next/link";
import { getAllPublishedPosts } from "@/utils/firebase/firestore";

export default async function Home() {
  const posts = await getAllPublishedPosts();
  return (
    <>
      <header>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h3>News Website</h3>

          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ margin: "0 4px" }}>
              <Link href="/">Home</Link>
            </div>

            <div style={{ margin: "0 4px" }}>
              <Link href="">World</Link>
            </div>

            <div style={{ margin: "0 4px" }}>
              <Link href="">Georgia</Link>
            </div>

            <div style={{ margin: "0 4px" }}>
              <Link href="">Economy</Link>
            </div>

            <div style={{ margin: "0 4px" }}>
              <Link href="">Agriculture</Link>
            </div>
          </div>
        </div>
      </header>
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
    </>
  );
}
