import React from 'react';
import Follower from './Follower';

function FollowersList(){
  return (
    <div>
      <h4>Followers</h4>
      <Follower
        name="Gosia"/>
      <Follower
        name="Kevin!"/>
    </div>

  );
}

export default FollowersList;
