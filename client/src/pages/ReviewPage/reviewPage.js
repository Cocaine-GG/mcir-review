import React, {useCallback, useContext, useEffect, useState} from 'react'
import './ReviewPage.scss'
import Logo from '../../components/Logo'
import Welcome from '../../layouts/Welcome'
import {useHttp} from '../../hooks/http.hook'
import {useParams} from 'react-router-dom'
import Loader from '../../components/Loader'
import {AuthContext} from '../../context/AuthContext'
import Question from '../../layouts/Question'

const ReviewPage = () => {
  const {token} = useContext(AuthContext)
  const {request, loading} = useHttp()
  const [link, setLink]= useState(null)
  const linkId = useParams().id

  const questionData = [
    {
      title: 'Comment s’est déroulée notre collaboration selon vous ?',
    },
    {
      title: 'Quelle est votre satisfaction par rapport à la prestation livrée ?',
    },
    {
      title: 'Avez-vous eu des retours de vos clients par rapport à cette mission ?',
    },
    {
      title: 'Des conseils ou remarques à nous transmettre ?',
    }
  ]

  //TODO: Optimize callback
  const getLink = useCallback(async ()=>{
    try {
      const fetched = await request(`/api/link/review/${linkId}`, 'GET', null, {
        Authorization: `Bearer `
      })
      setLink(fetched)

    } catch (e) {}
  }, [linkId, request])
  useEffect(()=> {
    getLink()
  },[getLink])


  if (loading && !link){
    return <Loader/>
  }else if(!loading && token && link){
    return <Loader/>
  }
  return (
    <div id="carouselExampleControls" className="carousel slide"
         data-ride="carousel"
         data-interval="0"
         data-touch="false"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Logo />
          {!loading && link && <Welcome link={link}/>}
        </div>
        {questionData.map((title,index)=>{
          return (
            <div key={index} className="carousel-item">
              {!loading && link &&
              <Question
                questionData={title}
                index={index}
              />}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ReviewPage