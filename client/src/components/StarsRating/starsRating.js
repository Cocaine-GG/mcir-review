import React, {useState} from 'react'
import {FaStar} from 'react-icons/fa'
import './starsRating.scss'

const StarsRating = ({answArr}) => {

  const [rating, setRating] = useState({
    rating:''
  })
  const [hover, setHover] = useState()
  const [color, setColor] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const satisfied = ['Très mauvais?','Mauvais?','Moyenne?', 'Très Bien!', 'Excellente!']

  const answerHandler = async (el)=>{
    setDisabled(true)
    setColor(true)
    setRating(el.target.value)
    answArr.push(el.target.value)
  }

  return (
    <div>
      <div className=" d-flex justify-content-center">
        {satisfied.map((element, index)=>{
          const ratingValue = index + 1
          return (
            <label className="" key={index}>
              <input
                disabled={disabled}
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={answerHandler}
                href="#carousel"
                data-delay='2000'
                data-slide="next"
              />
              <FaStar
                className={ratingValue <= (hover || rating)?'star--active' : 'star'}
                onMouseEnter={()=>setHover(ratingValue)}
                onMouseLeave={()=>setHover(ratingValue)}
              />
            </label>
          )})}
      </div>

      <p
        className="question__stars-text question__stars-text text-center"
        style={{height:'100px',
          color:color?'#D3B251':'#E2E2E2'}}>
        {satisfied[hover-1]||satisfied[rating-1]}
      </p>
    </div>
  )
}

export default StarsRating