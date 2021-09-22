import React from 'react'

const Alert = ({ children }) => {
  return (
    <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4">
      {children}
    </div>
  )
}

export default Alert
