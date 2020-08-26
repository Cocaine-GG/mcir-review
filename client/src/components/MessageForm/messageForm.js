import React, {useState} from 'react'
import './messageForm.scss'


const MessageForm = ({ answArr }) => {
  const [message, setMessage] = useState({message:''})
  const [btnDisabled, setBtnDisabled] = useState(true)

  const messageHandler =(event)=>{
    setMessage(event.target.value)
    if(message){
      setBtnDisabled(false)
    }
  }
  const answerHandler =()=>{
    answArr.push(message)
  }

  return (
    <div className="message-form">
      <textarea
        required
        placeholder="Écrire ici ..."
        className="border-0 w-100"
        value={message.message}
        onChange={messageHandler}
        name="answerMessage">

      </textarea>
      <button
        disabled={btnDisabled}
        className="btn-textarea"
        href="#carousel"
        onClick={answerHandler}
        data-slide="next"
      >ok</button>
    </div>
  )
}

export default MessageForm