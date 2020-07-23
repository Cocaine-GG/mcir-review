import React, {useContext, useState} from 'react'
import {useHttp} from '../../hooks/http.hook'
import {AuthContext} from '../../context/AuthContext'
import './authPage.css'

const AuthPage = () => {
  const auth = useContext(AuthContext)
  const {loading,request}= useHttp()
  const [form, setForm] = useState({
    email: '', password: ''
  })

  const changeHandler = event =>{
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const registerHandler = async () => {
    try {
      const data = await request('api/auth/register', 'POST', {...form})
      console.log('Data', data)
    } catch (e) {
    }
  }
  const loginHandler = async () => {
    try {
      const data = await request('api/auth/login', 'POST', {...form})
      auth.login(data.token, data.userId)
    } catch (e) {
    }
  }
  return(
    <div className="row">
      <div className="card col-12 col-md-8 col-lg-6 mx-auto text-white bg-dark mt-5">
        <div className="card-body">
          <div className="form-signin col-12">
            <img className="my-4 d-block mx-auto" src="https://www.myclientisrich.com/logo@2x.daf8e3aa.png" alt="Logo MCIR"
                 width="100" height="100" />
              <div className="form-label-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Email address"
                  value={form.email}
                  required
                  autoFocus
                  onChange={changeHandler}
                />
                  <label htmlFor="email">Email address</label>
              </div>
              <div className="form-label-group">
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  value={form.password}
                  required
                  onChange={changeHandler}
                />
                  <label htmlFor="password">Password</label>
              </div>

              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Remember me
                </label>
              </div>
              <div className="d-block d-md-flex">
                <button
                  onClick={loginHandler}
                  className="btn btn-lg btn-primary mb-2 mb-md-0 mx-auto col-12 col-md-5"
                >Connexion</button>
                <button
                  className="btn btn-lg btn-light mx-auto col-12  col-md-5"
                  onClick={registerHandler}
                  disabled={loading}
                >Inscription</button>
              </div>
          </div>
        </div>
      </div>
  </div>
  )
}

export default AuthPage