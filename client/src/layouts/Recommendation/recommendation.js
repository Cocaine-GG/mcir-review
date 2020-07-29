import React from 'react'
import {FaCheck, FaTimes} from 'react-icons/all'

import './recommandation.scss'
import imgGuy from '../../assets/images/guy.png'

const Recommendation = () => {
  return (
      <div className="container-fluid px-0 recommendation">
        <div className="recommendation__context my-4">
          <h1 className="context__title col-12">Merci pour vos réponses et votre transparence !</h1>
          <h2 className="context__subtitle col-12 col-lg-7 mx-auto">Nous avons hâte de nous lancer dans une nouvelle aventure à vos côtés.</h2>
        </div>
        <div className="recommendation__footer row align-items-center justify-content-center fixed-bottom">
          <img src={imgGuy} alt="guy" className="footer__img d-none d-lg-block h-75"/>
            <div className="footer__wrap col-10 col-md-7 offset-lg-3 text-center text-lg-left">
              <h2 className="footer__title">Et vous, prêt(E) à nous recommander ?</h2>
              <a
                href="https://g.page/myclientisrich/review?gm"
                target="_blank" rel="noopener noreferrer"
                className="footer__btn btn col-12 col-sm-6 col-lg-3 mx-sm-1 w-100 mr-lg-3 my-2 mb-my-0">
                Oui <FaCheck style={{color:'#65C498', fontSize:'25px'}}/>
              </a>
              <button className="footer__btn btn col-12 col-sm-6 col-lg-3 mx-sm-1 w-100">
                Non <FaTimes style={{color:'#D32D2D', fontSize:'25px'}}/>
              </button>
            </div>
        </div>
      </div>)
}

export default Recommendation


