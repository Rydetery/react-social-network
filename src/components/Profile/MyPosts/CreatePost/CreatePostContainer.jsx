import React from 'react';
import { addPostActionCreator, updateNewTextValueActionCreator } from '../../../../redux/profileReducer';
import CreatePost from './CreatePost';
const CreatePostContainer = (props) => {
  
  const addPost = () => {
   props.dispatch(addPostActionCreator());
  }
  const updateNewValue = (text) => {
     let action = updateNewTextValueActionCreator(text);
     props.dispatch(action);
  }

  return (
      <CreatePost newPostText={props.newPostText} addPost={addPost} updateNewValue={updateNewValue} />
  );
}

export default CreatePostContainer;