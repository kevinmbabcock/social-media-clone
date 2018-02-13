import React from 'react';

function UserProfile(){
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <img alt="pic"></img>

        </div>
        <div className="col-md-8">
          <h5>Kellie A. Corrigan</h5>
        </div>
      </div>
      <div className="row">
        <button className="btn">Tweets</button>
        <button className="btn">Following</button>
        <button className="btn">Followers</button>
      </div>
    </div>
  );
}

export default UserProfile;
