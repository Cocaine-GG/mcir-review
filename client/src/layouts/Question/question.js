import React from 'react'
import StarsRating from '../../components/StarsRating'
import MessageForm from '../../components/MessageForm'
import './question.scss'

const Question = (props) => {
  const {questionData, index, link} = props

  return (
    <div className="container question">
      <div className="question__number-page">
        0{index+1}
      </div>
      <div className="d-flex justify-content-between">
        <h1 className="question__title col-md-6">{questionData.title}</h1>
        <div className="starsWrap align-self-center align-self-lg-center col-5">
          {index===0 && <StarsRating code={link.code} />}
          {index===1 && <StarsRating code={link.code}/>}
          {index===2 && <MessageForm />}
          {index===3 && <MessageForm />}
        </div>
      </div>
    </div>)
}

export default Question