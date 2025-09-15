// client/src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import CreateUser from './components/CreateUser';
import CreatePost from './components/CreatePost';
import CreateIssue from './components/CreateIssue';
import CreateFundraiser from './components/CreateFundraiser';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/createuser" element={<CreateUser />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/createissue" element={<CreateIssue />} />
        <Route path="/createfundraiser" element={<CreateFundraiser />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
