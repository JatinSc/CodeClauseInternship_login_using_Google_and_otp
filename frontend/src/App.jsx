import React from 'react'
import './Styles/App.css'
import {
        Routes,
        Route,
} from 'react-router-dom';
import { UserProvider, useUser } from './Context/UserContext.jsx'
        
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'
import GalleryApp from './components/GalleryApp';
import JokesApp from './components/JokesApp';
import TypingTestApp from './components/TypingTestApp';

const App = () => {
  const {user} = useUser()
  
  return (
      <div className="app">
        {user !==null && <Navbar/> }
        <div className='mainContainer'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/GalleryApp' element={<GalleryApp />} />
          <Route path='/JokesApp' element={<JokesApp />} />
          <Route path='/TypingTestApp' element={<TypingTestApp />} />
        </Routes>
        </div>
      </div>
    
  )
}

const AppWithProvider = () => {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  );
}

export default AppWithProvider;