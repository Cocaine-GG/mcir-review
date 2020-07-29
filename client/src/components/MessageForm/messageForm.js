import React, {useState} from 'react'
import {useHttp} from '../../hooks/http.hook'
import './messageForm.scss'


const MessageForm = ({ answArr }) => {
  const [message, setMessage] = useState({message:''})
  const [btnDisabled, setBtnDisabled] = useState(true)
  const {request}= useHttp()


  const messageHandler =(event)=>{
    setMessage(event.target.value)
    if(message){
      setBtnDisabled(false)
    }
  }
  const messageRecoder =()=>{
    answArr.push(message)

    //SUBMIT DATAS
    if (answArr.length === 5) {
      const submitHandler = async ()=>{
        try {
          const data = await request('/api/review/answer', 'POST', {...answArr})
          console.log(data) // For what????
        } catch (e) {
        }
      }
      submitHandler()
    }
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
        onClick={messageRecoder}
        data-slide="next"
      >ok</button>
    </div>
  )
}

export default MessageForm