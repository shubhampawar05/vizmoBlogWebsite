import React from 'react'

const ContentWrapper = ({children}) => {
  return (
    <div className=' bg-slate-100'>

    <div className=' max-w-screen-xl mx-auto bg-white'>
        {children}
    </div>
    </div>
  )
}

export default ContentWrapper