"use client";
import React from "react";
import {
  headingsPlugin,
  listsPlugin,
  thematicBreakPlugin,
  MDXEditor,
  linkPlugin,
  imagePlugin,
  directivesPlugin,
} from "@mdxeditor/editor";
import "./markdown-post.css";
import {
  TwitterDirectiveDescriptor,
  YoutubeDirectiveDescriptor,
} from "@/utils/mdx";

function MarkdownPage({ params }) {
  const editorRef = React.useRef(null);
  const { postId } = params;
  const [markdown, setMarkdown] = React.useState("");

  React.useEffect(() => {
    fetch(`/api/markdowns/${postId}`)
      .then((response) => {
        return response.text();
      })
      .then((markdown) => {
        console.log("RESPONSE", markdown);
        setMarkdown(markdown);
      })
      .catch((error) => {
        console.error("MarkdownPage API", error);
      });
  }, []);

  return !!markdown ? (
    <>
      <MDXEditor
        ref={editorRef}
        readOnly={true}
        markdown={markdown}
        onChange={(markdown) => {
          setMarkdown(markdown);
        }}
        plugins={[
          // Example Plugin Usage
          headingsPlugin(),
          listsPlugin(),
          linkPlugin(),
          imagePlugin(),
          thematicBreakPlugin(),
          directivesPlugin({
            directiveDescriptors: [
              YoutubeDirectiveDescriptor,
              TwitterDirectiveDescriptor,
            ],
          }),
        ]}
      />
    </>
  ) : null;
}

export default MarkdownPage;
