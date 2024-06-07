import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import SecondPage from './SecondPage';

function App() {
  return (
    <Router>
      <div>
        <nav className="header">
          <ul className="nav-links">
            <li>
              <Link to="/">Count Clicks</Link>
            </li>
            <li>
              <Link to="/second">Second Page</Link>
            </li>
          </ul>
        </nav>

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/second" element={<SecondPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
