import React from "react";
import PropTypes from "prop-types";


function Post(props){
  return (
    <div>
      <h5>{props.author}</h5>
      <p>{props.description}</p>
      <hr></hr>
    </div>

  );
}

Post.propTypes = {
  author: PropTypes.string,
  description: PropTypes.string
}

export default Post;
