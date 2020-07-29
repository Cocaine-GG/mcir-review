import React from 'react'
import './logo.scss'
import LogoMcir from '../../assets/images/LOGO-FOND-BLANC.svg'
export const Logo = () => {
  return <img src={LogoMcir}
              className="logoMcir d-block mx-auto my-5"
              alt="Logo MCIR" />
}

export default Logo;