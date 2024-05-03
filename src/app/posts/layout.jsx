import React from "react";
import Link from "next/link";

function PostsLayout({ children }) {
  return (
    <>
      <header>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
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
      {children}
    </>
  );
}

export default PostsLayout;
