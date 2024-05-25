import React from 'react'
import Header from '../components/header/Header'
import ContentWrapper from '../components/ContentWrapper/ContentWrapper'
import { useParams } from 'react-router-dom';

const DetailsPage = () => {

  const localData = JSON.parse(localStorage.getItem("localData"));
  console.log("form details page", localData);

  const { uuid } = useParams();
  console.log(uuid);

  const filteredData = localData.filter((item )=> item.id === uuid)
  console.log(filteredData);
  console.log(filteredData.title);


  return (
    <div>
      <Header/>
      <ContentWrapper>

        <div className='mt-12 max-w-4xl mx-auto pb-12 h-full '>
          <h1 className=' text-3xl font-bold mb-8 '>{filteredData[0].title}</h1>
          <div className=' text-center mx-auto mb-4 h-full'>
          <img src={filteredData[0].imgUrl} alt="" className=' h-[450px] w-full'/>
          </div>
          <div className=' py-8' dangerouslySetInnerHTML={{__html: filteredData[0].value}} />
        </div>
        
      </ContentWrapper>
    </div>
  )
}

export default DetailsPage