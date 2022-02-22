import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Components/Login';
import Treeview from './Components/Treeview';
import JiraResults from './Components/JiraResults';

import SearchBar from './Search';
function App() {

  return (
    <div className="wrapper">
      <h1>Cloud Collaborators</h1>
      <SearchBar />
    
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/results">
            <JiraResults />
          </Route>
          <Route path="/">
            <Treeview />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;