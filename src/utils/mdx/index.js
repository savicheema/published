export const YoutubeDirectiveDescriptor = {
  name: "youtube",
  type: "leafDirective",
  testNode(node) {
    return node.name === "youtube";
  },
  attributes: ["id"],
  hasChildren: false,
  Editor: ({ mdastNode, lexicalNode, parentEditor }) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        {!!parentEditor._editable && (
          <button
            onClick={() => {
              parentEditor.update(() => {
                lexicalNode.selectNext();
                lexicalNode.remove();
              });
            }}
          >
            Delete Youtube
          </button>
        )}

        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${mdastNode.attributes?.id}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    );
  },
};

export const TwitterDirectiveDescriptor = {
  name: "twitter",
  type: "leafDirective",
  testNode(node) {
    return node.name === "twitter";
  },
  attributes: ["id"],
  hasChildren: false,
  Editor: ({ mdastNode, lexicalNode, parentEditor }) => {
    console.log(
      "DESCRIPTOR",
      mdastNode,
      lexicalNode,
      parentEditor,
      parentEditor._editorState._readOnly
    );
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        {!!parentEditor._editable && (
          <button
            onClick={() => {
              parentEditor.update(() => {
                lexicalNode.selectNext();
                lexicalNode.remove();
              });
            }}
          >
            Delete Tweet
          </button>
        )}

        <div
          dangerouslySetInnerHTML={{
            __html: mdastNode.attributes?.embedString,
          }}
        ></div>
      </div>
    );
  },
};
