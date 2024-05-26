import React, { useContext, useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { v4 as uuidv4 } from "uuid";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BlogContext } from "./../context/BlogContext";
import Header from "../components/header/Header";
import ContentWrapper from "../components/ContentWrapper/ContentWrapper";

const EditorPage = () => {
  const { addPost, editPost } = useContext(BlogContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [post, setPost] = useState({
    id: uuidv4(),
    value: "",
    title: "",
    category: "",
    imgUrl: "",
    authorName: "",
    date: new Date(),
  });

  const [errors, setErrors] = useState({
    title: "",
    category: "",
    authorName: "",
    imgUrl: "",
    value: "",
  });

  useEffect(() => {
    if (location.state && location.state.post) {
      setPost(location.state.post);
    }
  }, [location.state]);

  const formatDate = (date) => {
    const d = new Date(date);
    const formattedDate = d.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    return formattedDate;
  };

  const convertImgUrl = (e) => {
    const file = e.target.files[0];
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "shubhamVizmp");
    data.append("cloud_name", "dx45qjfww");

    fetch('https://api.cloudinary.com/v1_1/dx45qjfww/image/upload', {
      method: "post",
      body: data
    })
      .then((res) => res.json())
      .then((result) => {
        setPost((prevPost) => ({
          ...prevPost,
          imgUrl: result.url
        }));
      })
      .catch((error) => {
        console.error("Error uploading image: ", error);
      });
  };

  const validateFields = () => {
    const newErrors = {
      title: post.title ? "" : "Title is required",
      category: post.category ? "" : "Category is required",
      authorName: post.authorName ? "" : "Author Name is required",
      imgUrl: post.imgUrl ? "" : "Image is required",
      value: post.value ? "" : "Content is required",
    };
    setErrors(newErrors);

    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleAdd = () => {
    if (validateFields()) {
      const newData = {
        ...post,
        id: uuidv4(),
        date: formatDate(new Date()),
      };
      addPost(newData);

      setPost({
        id: uuidv4(),
        value: "",
        title: "",
        category: "",
        imgUrl: "",
        authorName: "",
        date: new Date(),
      });

      navigate("/");
    }
  };

  const handleEdit = () => {
    if (validateFields()) {
      const updatedPost = {
        ...post,
        date: formatDate(new Date()),
      };
      editPost(updatedPost);

      setPost({
        id: uuidv4(),
        value: "",
        title: "",
        category: "",
        imgUrl: "",
        authorName: "",
        date: new Date(),
      });

      navigate("/");
    }
  };

  return (
    <div>
      <Header />
      <ContentWrapper>
        <div className="max-w-3xl mx-auto mt-8 p-4 border-2 border-black rounded bg-white">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-3/5">
              <label htmlFor="title" className="block text-lg font-semibold">
                Blog Title:
              </label>
              <input
                type="text"
                id="title"
                value={post.title}
                onChange={(e) =>
                  setPost((prevPost) => ({
                    ...prevPost,
                    title: e.target.value,
                  }))
                }
                placeholder="Blog Title"
                className="border-b outline-none rounded-md p-2 text-lg font-medium border-black w-full"
              />
              {errors.title && (
                <span className="text-red-500">{errors.title}</span>
              )}
              <div className="mt-4">
                <ReactQuill
                  theme="snow"
                  value={post.value}
                  onChange={(value) =>
                    setPost((prevPost) => ({ ...prevPost, value }))
                  }
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
                {errors.value && (
                  <span className="text-red-500">{errors.value}</span>
                )}
              </div>
            </div>
            <div className="md:w-2/5">
              <label htmlFor="category" className="block text-lg font-semibold">
                Category:
              </label>
              <select
                value={post.category}
                onChange={(e) =>
                  setPost((prevPost) => ({
                    ...prevPost,
                    category: e.target.value,
                  }))
                }
                className="border-b outline-none rounded-md p-2 text-lg font-medium border-black w-full"
              >
                <option value="">Select Category</option>
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
              {errors.category && (
                <span className="text-red-500">{errors.category}</span>
              )}
              <label
                htmlFor="authorName"
                className="block mt-4 text-lg font-semibold"
              >
                Author Name:
              </label>
              <input
                type="text"
                id="authorName"
                value={post.authorName}
                onChange={(e) =>
                  setPost((prevPost) => ({
                    ...prevPost,
                    authorName: e.target.value,
                  }))
                }
                placeholder="Author Name"
                className="border-b outline-none rounded-md p-2 text-lg font-medium border-black w-full"
              />
              {errors.authorName && (
                <span className="text-red-500">{errors.authorName}</span>
              )}
              <label
                htmlFor="authorImg"
                className="block mt-4 text-lg font-semibold"
              >
                Blog Thumbnail:
              </label>
              <input
                type="file"
                id="authorImg"
                onChange={convertImgUrl}
                className="outline-none rounded-md p-2 font-medium border-black w-full"
                accept="image/*"
              />
              {errors.imgUrl && (
                <span className="text-red-500">{errors.imgUrl}</span>
              )}
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <Link to={"/"}>
              <button className="border py-2 px-4 rounded bg-[#46BCAF] font-semibold text-white">
                BACK TO MAIN PAGE
              </button>
            </Link>
            {location.state && location.state.post ? (
              <button
                className="ml-4 border py-2 px-4 rounded bg-[#46BCAF] font-semibold text-white"
                onClick={handleEdit}
              >
                UPDATE BLOG
              </button>
            ) : (
              <button
                className="ml-4 border py-2 px-4 rounded bg-[#46BCAF] font-semibold text-white"
                onClick={handleAdd}
              >
                ADD BLOG
              </button>
            )}
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default EditorPage;
