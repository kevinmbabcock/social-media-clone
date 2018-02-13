import React from 'react';
import Post from './Post';
import FeedSearch from './FeedSearch';
import PropTypes from 'prop-types';

function NewsFeed(props){
  // console.log(props);
  return (
    <div>
      <FeedSearch/>
      {props.postList.map((post) =>
        <Post author={post.author}
          description={post.description}
          likes={post.likes}
          onAddingLikeToPost={props.onAddingLikeToPost}
          id={post.id}
          key={post.id} />
      )}
    </div>
  );
}

NewsFeed.propTypes = {
  postList: PropTypes.arrayOf(PropTypes.any),
  onAddingLikeToPost: PropTypes.func
};

export default NewsFeed;
