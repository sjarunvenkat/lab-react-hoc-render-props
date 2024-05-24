import React from "react";
import LikeCounter from "./LikeCounter";

//implemented with Render props
const LikePost = () => (
  <LikeCounter
    render={({ count, handleLikeCount }) => (
      <div>
        <button onClick={handleLikeCount}>Like Post {count}</button>
      </div>
    )}
  />
);

export default LikePost;
