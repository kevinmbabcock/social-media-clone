import React from 'react';
import UserProfile from './UserProfile';
import NewPostControl from './NewPostControl';
import UserDescription from './UserDescription';
import PropTypes from 'prop-types';



function UserInfo(props){
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <UserProfile/>
        </div>
        <div className="col-md-4">
          <NewPostControl onNewPostCreation={props.onNewPostCreation}/>
        </div>
        <div className="col-md-4">
          <UserDescription/>
        </div>
      </div>
    </div>

  );
}

UserInfo.propTypes = {
  onNewPostCreation: PropTypes.func
};


export default UserInfo;
