import React, { useContext } from "react";
import Header from "../components/header/Header";
import ContentWrapper from "../components/ContentWrapper/ContentWrapper";
import SingleCard from "../components/SingleCard/SingleCard";
import { Link } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";
import PunchLine from "../components/PunchLine/PunchLine";

const MainPage = () => {
  const { posts, deletePost  } = useContext(BlogContext);

  return (
    <div className="">
      <Header />
      <ContentWrapper>
        {/* Heading  */}
        <div className="flex justify-center sm:mt-12 mt-4 ">
          <PunchLine/>
        </div>
        <p className="sm:ml-12 sm:my-8 ml-2 my-4 text-3xl font-bold relative "> Latest Blog's  <hr className="  absolute w-[140px] border-2 border-[#46bcaf]"/>  </p>

        {/* single single Blog cards */}
        <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 grid-cols-1  place-items-center sm:px-16 md:px-8 xl:px-24 py-4 ">
          {posts.length > 0
            ? posts.map((item, idx) => <SingleCard card={item} key={idx} onDelete={deletePost} />)
            : (
              <div className="flex flex-col items-center justify-center">
                <p className="text-center text-2xl font-semibold min-h-40 flex flex-col items-center gap-4 justify-center">
                  Write Your First Blog...
                  <Link to={"/AddPost"}>
                    <button className="p-2 bg-[#46BCAF] text-white font-semibold rounded-md">
                      First Blog
                    </button>
                  </Link>
                </p>
              </div>
            )}
        </div>
      </ContentWrapper>
    </div>
  );
};

export default MainPage;
