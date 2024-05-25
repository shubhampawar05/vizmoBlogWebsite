import React from 'react'
import Header from '../components/header/Header'
import ContentWrapper from '../components/ContentWrapper/ContentWrapper'
import SingleCard from '../components/SingleCard/SingleCard'

// import Data from './../assets/SampleData.json'


const MainPage = () => {

  const localData = JSON.parse(localStorage.getItem("localData")) || [];
  console.log("form main page", localData);

  return (
    <div className=' bg-slate-100'>
      <Header/>
      <ContentWrapper>
        <p>Main contnet</p>
       <div className=' grid grid-cols-4 gap-3 place-items-center px-28 py-4'>
       {localData.length > 0 ? (
            localData.map((item, idx) => (
              <SingleCard card={item} key={idx}/>
            ))
          ) : (
            <p>No data available</p>  
          )}
       </div>
      </ContentWrapper>
    </div>
  )
}

export default MainPage