// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CreateUser from './components/CreateUser';
import CreatePost from './components/CreatePost';
import CreateIssue from './components/CreateIssue';
import CreateFundraiser from './components/CreateFundraiser';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/createuser">Create User</Link></li>
            <li><Link to="/createpost">Create Post</Link></li>
            <li><Link to="/createissue">Create Issue</Link></li>
            <li><Link to="/createfundraiser">Create Fundraiser</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createuser" element={<CreateUser />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/createissue" element={<CreateIssue />} />
          <Route path="/createfundraiser" element={<CreateFundraiser />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

export default App;
