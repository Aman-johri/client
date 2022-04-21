import logo from './logo.svg';
import './App.css';
import Topbar from "../src/Components/topbar/Topbar"
import Single from "../src/Pages/single/Single"
import Write from '../src/Pages/create/Create';
import Home from "../src/Pages/home/Home";
import Posts from './Components/postData/Posts';
import { Component } from 'react';
import {  BrowserRouter as Router, Route } from 'react-router-dom';
import SinglePost from './Components/singlePost/SinglePost';
import { Switch } from 'react-router-dom';
import Create from '../src/Pages/create/index';
import Login from './Pages/login/Login';
import Register from './Pages/register/Register';


function App() {
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login">{<Login/>}</Route>
        <Route path="/register">{<Register/>}</Route>
        {/* <Route path="/Home">{user ? <Home/> : <Login/>}</Route> */}
        <Route path="/Single/:postId" component={Single}/>
      </Switch>
    </Router>
  );
}


export default App;






