// Import react library
import React from 'react';

import './App.css'

// Importing Pages from pages folder
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import Error from './pages/Error'

// Importing Webpage Components 
import Navbar from './components/Navbar'

// Importing Routing methods from router dom to allow for multi webpage application
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'



function App() {
  return (
    <>
    <Navbar/>
      <Router>
          <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route exact path="rooms/" element={<Rooms/>} />
              <Route exact path="/rooms/:crum" element={<SingleRoom/>} />
              <Route component={<Error/>} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
