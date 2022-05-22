import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './bootstrap/css/styles.css'
import VideoDisplay from './VideoDisplay'
import NotFound from './NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="watch" element={<VideoDisplay />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
