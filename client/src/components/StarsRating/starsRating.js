import React, {useState} from 'react'
import {FaStar, FaArrowRight} from 'react-icons/fa'
import './starsRating.scss'

const StarsRating = ({answArr}) => {

  const [rating, setRating] = useState({
    rating:''
  })
  const [hover, setHover] = useState()
  const satisfied = ['Très mauvais?','Mauvais?','Moyenne?', 'Très Bien!', 'Excellente!']

  const answerHandler = async ()=>{
    answArr.push(rating)
  }

  return (
    <div>
      <div className=" d-flex justify-content-center">
        {satisfied.map((element, index)=>{
          const ratingValue = index + 1
          return (
            <label className="" key={index}>
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
      </div>

      <p className="question__stars-text question__stars-text text-center" style={{height:'100px'}}>
        {satisfied[hover-1]||satisfied[rating-1]}
      </p>
      <button
        className="btn btn-outline-primary w-100"
        onClick={answerHandler}
        href="#carouselExampleControls" data-slide="next"
      ><FaArrowRight/></button>
    </div>
  )


}

export default StarsRating