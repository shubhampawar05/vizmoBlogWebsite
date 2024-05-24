import React from 'react'
import Header from '../components/header/Header'
import ContentWrapper from '../components/ContentWrapper/ContentWrapper'
import SingleCard from '../components/SingleCard/SingleCard'

import Data from './../assets/SampleData.json'


const MainPage = () => {
  return (
    <div className=' bg-slate-100'>
      <Header/>
      <ContentWrapper>
        <p>Main contnet</p>
       <div className=' grid grid-cols-4 gap-3 place-items-center px-28 py-4'>
      {Data.map((item,idx)=>{
        return(
          <SingleCard card={item} key={idx}/>
        )
      })}
       </div>
      </ContentWrapper>
    </div>
  )
}

export default MainPage