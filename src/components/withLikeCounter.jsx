import React, { useState } from "react";

const withLikeCounter = (WrappedComponent, label) => {
  const WithLikeCounter = (props) => {
    const [count, setCount] = useState(0);

    const handleLikeCount = () => {
      setCount(count + 1);
    };

    return (
      <WrappedComponent
        count={count}
        handleLikeCount={handleLikeCount}
        label={label}
        {...props}
      />
    );
  };

  return WithLikeCounter;
};

export default withLikeCounter;
