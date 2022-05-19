import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MoviePlayer from './MoviePlayerWrapper';
import NotFound from './NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MoviePlayer myUrl="Ballerup.mp4" />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
