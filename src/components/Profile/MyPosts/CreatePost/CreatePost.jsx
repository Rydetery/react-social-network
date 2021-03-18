import React from 'react';
import classes from './CreatePost.module.css';

const CreatePost = (props) => {
  let newPostElement = React.createRef();

  const createNewPost = () => {
    props.addPost();
  }

  const changeTextValue = () => {
    let text = newPostElement.current.value;
    props.updateNewValue(text);
  }

  return (
      <div className={classes.create}>
        <textarea ref={newPostElement} value={props.newPostText} onChange={changeTextValue} placeholder='Enter you post...'></textarea>
        <button onClick={createNewPost} className={classes.btn}>Create post</button>
      </div>
  );
}

export default CreatePost;