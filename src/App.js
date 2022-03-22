import logo from './logo.svg';
import './App.css';
import Topbar from "../src/Components/topbar/Topbar"
import Single from "../src/Pages/single/Single"
import Write from '../src/Pages/Write/Write';
import Home from "../src/Pages/home/Home";
import Posts from './Components/posts/Posts';
import { Component } from 'react';
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SinglePost from './Components/singlePost/SinglePost';


function App() {
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/Home" element={<Home/>} />
        <Route path="/Single/:postId" element={<Single/>} />
        <Route path="/write" element={<Write />}/>
      </Routes>
    </Router>
  );
}

export default App;






