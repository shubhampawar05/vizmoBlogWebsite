import React, { createContext, useState, useEffect } from "react";

export const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const savedPosts = localStorage.getItem("localData");
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
  }, []);

  useEffect(() => {
    if (posts.length > 0) {
      localStorage.setItem("localData", JSON.stringify(posts));
    }
  }, [posts]);

  const addPost = (post) => {
    setPosts((prevPosts) => {
      const updatedPosts = [...prevPosts, post];
      localStorage.setItem("localData", JSON.stringify(updatedPosts));
      return updatedPosts;
    });
  };

  const deletePost = (id) => {
    setPosts((prevPosts) => {
      const updatedPosts = prevPosts.filter((post) => post.id !== id);
      localStorage.setItem("localData", JSON.stringify(updatedPosts));
      return updatedPosts;
    });
  };

  const editPost = (updatedPost) => {
    setPosts((prevPosts) => {
      const updatedPosts = prevPosts.map((post) =>
        post.id === updatedPost.id ? updatedPost : post
      );
      localStorage.setItem("localData", JSON.stringify(updatedPosts));
      return updatedPosts;
    });
  };

  return (
    <BlogContext.Provider value={{ posts, addPost, deletePost, editPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogProvider;
