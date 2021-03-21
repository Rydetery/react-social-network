import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updateNewTextValueActionCreator } from '../../../../redux/profileReducer';
import CreatePost from './CreatePost';

let mapStateToProps = (state) => {
  return {
    newPostText: state.newPostText
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator())
    },
    updateNewValue: (text) => {
      dispatch(updateNewTextValueActionCreator(text));
    }
  }
}


const CreatePostContainer = connect(mapStateToProps, mapDispatchToProps)(CreatePost);

export default CreatePostContainer;