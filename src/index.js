import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import state, { subscribe, updateText, addPost, addMessage } from './State';

let renderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
          <App state={state} addPost={addPost} addMessage={addMessage} updateText= {updateText} />
        </React.StrictMode>,
        document.getElementById('root')
      );
  }
renderEntireTree();
subscribe(renderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
