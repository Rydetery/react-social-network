import React from 'react';
import { addPostActionCreator, updateNewTextValueActionCreator } from '../../../../redux/profileReducer';
import classes from './CreatePost.module.css';
const CreatePost = (props) => {
  let newPostElement = React.createRef();

  const pressButton = () => {
    props.dispatch(addPostActionCreator());
  }

  const changeTextValue = () => {
    let text = newPostElement.current.value;
    let action = updateNewTextValueActionCreator(text);
    props.dispatch(action)
  }

  return (
      <div className={classes.create}>
        <textarea ref={newPostElement} value={props.newPostText} onChange={changeTextValue} placeholder='Write you post...'></textarea>
        <button onClick={pressButton} className={classes.btn}>Confirm</button>
      </div>
  );
}

export default CreatePost;