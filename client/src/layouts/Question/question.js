import React from 'react'

const Question = ({title, index}) => {
  return (<div className="question">
    <div>
      0{index+1}
    </div>
    <h1 className="question__title">{title.title}</h1>
    <button className="questionbutton d-block" href="#carouselExampleControls" data-slide="next">Dites-nous
      tout !
    </button>
    </div>)
}

export default Question