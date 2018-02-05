import React from "react";
import UserProfile from "./UserProfile";
import UserDescription from "./UserDescription";
import NewsFeed from "./NewsFeed";
import FollowersList from "./FollowersList";

function Content(){
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <UserProfile/>
          <br></br>
          <UserDescription/>
        </div>
        <div className="col-md-4">
          <NewsFeed/>
        </div>
        <div className="col-md-4">
          <FollowersList/>
        </div>
      </div>
    </div>

  );
}

export default Content;
