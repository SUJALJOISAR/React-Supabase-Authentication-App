import React from 'react'
import {Routes,Route, BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';

const App = () => {
  return (
    <BrowserRouter>
     <Routes>
       <Route path='/register' element={<Register/>} />
       <Route path='/login' element={<Login/>} />
       <Route path='/' element={<Home/>} />
     </Routes>
     <ToastContainer />
    </BrowserRouter>
 );
}

export default App
