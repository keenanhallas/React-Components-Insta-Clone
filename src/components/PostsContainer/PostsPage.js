//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data
import dummyData from "../../dummy-data";

const PostsPage = () => {
  // set up state for your data
  const [postData, setPostData] = useState(dummyData);

  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */
        postData.map((post, i) => {
          return <Post post={post} key={i}/> //was getting an error before without unique keys - Warning: Each child in a list should have a unique "key" prop.
        })
      }
    </div>
  );
};

export default PostsPage;