import React from 'react';
import classes from './CreatePost.module.css';
const CreatePost = (props) => {
  let newPostElement = React.createRef();

  const pressButton = () => {
    props.dispatch({type: 'ADD-POST'});
  }

  const changeTextValue = () => {
    let text = newPostElement.current.value;
    props.dispatch({type: 'UPDATE-TEXT', newText: text})
  }

  return (
      <div className={classes.create}>
        <textarea ref={newPostElement} value={props.newPostText} onChange={changeTextValue}></textarea>
        <button onClick={pressButton} className={classes.btn}>Confirm</button>
      </div>
  );
}

export default CreatePost;