import React from 'react'
import {NavLink} from 'react-router-dom'

export const LinksList = ({ links }) => {
  return (
    <table className="table table-striped table-light text-center mt-5 w-100">
      <thead className="">
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Detail</th>
        <th scope="col">Link For Client</th>
      </tr>
      </thead>
      <tbody>

        {links.map((link, i)=>{
          return (
          <tr key={link._id}>
            <th scope="row">{++i}</th>
            <th scope="row">{link.client}</th>
            <td>{link.project}</td>
            <td><NavLink to={`/detail/${link.code}`} className="nav-link py-0">{link.linkUrl}</NavLink></td>
            <td><NavLink to={`/review/${link.code}`} className="nav-link py-0">{link.linkForClient}</NavLink></td>
          </tr>
          )
        })}

      </tbody>
    </table>
  )
}