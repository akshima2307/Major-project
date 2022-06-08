import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import Header from './components/Header';
import PostScreen from './screens/PostScreen';
import ProfileScreeen from './screens/ProfileScreen';
import NavBar from './components/NavBar';
import About from './components/About';
import Contact from './components/Contact';
import LikeScreen from './screens/LikeScreen';
import LogIn from './components/Login';
import Signup from './components/Signup';
import UserListScreen from './screens/UserListScreen';
import PostEditScreen from './screens/PostEditScreen';
import UserPostScreen from './screens/UserPostScreen';
import UserProfileScreen from './screens/UserProfileScreen';
import LandingPage from './screens/LandingPage';


function App() {
  return (
    <Router>
      <Header />
      <NavBar />
      <Route path="/" component={LandingPage} exact />
      <Route path="/search/:keyword" component={HomeScreen}  />
      <Route path="/home" component={HomeScreen} exact />
      <Route path="/post/:id" component={PostScreen} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/like" component={LikeScreen} />
      <Route path="/login" component={LogIn} />
      <Route path="/signup" component={Signup} />
      <Route path="/profile" component={ProfileScreeen} />
      <Route path="/userProfile/:id" component={UserProfileScreen} />
      <Route path="/connects" component={UserListScreen} />
      <Route path='/user/post/:id/edit' component={PostEditScreen} />
      <Route path='/userpost/:id' component={UserPostScreen} />
    </Router>
  );
}

export default App;