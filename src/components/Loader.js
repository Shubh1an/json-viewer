import React from 'react'
import "./loader.css"
const Loader = () => {
  return (
    <div className='w-100 h-100 loader-container'>
        <div className="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Loader