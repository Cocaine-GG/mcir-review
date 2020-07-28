import React, {useCallback, useContext, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {useHttp} from '../../hooks/http.hook'
import {AuthContext} from '../../context/AuthContext'
import Loader from '../../components/Loader'
import LinkCard from '../../components/LinkCard'

const DetailPage = () => {
  const {token} = useContext(AuthContext)
  const {request, loading} = useHttp()
  const [link, setLink]= useState(null)
  const [answer, setAnswer]= useState(null)
  const linkId = useParams().id

  const getLink = useCallback(async ()=>{
    try {
      const fetched = await request(`/api/link/${linkId}`, 'GET', null, {
        Authorization: `Bearer ${token}`
      })
      setLink(fetched)
    } catch (e) {}
  }, [token, linkId, request])

  const getAnswer = useCallback(async ()=>{
    try {
      const fetched = await request(`/api/review/${linkId}`, 'GET', null, {linkId})
      setAnswer(fetched)
    } catch (e) {}
  }, [linkId, request])

  useEffect(()=> {
    getLink()
  },[getLink])

  useEffect(()=> {
    getAnswer()
  },[getAnswer])

  if(loading) {
    return <Loader/>
  }

  return(
    <div>
      {!loading && link && <LinkCard link={link} answer={answer}/>}
    </div>
  )
}

export default DetailPage