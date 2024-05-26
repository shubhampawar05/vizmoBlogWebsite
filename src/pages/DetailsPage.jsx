import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BlogContext } from '../context/BlogContext';
import Header from '../components/header/Header';
import ContentWrapper from '../components/ContentWrapper/ContentWrapper';

const DetailsPage = () => {
  const { posts } = useContext(BlogContext);
  const { uuid } = useParams();

  const filteredData = posts.filter((item) => item.id === uuid);
  const blog = filteredData[0];

  return (
    <div >
      <Header />
      <ContentWrapper>
        
        <div className="sm:mt-12 mt-4 sm:max-w-4xl max-w-xs mx-auto sm:pb-12 h-full">
          <h1 className="sm:text-3xl text-xl px-1 font-bold mb-8">
            {blog.title}
          </h1>
          <div className="mb-4 h-full">
            <img
              src={blog.imgUrl}
              alt={blog.title}
              className="px-1 sm:h-[450px] h-[250px] w-full object-contain object-center"
            />
          </div>
          <div
            className="sm:py-8 py-4 px-2 overflow-x-hidden text-justify"
            dangerouslySetInnerHTML={{ __html: blog.value }}
          />
        </div>
        <Link to="/">
          <div className="flex justify-center items-center">
            <button className="border py-1 px-2 mb-4 rounded bg-[#46BCAF] font-semibold text-white z-10">
              BACK TO MAIN PAGE
            </button>
          </div>
        </Link>
      </ContentWrapper>
    </div>
  );
};

export default DetailsPage;
