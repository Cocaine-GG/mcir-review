import React, {useCallback, useContext, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {useHttp} from '../../hooks/http.hook'
import {AuthContext} from '../../context/AuthContext'
import Logo from '../../components/Logo'
import StarsRating from '../../components/StarsRating'
import MessageForm from '../../components/MessageForm'
import Loader from '../../components/Loader'
import ProgressLoader from '../../components/ProgressLoader'
import Welcome from '../../layouts/Welcome'
import Recommendation from '../../layouts/Recommendation'
import './reviewPage.scss'
import Page404 from '../Page404/page404'

const ReviewPage = () => {
  const {token} = useContext(AuthContext)
  const {request, loading} = useHttp()
  const [link, setLink]= useState(null)
  const linkCode = useParams().id
  const questionTitle = [
    'Comment s’est déroulée notre collaboration selon vous ?',
    'Quelle est votre satisfaction par rapport à la prestation livrée ?',
    'Avez-vous eu des retours de vos clients par rapport à cette mission ?', 'Des conseils ou remarques à nous transmettre ?'
  ]
  const answer = [linkCode]
  //TODO: Optimize callback
  const getLink = useCallback(async ()=>{
    try {
      const fetched = await request(`/api/link/review/${linkCode}`, 'GET', null, {
        Authorization: `Bearer `
      })
      setLink(fetched)

    } catch (e) {}
  }, [linkCode, request])
  useEffect(()=> {
    getLink()
  },[getLink])


  if (loading && !link){
    return <Loader/>
  }else if(!loading && !link){

    return (
      <>
        <Logo/>
        <Page404/>
      </>
    )
  }else if(!loading && token && link){
    return <Loader/>
  }
  return (
    <div id="carousel" className="review-page carousel slide d-flex"
         data-ride="carousel"
         data-interval="0"
         data-touch="false"
         data-wrap="false"
    >
      <div className="carousel-inner h-100 d-flex">
        <div className="carousel-item active">
          <Logo />
          {!loading && link && <Welcome link={link}/>}
        </div>
        {questionTitle.map((el, index)=>{
          if(index<2){
            return(
              <div className="carousel-item" key={el}>
                <div className="container question">
                  <div className="question__number-page">
                    0{index+1}
                  </div>

                  <div className="d-md-flex justify-content-between">
                    <h1 className="question__title  py-0 col-md-6">{el}</h1>
                    <div className="starsWrap align-self-lg-center col-12 col-md-5">
                      <StarsRating answArr={answer}/>
                    </div>
                  </div>
                </div>
                <ProgressLoader />
              </div>)
          }if(index>1){
            return(
              <div className="carousel-item" key={el}>
                <div className="container question">
                  <div className="question__number-page">
                    0{index+1}
                  </div>

                  <div className="d-md-flex justify-content-between">
                    <h1 className="question__title col-md-6">{el}</h1>
                    <div className="starsWrap align-self-center align-self-lg-center col-12 col-md-5">
                      <MessageForm answArr={answer}/>
                    </div>
                  </div>
                </div>
                <ProgressLoader />
              </div>)
          } else {
            return ''
          }
        })}
        <div className="carousel-item">
          <Logo />
          {!loading && link && <Recommendation/>}
        </div>
      </div>
    </div>
  )
}

export default ReviewPage