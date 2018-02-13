import React from 'react';
import PropTypes from 'prop-types';

function NewPostButton(props){
  function handleShowNewPostForm() {
    props.onShowNewPostForm();
  }

  return (
    <div>
      <button onClick={handleShowNewPostForm}>Add New Post</button>
    </div>
  );
}

NewPostButton.propTypes = {
  onShowNewPostForm: PropTypes.func
};

export default NewPostButton;
