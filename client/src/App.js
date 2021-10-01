import React from 'react'
import Nav from './components/Nav'
import HomePage from './components/HomePage'
// import About from './components/About'
// import ContactUs from './components/ContactUs'
import Login from './components/Login'
import Register from './components/Register'
import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
