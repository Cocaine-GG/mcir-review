import React, {useState} from 'react'
import './messageForm.scss'
import {useHttp} from '../../hooks/http.hook'


const MessageForm = ({ answArr }) => {
  const [message, setMessage] = useState({message:''})
  const {request}= useHttp()


  const messageHandler =(event)=>{
    setMessage(event.target.value)
  }
  const messageRecoder =()=>{
    answArr.push(message)

    //SUBMIT DATAS
    if (answArr.length === 5) {
      console.log(answArr)
      const submitHandler = async ()=>{
        console.log(answArr)
        try {
          const data = await request('/api/review/answer', 'POST', {...answArr})
          console.log(data)
        } catch (e) {
        }
      }
      submitHandler()
    }
  }

  return (
    <div className="message-form">
      <textarea
        placeholder="Écrire ici ..."
        className="border-0 w-100"
        value={message.message}
        onChange={messageHandler}
        name="answerMessage">

      </textarea>
      <button
        className="btn-textarea"
        href="#carouselExampleControls"
        onClick={messageRecoder}
        data-slide="next"
      >ok</button>
    </div>
  )
}

export default MessageForm