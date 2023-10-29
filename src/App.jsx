import React from 'react'
import './App.css'
import Login from './Login/Login';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import SignUp from './SignUp/SignUp';

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
