import React from 'react'

export const Loader = () => {
  return (
    <div className="d-flex justify-content-center" style={{paddingTop: '5rem'}}>
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}
