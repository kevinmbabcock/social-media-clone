import React from "react";

function NavBar(){
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <button className="btn btn-outline-secondary">Home</button>
          <button className="btn btn-outline-secondary">Notifications</button>
          <button className="btn btn-outline-secondary">Messages</button>
        </div>
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <input type="text" placeholder="Search"></input>
          <button className="btn btn-outline-primary">Tweet</button>
        </div>
      </div>
    </div>

  );
}

export default NavBar;
