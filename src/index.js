import React from 'react';

import './index.css';
import reportWebVitals from './reportWebVitals';

import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Location from './pages/Location';
import Fees from './pages/Fees';
import Jobs from './pages/Jobs';
import Booking from './pages/Booking';

const root = ReactDOM.createRoot(document.getElementById('root'));
const reload = () => window.location.reload();
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} onEnter={reload} >
          <Route index element={<Home />} onEnter={reload} />
          <Route path="About" element={<About />} onEnter={reload} />
          <Route path="Location" element={<Location />} onEnter={reload} />
          <Route path="Fees" element={<Fees />} onEnter={reload} />
          <Route path="Jobs" element={<Jobs />} onEnter={reload} />
          <Route path="Booking" element={<Booking />} onEnter={reload} />
          <Route
            path="*"
            element={
              <div className="noPage">
                <p>Ops, no page found! Please click the logo to main page!</p>
              </div>
            }
            onEnter={reload} 
          />
        </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
