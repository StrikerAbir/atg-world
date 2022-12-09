import React from "react";
import Left from "./Left/Left";
import Right from "./Right/Right";

const FeedLayout = () => {
  return (
    <div className='mt-5'>
      <div className="row">
        <div className="col-8">
          <Left></Left>
        </div>
        <div className="col-4">
          <Right></Right>
        </div>
      </div>
    </div>
  );
};

export default FeedLayout;
