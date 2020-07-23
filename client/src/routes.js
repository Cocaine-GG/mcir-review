import React from 'react'
import {Switch ,Route, Redirect} from 'react-router-dom'
import LinksPage from './pages/LinksPage'
import CreatePage from './pages/CreatePage'
import DetailPage from './pages/DetailPage'
import AuthPage from './pages/AuthPage'
import ReviewPage from './pages/ReviewPage'

export const useRoutes = isAuthenticated => {
  if (isAuthenticated){
    return(
      <div className="container">
        <Switch>
          <Route path="/links" exact>
            <LinksPage/>
          </Route>
          <Route path="/create" exact>
            <CreatePage/>
          </Route>
          <Route path="/detail/:id">
            <DetailPage/>
          </Route>
          <Route path="/review">
            <ReviewPage/>
          </Route>
          <Redirect to="/create"/>
        </Switch>
      </div>
    )
  }
  return(
    <Switch>
      <Route path="/" exact>
        <AuthPage/>
      </Route>
      <Route path="/review/:id">
        <ReviewPage/>
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}