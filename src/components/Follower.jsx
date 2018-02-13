import React from 'react';
import PropTypes from 'prop-types';


function Follower(props){
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <img alt="pic"></img>
        </div>
        <div className="col-md-8">
          <div >
            <p><strong>{props.name}</strong></p>
          </div>
          <div >
            <button className="btn btn-primary">Button</button>
          </div>
        </div>
      </div>
    </div>

  );
}

Follower.propTypes = {
  name: PropTypes.string
};

export default Follower;
