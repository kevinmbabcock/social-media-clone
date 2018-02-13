import React from 'react';
import NewPostForm from './NewPostForm';
import NewPostButton from './NewPostButton';
import PropTypes from 'prop-types';




class NewPostControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleShowNewPostForm = this.handleShowNewPostForm.bind(this);
    this.handleHidePostForm = this.handleHidePostForm.bind(this);
  }

  handleShowNewPostForm(){
    this.setState({formVisibleOnPage: true});
  }

  handleHidePostForm(){
    this.setState({formVisibleOnPage: false});
  }

  render() {
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewPostForm onNewPostCreation={this.props.onNewPostCreation} onHidePostForm={this.handleHidePostForm}/>;
    } else {
      currentlyVisibleContent = <NewPostButton  onShowNewPostForm={this.handleShowNewPostForm}/>;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

NewPostControl.propTypes = {
  onNewPostCreation: PropTypes.func
};


export default NewPostControl;
