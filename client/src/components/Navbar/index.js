import React, {useContext} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from '../../context/AuthContext'

export const Navbar = () => {
  const history = useHistory()
  const auth = useContext(AuthContext)
  const logoutHandler = event =>{
    event.preventDefault()
    auth.logout()
    history.push('/')
  }
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
    <NavLink to="/" className="navbar-brand" href="/">
      <img className="d-block mx-auto" src="https://www.myclientisrich.com/logo@2x.daf8e3aa.png" alt=""
           width="40" height="40" />
    </NavLink>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink to="/create" className="nav-link">Create</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/links" className="nav-link">Links</NavLink>
        </li>
      </ul>
      <div className="form-inline mt-2 mt-md-0">
          <button onClick={logoutHandler} className="btn btn-outline-danger my-2 my-sm-0">Deconnexion</button>
      </div>
    </div>
  </nav>)
}
