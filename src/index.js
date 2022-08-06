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
import DogBoarding from './pages/DogBoarding';
import Booking from './pages/Booking';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} onEnter={() => window.location.reload()} >
          <Route index element={<Home />} onEnter={() => window.location.reload()} />
          <Route path="About" element={<About />} onEnter={() => window.location.reload()} />
          <Route path="Location" element={<Location />} onEnter={() => window.location.reload()} />
          <Route path="Fees" element={<Fees />} onEnter={() => window.location.reload()} />
          <Route path="DogBoarding" element={<DogBoarding />} onEnter={() => window.location.reload()} />
          <Route path="Booking" element={<Booking />} onEnter={() => window.location.reload()} />
          <Route path="/*" element={<App /> } onEnter={() => window.location.reload()} />
        </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
