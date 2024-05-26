import React from "react";
import Header from "../components/header/Header";
import ContentWrapper from "../components/ContentWrapper/ContentWrapper";
import SingleCard from "../components/SingleCard/SingleCard";
import { Link } from "react-router-dom";

// import Data from './../assets/SampleData.json'

const MainPage = () => {
  const localData = JSON.parse(localStorage.getItem("localData")) || [];
  console.log("form main page", localData);

  return (
    <div className=" ">
      <Header />
      <ContentWrapper>
        <div className="flex justify-center sm:mt-12 mt-4 ">
          <p className="sm:text-4xl text-2xl font-semibold text-gray-800 text-center max-w-5xl leading-10">
            Explore,{" "}
            <span className="text-green-600 font-semibold">Engage</span>, and{" "}
            <span className="text-teal-700 font-semibold text-3xl">
              Elevate
            </span>{" "}
            with{" "}
            <span className="text-indigo-700 font-bold text-4xl">
              VizmoBlog
            </span>{" "}
            – Your Gateway to{" "}
            <span className="text-pink-600 font-medium">
              Insightful Stories
            </span>{" "}
            and{" "}
            <span className="text-green-600 italic font-medium">
              Inspiring Ideas
            </span>
            !
          </p>
        </div>
        <p className="sm:ml-12 sm:my-8 ml-2 my-4 text-3xl font-bold relative "> Latest Blog's  <hr className="  absolute w-[140px] border-2 border-[#46bcaf]"/>  </p>
        <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 grid-cols-1  place-items-center sm:px-16 md:px-8 xl:px-24 py-4 ">
          {localData.length > 0
            ? localData.map((item, idx) => <SingleCard card={item} key={idx} />)
            : null}
        </div>
        {localData.length === 0 && (
          <>
            <p className=" text-center text-2xl font-semibold  min-h-40 flex flex-col items-center gap-4 justify-center">
              {" "}
              Write Your First Blog...
              <Link to={"/AddPost"}>
                <span className=" p-2 bg-[#46BCAF] text-white font-semibold rounded-md">
                  <button className="  text-white font-semibold ">
                    First Blog
                  </button>
                </span>
              </Link>
            </p>
          </>
        )}
      </ContentWrapper>
    </div>
  );
};

export default MainPage;
