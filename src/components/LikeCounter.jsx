import React, { useState } from "react";

const LikeCounter = ({ render }) => {
  const [count, setCount] = useState(0);

  const handleLikeCount = () => {
    setCount(count + 1);
  };

  return render({ count, handleLikeCount });
};

export default LikeCounter;
