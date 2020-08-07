import React, {useState} from 'react'
import {FaCheck, FaTimes, FaArrowRight} from 'react-icons/all'

import './recommandation.scss'
import imgGuy from '../../assets/images/guy.png'

const Recommendation = () => {
  const [displayArea, setDisplayArea] = useState('none')
  const [valueArea, setValueArea] = useState('')

  const toogleTextarea = () => {
    if(displayArea === 'none'){
      setDisplayArea('block')
    }else {
      setDisplayArea('none')
    }
  }
  const valueAreaHandler = (e) => {
    setValueArea(e.target.value)
  }
  return (
      <div className="container-fluid recommendation">
        <div className="recommendation__context">
          <h1 className="context__title col-12">Merci pour vos réponses et votre transparence !</h1>
          <h2 className="context__subtitle col-12 col-lg-7">Nous avons hâte de nous lancer dans une nouvelle aventure à vos côtés.</h2>
        </div>
        <div className="recommendation__footer ">
          <img src={imgGuy} alt="guy" className="footer__img d-none d-lg-block h-75"/>
            <div className="footer__wrap mx-auto mr-lg-0 col-10 col-md-7 text-center text-lg-left">
              <h2 className="footer__title">Et vous, prêt(E) à nous recommander ?</h2>
              <div className="d-flex flex-wrap col-12 justify-content-center justify-content-lg-start">
                <a
                  href="https://g.page/myclientisrich/review?gm"
                  target="_blank" rel="noopener noreferrer"
                  className="footer__btn align-self-center btn col-8 col-sm-6 col-lg-3 mx-sm-1 mr-lg-3 mb-2 mb-lg-0">
                  Oui <FaCheck style={{color:'#65C498'}}/>
                </a>
                <button
                  className="footer__btn align-self-center btn col-8 col-sm-6 col-lg-3 mx-sm-1 mr-lg-3 mb-2 mb-lg-0"
                  onClick={toogleTextarea}
                >
                  Non <FaTimes style={{color:'#D32D2D'}}/>
                </button>
                <div style={{display:displayArea}} className="footer__textarea col-12 col-md-12 col-lg-5">
                  <label className="d-block my-0">Expliquez-nous la raison, ça nous aidera !</label>
                  <div className="position-relative">
                  <textarea
                    placeholder="Écrire ici …"
                    onChange={valueAreaHandler}></textarea>
                    <FaArrowRight
                      className="footer__submit rounded-circle p-1"
                      onClick={()=>alert(valueArea)}/>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>)
}

export default Recommendation


