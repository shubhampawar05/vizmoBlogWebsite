import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useParams, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import Header from "../components/header/Header";
import ContentWrapper from "../components/ContentWrapper/ContentWrapper";

const EditPage = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const [post, setPost] = useState({
    id: "",
    value: "",
    title: "",
    category: "",
    imgUrl: "",
    authorName: "",
    date: "",
  });

  useEffect(() => {
    // Fetch the blog post data based on the ID from local storage or API
    const savedPosts = JSON.parse(localStorage.getItem("localData")) || [];
    const postData = savedPosts.find((item) => item.id === id);
    if (postData) {
      setPost(postData);
    }
  }, [id]);

  const handleUpdate = () => {
    const updatedPost = { ...post, date: formatDate(new Date()) };
    const savedPosts = JSON.parse(localStorage.getItem("localData")) || [];
    const updatedPosts = savedPosts.map((item) =>
      item.id === updatedPost.id ? updatedPost : item
    );
    localStorage.setItem("localData", JSON.stringify(updatedPosts));
    navigate('/')
  };

  const formatDate = (date) => {
    const d = new Date(date);
    let day = d.getDate();
    let month = d.getMonth() + 1;
    const year = d.getFullYear();

    if (day < 10) {
      day = "0" + day;
    }
    if (month < 10) {
      month = "0" + month;
    }
    return `${day}/${month}/${year}`;
  };

  const handleChange = (value) => {
    setPost({ ...post, value });
  };

  return (
    <div>
      <Header />
      <ContentWrapper>
        <div className="max-w-4xl mx-auto mt-8 p-4">
          <h1 className="text-3xl font-bold mb-4">Edit Blog</h1>
          <div className="mb-4">
            <label htmlFor="title" className="block text-lg font-semibold">
              Blog Title:
            </label>
            <input
              type="text"
              id="title"
              value={post.title}
              onChange={(e) => setPost({ ...post, title: e.target.value })}
              className="w-full border-2 border-gray-300 rounded-md p-2 mt-1"
              placeholder="Enter blog title"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block text-lg font-semibold">
              Category:
            </label>
            <input
              type="text"
              id="category"
              value={post.category}
              onChange={(e) => setPost({ ...post, category: e.target.value })}
              className="w-full border-2 border-gray-300 rounded-md p-2 mt-1"
              placeholder="Enter category"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="authorName" className="block text-lg font-semibold">
              Author Name:
            </label>
            <input
              type="text"
              id="authorName"
              value={post.authorName}
              onChange={(e) => setPost({ ...post, authorName: e.target.value })}
              className="w-full border-2 border-gray-300 rounded-md p-2 mt-1"
              placeholder="Enter author name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="imgUrl" className="block text-lg font-semibold">
              Blog Image URL:
            </label>
            <input
              type="text"
              id="imgUrl"
              value={post.imgUrl}
              onChange={(e) => setPost({ ...post, imgUrl: e.target.value })}
              className="w-full border-2 border-gray-300 rounded-md p-2 mt-1"
              placeholder="Enter blog image URL"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-semibold">Blog Content:</label>
            <ReactQuill
              theme="snow"
              value={post.value}
              onChange={handleChange}
              className="border-2 border-gray-300 rounded-md mt-1"
              placeholder="Write your blog content here..."
            />
          </div>
          <div className="flex justify-end">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md font-semibold"
              onClick={handleUpdate}
            >
              Update Blog
            </button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default EditPage;
