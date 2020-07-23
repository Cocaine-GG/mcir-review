import React from 'react'
import {Link} from 'react-router-dom'
import Loader from '../Loader'

const LinksList = ({ links }) => {
  if(!links.length){
    return <Loader/>
  }
  return (
    <table className="table table-striped table-light text-center mt-5 w-100">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nom de Client</th>
        <th scope="col">Nom de Projet</th>
        <th scope="col">Detail</th>
        <th scope="col">Link For Client</th>
      </tr>
      </thead>
      <tbody>

        {links.map((link, i)=>{
          return (
          <tr key={link._id}>
            <th scope="row">{++i}</th>
            <td>{link.client}</td>
            <td>{link.project}</td>
            <td><Link to={`/detail/${link.code}`} className="btn btn-outline-primary">Watch</Link></td>
            <td><Link to={`/review/${link.code}`} className="btn btn-outline-success">Open</Link></td>
          </tr>
          )
        })}

      </tbody>
    </table>
  )
}
export default LinksList