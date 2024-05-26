import React from 'react'
import Header from '../../header/Header'
import ContentWrapper from '../../ContentWrapper/ContentWrapper'
import { Link, useParams } from 'react-router-dom';

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

        <div className='sm:mt-12 mt-4 sm:max-w-4xl max-w-xs mx-auto sm:pb-12  h-full '>
          <h1 className=' sm:text-3xl text-xl px-1 font-bold mb-8 '>{filteredData[0].title}</h1>
          <div className='  mb-4 h-full'>
          <img src={filteredData[0].imgUrl} alt="" className=' px-1 sm:h-[450px] h-[250px] w-full object-cover object-center'/>
          </div>
          <div className=' sm:py-8 py-4 px-2 overflow-x-hidden text-justify' dangerouslySetInnerHTML={{__html: filteredData[0].value}} />
        </div>
        <Link to={"/"}>
              {" "}
              <div className=' flex justify-center items-center'>
              <button className=" border py-1 px-2 mb-4 rounded  bg-[#46BCAF] font-semibold text-white">
                {" "}
                BACK TO MAIN PAGE
              </button>
              </div>
            </Link>
      </ContentWrapper>
    </div>
  )
}

export default DetailsPage