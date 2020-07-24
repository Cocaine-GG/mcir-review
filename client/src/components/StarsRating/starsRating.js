import React, {useState} from 'react'
import {FaStar} from 'react-icons/fa'

import './starsRating.scss'
const StarsRating = (props) => {
  console.log(props)
  const [rating, setRating] = useState()
  const [hover, setHover] = useState()
  const satisfied = ['Très mauvais?','Mauvais?','Moyenne?', 'Très Bien!', 'Excellente!']
  return (
    <div>
      {satisfied.map((element, index)=>{
        const ratingValue = index + 1
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={()=>setRating(ratingValue)}

            />
            <FaStar
              className={ratingValue <= (hover || rating)?'star--active' : 'star'}
              onMouseEnter={()=>setHover(ratingValue)}
              onMouseLeave={()=>setHover(null)}
            />
          </label>
      )})}
    <p className="question__stars-text question__stars-text--" style={{height:'30px'}}>
      {satisfied[hover-1]}
    </p>
    </div>

  )


}

export default StarsRating