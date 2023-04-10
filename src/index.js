import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
//import App from './App';
import './App.css'

// Importing Pages from pages folder
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import Error from './pages/Error'
import Navbar from './components/Navbar'

import reportWebVitals from './reportWebVitals';

// Importing Routing methods from router dom to allow for multi webpage application
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
  <>
    <Router>
    <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="rooms/" element={<Rooms/>} />
        <Route exact path="/rooms/:crum" element={<SingleRoom/>} />
        <Route component={<Error/>} />
      </Routes>
    </Router>
  </>
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
