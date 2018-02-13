import React from 'react';
import PropTypes from 'prop-types';

function LikeButton(props) {


  function handleLikeButtonClick() {
    // console.log(props.postId);
    props.onAddingLikeToPost(props.postId);
  }


  return (
    <div>
      <button onClick={handleLikeButtonClick}>Like</button>
    </div>
  );
}

LikeButton.propTypes = {
  onAddingLikeToPost: PropTypes.func,
  postId: PropTypes.string
};

export default LikeButton;
