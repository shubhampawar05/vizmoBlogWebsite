import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { v4 as uuidv4 } from 'uuid';

import Header from "../components/header/Header";
import ContentWrapper from "../components/ContentWrapper/ContentWrapper";
import { Link } from "react-router-dom";

const EditorPage = () => {
  const [post, setPost] = useState([]);
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [imgBanner, setImgBanner] = useState("");
  const [authorName, setAuthorName] = useState("");

  const formatDate = (date) => {
    const d = new Date(date);
    let day = d.getDate();
    let month = d.getMonth() + 1; 
    const year = d.getFullYear();
  
    // Add leading zeros if day or month is less than 10
    if (day < 10) {
      day = '0' + day;
    }
    if (month < 10) {
      month = '0' + month;
    }
    return `${day}/${month}/${year}`;
  };

  const convertImgUrl = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImgBanner(url);
      
    }
  };

  
  const handleAdd = () => {
    // console.log("inside handle add");
    const newData = {
      id: uuidv4(),
      value,
      title,
      category,
      imgUrl: imgBanner,
      authorName,
      date:formatDate(new Date()),
    };
    const updatedPosts = [...post, newData];
    setPost(updatedPosts);
    localStorage.setItem("localData", JSON.stringify(updatedPosts));

    setValue('');
    setTitle("");
    setCategory("");
    setImgBanner("");
    setAuthorName("");
  };

  // console.log(post);

  // useEffect(() => {
  //   const savedPosts = localStorage.getItem("localData");
  //   if (savedPosts) {
  //     setPost(JSON.parse(savedPosts));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("localData", JSON.stringify(post));
  // }, [post]);

  return (
    <div className=" bg-slate-100">
      <Header />
      <ContentWrapper>
        <div className=" max-w-3xl mx-auto min-h-[50vh] mt-24 relative border-2 border-black p-4 rounded bg-white">
          <div>
            {/* inputs for blog */}
            <div className=" flex justify-between items-center my-4">
              {/* Title of your blog */}
              <div className="">
                <label htmlFor="title" className=" text-xl font-semibold"> Blog Title :- </label>
                <input
                value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  id="title"
                  placeholder="Blog Title"
                  className=" border-b outline-none rounded-md p-1 text-xl font-semibold border-black"
                />
              </div>
              {/* category  */}
              <div>
                <label htmlFor="category" className=" text-xl font-semibold"> Category </label>
                <select
                  name=""
                  value={category}
                  id=""
                  onChange={(e) => setCategory(e.target.value)}
                  className=" border-b outline-none rounded-md p-1 text-xl  border-black "
                >
                  <option value="">
                    Select Category
                  </option>
                  <option value="Space" className=" ">Space</option>
                  <option value="Artificial Intelligence">
                    Artificial Intelligence
                  </option>
                  <option value="Robotics">Robotics</option>
                  <option value="Blockchain">Blockchain</option>
                  <option value="Biotechnology">Biotechnology</option>
                  <option value="Cybersecurity">Cybersecurity</option>
                  <option value="Renewable Energy">Renewable Energy</option>
                </select>
              </div>
            </div>

            {/* editior */}
            <div className="mt-8">
              <ReactQuill
              
                theme="snow"
                value={value}
                onChange={setValue}
                placeholder="Write Your Blog here...."
                modules={{
                  toolbar: [
                    [{ header: "1" }, { header: "2" }, { font: [] }],
                    [{ list: "ordered" }, { list: "bullet" }],
                    ["bold", "italic", "underline"],
                    ["link", "image", "video"],
                  ],
                }}
                />
            </div>

            {/* inputs for blog */}
            <div  className="flex justify-between items-center mt-4">
              {/* author Name */}
              <div>
                <label htmlFor="authorName" className=" text-xl font-semibold"> Author Name :- </label>
                <input
                value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  type="text"
                  id="title"
                  placeholder="jone Dow"
                  className=" border-b outline-none rounded-md p-1 text-xl font-semibold border-black"
                />
              </div>

              {/*  Thumbnail*/}
              <div>
                <label htmlFor="authorImg"  className=" text-xl font-semibold"> Blog Thumbnail :- </label>
                <input
                  type="file"
                  name=""
                  id="authorImg"
                  onChange={convertImgUrl}
                  className="  outline-none rounded-md p-1 font-semibold border-black"
                />
              </div>
            </div>
          </div>

          {/* buttons for back to home  */}
          <p className=" text-right mt-4 py-4 flex justify-between ">
            <Link to={"/"}>
              {" "}
              <button className=" border py-1 px-2 rounded  bg-[#46BCAF] font-semibold text-white">
                {" "}
                BACK TO MAIN PAGE
              </button>
            </Link>
            <button
              className=" border py-1 px-2 rounded  bg-[#46BCAF] font-semibold text-white"
              onClick={()=>handleAdd()}
            >
              {" "}
              ADD BLOG
            </button>
          </p>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default EditorPage;
