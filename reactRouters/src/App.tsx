import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Protected from "./Components/Protected";
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import About from "./Components/About"
import Services from "./Components/Services"
import Registration from './Components/Registration';
import Profile from './Components/Profile';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const logIn = () => {
    setIsLoggedIn(true);
  };
  const logOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} login={logIn} logout={logOut}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' Component={About} />
        <Route path='/services' Component={Services} />
        <Route path='/registration' Component={Registration} />
        <Route path='/profile'
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <Profile />
            </Protected>
          }
        />
        {/* <Route path='/profile' Component={Profile} /> */}
      </Routes>
    </Router>
  )
}

export default App
