import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPostAsync } from "../store/postsSlice";
import { Navigate } from "react-router-dom";

function Posts() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);
  const username = useSelector((state) => state.auth.user?.username);
  const posts = useSelector((state) => state.posts);
  const userId = useSelector((state) => state.auth.user?.id);

  const handleAddPost = () => {
    const post = {
      title,
      content,
      username,
      userId,
    };
    dispatch(addPostAsync(post));
    setTitle("");
    setContent("");
  };
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  const style = {
    postsContainer: {
      fontFamily: "Helvetica, Arial, sans-serif",
      padding: "20px",
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "80vh",
      background: "grey",
    },
    sectionTitle: {
      fontSize: "24px",
      marginBottom: "20px",
      color: "white",
      textTransform: "uppercase",
    },
    inputContainer: {
      display: "flex",
      flexDirection: "column",
      marginBottom: "20px",
      width: "550px",
      margin: "0 auto",
    },
    postInput: {
      padding: "10px",
      marginBottom: "10px",
      border: "1px solid",
      borderRadius: "4px",
      fontSize: "16px",
    },
    addButton: {
      backgroundColor: "black",
      color: "white",
      border: "none",
      padding: "5px 10px",
      cursor: "pointer",
      position: "absolute",
      bottom: "10px",
      left: "50%",
      transform: "translateX(-50%)",
    },
    postList: {
      listStyle: "none",
      padding: "0",
      marginBottom: "0",
    },
    postItem: {
      marginBottom: "20px",
      padding: "20px",
      border: "1px solid",
      borderRadius: "4px",
      background: "white",
      width: "500px",
      margin: "0 auto",
    },
    postTitle: {
      fontSize: "20px",
      marginBottom: "10px",
      color: "black",
      fontWeight: "bold",
      width: "300px",
      margin: "0 auto",
      overflowWrap: "break-word",
    },
    postContent: {
      fontSize: "16px",
      marginBottom: "10px",
      color: "black",
      width: "300px",
      margin: "0 auto",
      overflowWrap: "break-word",
    },
    postAuthor: {
      fontSize: "14px",
      color: "black",
    },
  };

  return (
    <div style={style.postsContainer}>
      <h2 style={style.sectionTitle}>Add post</h2>
      <div style={style.inputContainer}>
        <input
          type="text"
          style={style.postInput}
          placeholder="Heading"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          style={style.postInput}
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button style={style.addButton} onClick={handleAddPost}>
          Add
        </button>
      </div>

      <h2 style={style.sectionTitle}>List of posts</h2>
      {posts.length > 0 ? (
        <ul style={style.postList}>
          {posts.map((post) => (
            <li key={post.id} style={style.postItem}>
              <h3 style={style.postTitle}>{post.title}</h3>
              <p style={style.postContent}>{post.content}</p>
              <p style={style.postAuthor}>Author: {post.username}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>There are no posts</p>
      )}
    </div>
  );
}

export default Posts;
