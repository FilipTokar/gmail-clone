import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmailList from "./components/EmailList";
import Email from "./components/Email";
import SendEmail from "./components/SendEmail";
import { useDispatch, useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { login, selectUser } from "./features/userSlice";
import Login from "./components/Login";
import { auth } from "./features/firebase";

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch()
  
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photoUrl: user.photoURL,
        }))
      }
      else {

      }
    })
  }, [])

  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="App">
          <Header />
          <div className="app__body">
            <Sidebar />
            <Routes>
              <Route path="/" element={<EmailList />} />
              <Route path="/mail" element={<Email />} />
            </Routes>
          </div>
          {sendMessageIsOpen && <SendEmail />}
        </div>
      )}
    </Router>
  );
}

export default App;
