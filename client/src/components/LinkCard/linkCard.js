import React from 'react'
import {NavLink} from 'react-router-dom'

 const LinkCard = ({questionTitle ,link, answer}) => {
  if(!answer || !answer.length){
    return (
      <>
        <h1>Lien pour client :</h1>
        <p><NavLink to={"/review/"+link.code} target="_blank" rel="noopener noreferrer">{link.linkForClient}</NavLink></p>
        <hr/>
        <p>Le client n'a pas encore laissé d'avis, veuillez revenir plus tard...</p>
      </>)
  }
  return (
    <>
      <h1>Lien pour client :</h1>
      <p><NavLink to={"/review/"+link.code} target="_blank" rel="noopener noreferrer">{link.linkForClient}</NavLink></p>
      <h2>Reponse info:</h2>
      <hr/>
        {answer.map((el)=>{
          return (
          <div key={el.code}>
            <h4>{questionTitle[0]}</h4>
            <p>{el.question_1}/5 Etoiles</p>
            <hr/>
            <h4>{questionTitle[1]}</h4>
            <p>{el.question_2}/5 Etoiles</p>
            <hr/>
            <h4>{questionTitle[2]}</h4>
            <p>{el.question_3}</p>
            <hr/>
            <h4>{questionTitle[3]}</h4>
            <p>{el.question_4}</p>
            <hr/>
          </div>
          )
        })}
    </>
  )
}
export default LinkCard