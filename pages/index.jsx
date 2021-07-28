import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import api from "../apiProvider";
import SinglePost from "../components/posts/SinglePost";
import UserFAB from "../components/user";
import useAuthentication from "../utils/verifyAuth";

export default function Posts() {
  const router = useRouter();
  const [postsList, setPostsList] = useState([]);

  useAuthentication("index", "protected");

  async function handleAddPost() {
    router.push("/posts/create");
  }

  async function handlePostDelete(postId) {
    const res = await api("article/" + postId, "delete");
    if (res.message === "success") {
      setPostsList(postsList.filter(post => post.id !== postId));
    }
  }


  useEffect(async() => {
    const response = await api("articles");
    setPostsList(response);
  }, [])

  return (  
    <div className="home">
      <UserFAB />
      <button className="add-post-btn" onClick={handleAddPost}>
        Add a new post
      </button>
      {postsList?.reverse()?.length
        ? postsList.map(post => <SinglePost
              handlePostDelete={handlePostDelete}
              post={post} 
            />)
        : "No posts to show"}
    </div>
  );
}

// export async function getServerSideProps() {
//   const props = {};
//   const response = await api("articles");
//   console.log("posts response: ", response);
//   if (response) props.postsList = response;
//   else props.postsList = null;

//   return { props };
// }
