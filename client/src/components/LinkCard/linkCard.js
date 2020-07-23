import React from 'react'
import {NavLink} from 'react-router-dom'

 const LinkCard = ({link}) => {
  return (
    <>
      <h2>Lien</h2>

      <p> Lien pour client : <NavLink to={"/review/"+link.code} target="_blank" rel="noopener noreferrer">{link.linkForClient}</NavLink></p>
    </>
  )
}
export default LinkCard