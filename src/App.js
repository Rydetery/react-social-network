import { BrowserRouter, Route, Router } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header.jsx';
import Music from './components/Music/Music';
import Navigation from './components/Navigation/Navigation.jsx';
import News from './components/News/News';
import Profile from './components/Profile/Profile';

function App(props) {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Navigation />
      <main className='app-wrapper-content'>
        <Route path='/profile' render={ () => <Profile profilePage={props.state.profilePage} addPost={props.addPost} updateText={props.updateText} />} />
        <Route path='/dialogs' render={ () => <Dialogs dialogsData={props.state.dialogsData} messagesData={props.state.messagesData} addMessage={props.addMessage} />} />
        <Route path='/news' render={ () => <News /> } />
        <Route path='/music' render={ () => <Music /> } />
      </main>
      </div>
      </BrowserRouter>
  );
}

export default App;
