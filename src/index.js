import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import store from './State';

let renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
          <App state={state} addPost={store.addPost.bind(store)} addMessage={store.addMessage.bind(store)} updateText= {store.updateText.bind(store)} />
        </React.StrictMode>,
        document.getElementById('root')
      );
  }
renderEntireTree(store.getState());
store.subscribe(renderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
