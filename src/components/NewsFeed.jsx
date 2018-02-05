import React from "react";
import Post from "./Post";
import FeedSearch from "./FeedSearch";

function NewFeed(){
  return (
    <div>
      <FeedSearch/>
      <Post
        author="Lorem Ipsum"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
      <Post
        author="Ipsum Loren"
        description="This is the second description"/>
    </div>

  );
}

export default NewFeed;
