import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import { Header } from '../components/Header';
import { Home } from '../components/Home/Home';
import { Profile } from '../components/Profile/Profile';
import { Settings } from '../components/Settings/Settings';
import { SignIn } from '../components/SignIn/SignIn';
import { AnimeInformation } from '../components/AnimeInformation/AnimeInformation';

import HomeContainer from './HomeContainer';

class App extends Component {

  render() {
    return (
        <div className="App">
          <Header />
          <Route path="/" exact component={HomeContainer} />
          <Route path="/anime/:id/:name" component={AnimeInformation} />
          <Route path="/profile" component={Profile} />
          <Route path="/settings" component={Settings} />
          <Route path="/sign-out" component={SignIn} />
        </div>
    );
  }

}

export default App;
