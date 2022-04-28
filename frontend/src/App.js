import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import Header from './components/Header';
import PostScreen from './screens/PostScreen';
import NavBar from './components/NavBar';
import Connects from './components/Connects';
import About from './components/About';
import Contact from './components/Contact';


function App() {
  return (
    <Router>
      <Header />
      <NavBar />
      <Route path="/home" component={HomeScreen} exact />
      <Route path="/post/:id" component={PostScreen} />
      <Route path="/connects" component={Connects} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Router>
  );
}

export default App;