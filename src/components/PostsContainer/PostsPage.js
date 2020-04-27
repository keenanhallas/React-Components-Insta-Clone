//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data
import dummyData from "../../dummy-data";

// dummyData.map(() => {
//   console.log("test");
// });

const PostsPage = () => {
  // set up state for your data
  const [postData, setPostData] = useState(dummyData);
  console.log(postData);

  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */
        postData.map((post) => {
          //console.log(post);
          return <Post post={post}/>
        })
      }
    </div>
  );
};

export default PostsPage;

// postData.map(() => {
//   console.log("Test")
//   //return <Post post={post}/>;
// });})