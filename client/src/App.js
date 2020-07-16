import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from './routes'

import 'bootstrap'
import './index.css'
export default function App() {
  const route = useRoutes(false)
  return (
    <Router>
      <div className="container">
        {route}
      </div>
    </Router>
  );
}
