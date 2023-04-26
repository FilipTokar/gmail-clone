import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmailList from "./components/EmailList"
import Email from './components/Email'
import SendEmail from './components/SendEmail';
import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
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
        {sendMessageIsOpen && <SendEmail/>}  
      </Router>
    </div>
  );
}

export default App;
