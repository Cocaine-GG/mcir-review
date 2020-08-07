import React from 'react'
import './progressLoader.scss'
import Rocket from '../../assets/images/Rocket.png'

const ProgressLoader = () => {
  return (
    <div className="progress-loader">
      <div className="progress-value"></div>
      <img className="progress-loader__img" src={Rocket} alt="Rocket"/>
    </div>
  )
}
export default ProgressLoader