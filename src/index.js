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

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Location" element={<Location />} />
          <Route path="Fees" element={<Fees />} />
          <Route path="Jobs" element={<Jobs />} />
          <Route path="Booking" element={<Booking />} />
          <Route path="/sitemap.txt" />
          <Route onEnter={() => window.location.reload()} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>In Index, else route</p>
              </main>
            }
          />
        </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
