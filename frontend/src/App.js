import Header from './components/Header';
import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Signin from './components/Signin';
import Signup from './components/Signup';
import ContactPage from './components/ContactPage';
import UserProfile from './components/UserProfile';

function App() {
  return <React.Fragment>
    <header>
      <Header/>
    </header>
    <main>
      <Routes>
        <Route path='/' element={<Home/> }exact/>
        <Route path='/signup' element={<Signup/> }exact/>
        <Route path='/signin' element={<Signin/> }exact/>
        <Route path='/contactpage' element={<ContactPage/> }exact/>
        <Route path='/userprofile' element={<UserProfile/> }exact/>
      </Routes>
    </main>
  </React.Fragment>
}

export default App;