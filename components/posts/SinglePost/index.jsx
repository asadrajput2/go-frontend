import React from "react";
import {AiFillDelete } from "react-icons/ai"

export default function SinglePost({ post, handlePostDelete }) {
  return (
    <div className="single-post">
      <div className="single-post-header" style={{display: "flex",
            flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"}}
         >
        {post.title}
      <div style={{fontSize: "medium"}}>
        <a
        style={{cursor: "pointer"}}
          className="delete-post"
          onClick={() => {
            handlePostDelete(post.id);
          }}
        >
          <AiFillDelete />
        </a>
      </div>
         </div>
      <div className="single-post-text">{post.content.length > 200 ? post.content.slice(0, 400) + "..." : post.content}</div>
    </div>
  );
}
