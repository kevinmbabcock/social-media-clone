import React from 'react';
import PropTypes from 'prop-types';
import LikeButton from './LikeButton';



function Post(props){
console.log(props)

  return (
    <div>
      <h5>{props.author}</h5>
      <p>{props.description}</p>
      <p>{props.likes}</p>
      <LikeButton onAddingLikeToPost={props.onAddingLikeToPost} postId={props.id}/>

      <hr></hr>
    </div>
  );
}

Post.propTypes = {
  author: PropTypes.string,
  description: PropTypes.string,
  likes: PropTypes.number,
  id: PropTypes.string,
  onAddingLikeToPost: PropTypes.func
};

export default Post;
