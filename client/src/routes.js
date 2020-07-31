import React from 'react'
import {Switch ,Route, Redirect} from 'react-router-dom'
import LinksPage from './pages/LinksPage'
import CreatePage from './pages/CreatePage'
import DetailPage from './pages/DetailPage'
import AuthPage from './pages/AuthPage'
import ReviewPage from './pages/ReviewPage'

export const useRoutes = isAuthenticated => {
  const questionTitle = [
    'Comment s’est déroulée notre collaboration selon vous ?',
    'Quelle est votre satisfaction par rapport à la prestation livrée ?',
    'Avez-vous eu des retours de vos clients par rapport à cette mission ?', 'Des conseils ou remarques à nous transmettre ?'
  ]
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
            <DetailPage questionTitle={questionTitle}/>
          </Route>
          <Route path="/review">
            <ReviewPage />
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
        <ReviewPage questionTitle={questionTitle}/>
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}