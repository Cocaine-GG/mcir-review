import React from 'react'
import './messageForm.scss'
const MessageForm = () => {
  return (
    <div>
      <textarea
        placeholder="Écrire ici ..."
        className="border-0 w-100"
        name="answerMessage"></textarea>
      <button
        className="btn-textarea"
        href="#carouselExampleControls"
        data-slide="next"
      >ok</button>
    </div>
  )
}

export default MessageForm