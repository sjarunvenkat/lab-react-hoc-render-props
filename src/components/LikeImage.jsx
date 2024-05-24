import React from "react";
import withLikeCounter from "./withLikeCounter";

//implemented with HOC
const LikeImage = ({ count, handleLikeCount, label }) => (
  <div>
    <button onClick={handleLikeCount}>
      {label} {count}
    </button>
  </div>
);

export default withLikeCounter(LikeImage, "Like Image");
