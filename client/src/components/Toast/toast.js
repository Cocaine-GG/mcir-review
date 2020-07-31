import React from 'react'
import './toast.scss'
const Toast = ({error}) => {
  return (
    <div id="authToast" data-delay="2000" className="toast bg-light" role="alert" aria-live="assertive" aria-atomic="true">
      <div className="toast-header">
        <strong className="mr-auto">{error}</strong>
        <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  )
}

export default Toast