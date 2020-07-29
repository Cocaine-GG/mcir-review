import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {AuthContext} from './context/AuthContext'
import {useRoutes} from './routes'
import {useAuth} from './hooks/auth.hook'
import Navbar from './components/Navbar'
import Loader from './components/Loader'
import 'bootstrap'
import './index.css'


export default function App() {
  const {login,logout, token, userId, ready} = useAuth()
  const isAuthenticated = !!token
  const route = useRoutes(isAuthenticated)

  if(!ready){
    return <Loader/>
  }
  return (
    <AuthContext.Provider value={{login,logout, token, userId,isAuthenticated}}>
      <Router>
        { isAuthenticated && <Navbar/>}
        <div className="container-fluid px-0">
          {route}
        </div>
      </Router>
    </AuthContext.Provider>
  );
}
