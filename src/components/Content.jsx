import React from 'react';
import UserInfo from './UserInfo';
import NewsFeed from './NewsFeed';
import FollowersList from './FollowersList';

class Content extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterPostList: [
        {
          author: 'Gosia',
          description: 'this is a description',
          likes: 0,
          id: '1'
        },
        {
          author: 'Kevin',
          description: 'Another Description',
          likes: 0,
          id: '2'
        }
      ]
    };
    this.handleAddingNewPost = this.handleAddingNewPost.bind(this);
    this.handleAddingLikeToPost = this.handleAddingLikeToPost.bind(this);
  }

  handleAddingNewPost(newPost) {
    var newMasterPostList = this.state.masterPostList.slice();
    newMasterPostList.push(newPost);
    this.setState({masterPostList: newMasterPostList});
  }

  handleAddingLikeToPost(postToEditId) {
    var newMasterPostList = this.state.masterPostList.slice();
    newMasterPostList.forEach((post) => {
      if (post.id === postToEditId) {
        post.likes++;
      }
    });
    this.setState({masterPostList: newMasterPostList});
  }


  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-4">
            <UserInfo onNewPostCreation={this.handleAddingNewPost} />
          </div>
          <div className="col-md-4">
            <NewsFeed postList={this.state.masterPostList} onAddingLikeToPost={this.handleAddingLikeToPost} />
          </div>
          <div className="col-md-4">
            <FollowersList/>
          </div>
        </div>
      </div>
    );
  }
}



export default Content;
