import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
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
        <Route path='/profile' render={ () => <Profile />} />
        <Route path='/dialogs' render={ () => <DialogsContainer />} />
        <Route path='/news' render={ () => <News /> } />
        <Route path='/music' render={ () => <Music /> } />
      </main>
      </div>
      </BrowserRouter>
  );
}

export default App;
