import React from 'react';
import {  BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import BrowseJob from './components/pages/BrowseJob';
import Header from './components/layout/Header';

import JobState from './context/job/JobState';

import './App.css';

const App = () => {
  return (
    <JobState>
      <Router>
        <div className="mx-auto">
          <Header />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/joblist' element={<BrowseJob />} />
          </Routes>
        </div>
      </Router>
    </JobState>
  );
}

export default App;
