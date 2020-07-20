import React, {useContext, useState} from 'react'
import {useHttp} from '../hooks/http.hook'
import {AuthContext} from '../context/AuthContext'
import {useHistory} from 'react-router-dom'

export const CreatePage = () => {
  const history = useHistory()
  const auth = useContext(AuthContext)
  const {request} = useHttp()
  const [linkForm, setLinkForm] = useState({
    client:'', project:''
  })

  const changeHandler = event =>{
    setLinkForm({ ...linkForm, [event.target.name]: event.target.value })
  }
  const pressHandler = async event =>{
    if(event.key==='Enter'){
      try {
        const data = await request('/api/link/generate', 'POST', {linkForm}, {
          Authorization : `Bearer ${auth.token}`
        })
        history.push(`/detail/${data.link._id}`)
      }catch (e) {

      }
    }
  }

  return(
    <div className="row">
      <h1 className="col-12">Create Link</h1>
      <div className="col-12 d-flex justify-content-between">
        <input
          id="client"
          name="client"
          className="form-control"
          placeholder="Entrez le nom du client"
          value={linkForm.client}
          onChange={changeHandler}
          onKeyPress={pressHandler}
          required
        />
        <input
          id="project"
          name="project"
          className="form-control"
          placeholder="Entrez le nom du projet"
          value={linkForm.project}
          onChange={changeHandler}
          onKeyPress={pressHandler}
          required
        />
      </div>
    </div>
  )
}