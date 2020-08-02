import React from 'react'
import './progressLoader.scss'
import Rocket from '../../assets/images/Rocket.png'

const ProgressLoader = () => {
  return (
    <div className="progress">
      <div className={"progress-value"}><img src={Rocket} alt="Rocket"/></div>
    </div>
  )
}
export default ProgressLoader