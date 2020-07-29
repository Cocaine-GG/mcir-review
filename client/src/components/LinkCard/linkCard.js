import React from 'react'
import {NavLink} from 'react-router-dom'
import Loader from '../Loader'

 const LinkCard = ({link, answer}) => {
  if(!answer || !answer.length){
    return (<>
      <h2>Reponse info</h2>
      <p> Lien pour client : <NavLink to={"/review/"+link.code} target="_blank" rel="noopener noreferrer">{link.linkForClient}</NavLink></p>
      <Loader />
      </>)
  }
  return (
    <>
      <h2>Reponse info</h2>
      <p> Lien pour client : <NavLink to={"/review/"+link.code} target="_blank" rel="noopener noreferrer">{link.linkForClient}</NavLink></p>

      <table className="table table-striped table-light text-center mt-5 w-100">
        <thead>
        <tr>
          <th scope="col">Question 1</th>
          <th scope="col">Question 2</th>
          <th scope="col">Question 3</th>
          <th scope="col">Question 4</th>
        </tr>
        </thead>
        <tbody>
        {answer.map(el=>{
          return (
            <tr key={el.code}>
              <td>{el.question_1}</td>
              <td>{el.question_2}</td>
              <td>{el.question_3}</td>
              <td>{el.question_4}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
    </>
  )
}
export default LinkCard