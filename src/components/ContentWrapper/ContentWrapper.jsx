import React from 'react'

const ContentWrapper = ({children}) => {
  return (
    <div className=' '>

    <div className=' max-w-screen-xl mx-auto '>
        {children}
    </div>
    </div>
  )
}

export default ContentWrapper