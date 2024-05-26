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
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPost((prevPost) => ({
          ...prevPost,
          imgUrl: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please upload a valid image file.");
    }
  };

  const handleAdd = () => {
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
  };

  const handleEdit = () => {
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
              </div>
            </div>
            <div className="md:w-2/5">
              <label
                htmlFor="category"
                className="block text-lg font-semibold"
              >
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
