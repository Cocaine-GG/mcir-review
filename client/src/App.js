import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {AuthContext} from './context/AuthContext'
import {useRoutes} from './routes'
import {useAuth} from './hooks/auth.hook'
import {Navbar} from './components/Navbar'
import 'bootstrap'
import './index.css'


export default function App() {
  const {login,logout, token, userId} = useAuth()
  const isAuthenticated = !!token
  const route = useRoutes(isAuthenticated)
  return (
    <AuthContext.Provider value={{login,logout, token, userId,isAuthenticated}}>
      <Router>
        { isAuthenticated && <Navbar/>}
        <div className="container">
          {route}
        </div>
      </Router>
    </AuthContext.Provider>
  );
}
