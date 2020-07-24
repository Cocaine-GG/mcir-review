import React from 'react'
import './question.scss'
import StarsRating from '../../components/StarsRating'
const Question = (props) => {
  const {questionData, index} = props

  //TODO: answerHandler
  const arrAnswer = []
  const answerHandler=(param)=>{
    arrAnswer.push(param)
    console.log(arrAnswer)
  }

  return (
    <div className="container question">
      <div className="question__number-page">
        0{index+1}
      </div>
      <div className="d-flex justify-content-between">
        <h1 className="question__title col-md-6">{questionData.title}</h1>
        <div className="starsWrap align-self-center align-self-lg-center col-5">
          {index===0 &&
          <StarsRating ansHandler={answerHandler} />}
          {index===1 &&
          <StarsRating ansHandler={answerHandler}/>}
        </div>
        </div>
      <button className="questionbutton d-block" href="#carouselExampleControls" data-slide="next">Dites-nous
        tout !
      </button>
    </div>)
}

export default Question