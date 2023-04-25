import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmailList from "./components/EmailList"
import Email from './components/Email'

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <div className='app__body'>
          <Sidebar/>
            <Routes>
              <Route path='/' element={<EmailList/>}/>
              <Route path='/mail' element={<Email/>}/>
            </Routes>
        </div>  
      </Router>
    </div>
  );
}

export default App;
