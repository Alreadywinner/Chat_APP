import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import SignIn from './components/SignIn';
import Chat from './components/Chat/Chat';

function App() {
  return (
    <Router>
      <Route path="/" exact component = {SignIn}/>
      <Route path="/chat" component = {Chat} />
    </Router>
  );
}

export default App;
