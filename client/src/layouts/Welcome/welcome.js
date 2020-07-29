import React from 'react'
import './welcome.scss'

const Welcome = ({link}) => {
  return (
      <div className="container welcome">
        <div className="welcome__context my-4">
          <h1 className="welcome__title">Bonjour <span>{link.client}</span>!</h1>
          <h2 className="welcome__subtitle">La mission <span>{link.project}</span> est livrée. <br/> On debriefe ?</h2>
        </div>
        <div className="col-12 col-md-5 px-0">
          <button className="welcome__btn button d-block" href="#carousel" data-slide="next">Dites-nous
            tout !
          </button>
          <div className="button__line d-block"></div>
        </div>
      </div>
  )
}
export default Welcome
