import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewPostForm(props){

  let _author = null;
  let _description = null;
  //we can not add two event handlers to the same event but we can call mulfiple functions within the same event handler
  function handleNewPostFormSubmission(event) {
    event.preventDefault();
    props.onNewPostCreation({author: _author.value, description: _description.value, likes: 0, id: v4()});
    _author.value = '';
    _description.value = '';
    props.onHidePostForm();
  }

  return (
    <div>
      <form onSubmit={handleNewPostFormSubmission}>
        <input
          type='text'
          id='author'
          placeholder='author name'
          ref={(input) => {_author = input;}}/>
        <textarea
          id='description'
          placeholder='Type your post.'
          ref={(textarea) => {_description = textarea;}}/>
        <button type='submit'>Post!</button>
      </form>
    </div>
  );
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func,
  onHidePostForm: PropTypes.func
};


export default NewPostForm;
