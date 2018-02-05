import React from "react";

function Post(props){
  return (
    <div>
      <h5>{props.author}</h5>
      <p>{props.description}</p>
      <hr></hr>
    </div>

  );
}

export default Post;
