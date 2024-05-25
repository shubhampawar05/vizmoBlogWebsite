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
    let month = d.getMonth() + 1; // Months are zero based
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
    console.log("inside handle add");
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
  console.log(post);

  useEffect(() => {
    const savedPosts = localStorage.getItem("localData");
    if (savedPosts) {
      setPost(JSON.parse(savedPosts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("localData", JSON.stringify(post));
  }, [post]);

  return (
    <div>
      <Header />
      <ContentWrapper>
        <div className=" w-full px-12 py-4 relative">
          <div>
            <div>
              <div>
                <label htmlFor="title"> Blog Title :- </label>
                <input
                value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  id="title"
                  placeholder="Blog Title"
                />
              </div>
              <div>
                <label htmlFor="category"> Choose Your Category </label>
                <select
                  name=""
                  value={category}
                  id=""
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="Space">Space</option>
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
            <div>
              <div>
                <label htmlFor="authorName"> Author Name :- </label>
                <input
                value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  type="text"
                  id="title"
                  placeholder="jone Dow"
                />
              </div>
              <div>
                <label htmlFor="authorImg"> Blog Title :- </label>
                <input
                  type="file"
                  name=""
                  id="authorImg"
                  onChange={convertImgUrl}
                />
              </div>
            </div>
          </div>
          <p className=" text-right py-4 flex justify-between ">
            <Link to={"/"}>
              {" "}
              <button className=" border p-1 rounded  bg-[#46BCAF] font-semibold text-white">
                {" "}
                BACK TO MAIN PAGE
              </button>
            </Link>
            <button
              className=" border p-1 rounded  bg-[#46BCAF] font-semibold text-white"
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
