import React from 'react';
import UserProfile from './UserProfile';
import NewPostControl from './NewPostControl';
import UserDescription from './UserDescription';



function UserInfo(props){
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <UserProfile/>
        </div>
        <div className="col-md-4">
          <NewPostControl/>
        </div>
        <div className="col-md-4">
          <UserDescription/>
        </div>
      </div>
    </div>

  );
}



export default UserInfo;
