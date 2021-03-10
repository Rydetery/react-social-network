import React from 'react';
import classes from './CreatePost.module.css';
const CreatePost = (props) => {
  let newPostElement = React.createRef();
  
  let addPost = props.addPost;
  const pressButton = () => {
    addPost();
  }
  const changeTextValue = () => {
    let text = newPostElement.current.value;
    props.updateText(text)
  }

  return (
      <div className={classes.create}>
        <textarea ref={newPostElement} value={props.newPostText} onChange={changeTextValue}></textarea>
        <button onClick={pressButton} className={classes.btn}>Confirm</button>
      </div>
  );
}

export default CreatePost;