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
        <div className="flex justify-center mt-12 ">
          <p className="text-4xl font-semibold text-gray-800 text-center max-w-5xl leading-10">
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
        <p className="ml-12 my-8 text-3xl font-bold "> Latest Blog's </p>
        <div className=" grid grid-cols-4 gap-3 place-items-center px-28 py-4 ">
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
