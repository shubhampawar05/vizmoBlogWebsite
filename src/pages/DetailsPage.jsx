import React from 'react'
import Header from '../components/header/Header'
import ContentWrapper from '../components/ContentWrapper/ContentWrapper'
import { useParams } from 'react-router-dom';

const DetailsPage = () => {

  const localData = JSON.parse(localStorage.getItem("localData")) || [];
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
        <h1 className=' text-3xl font-bold '>{filteredData[0].title}</h1>
        <img src={filteredData[0].imgUrl} alt="" />
        <div dangerouslySetInnerHTML={{__html: filteredData[0].value}} />
      </ContentWrapper>
    </div>
  )
}

export default DetailsPage