import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setAllBlog } from "../../../config/HomeSlice";
import axios from "axios";
import { useEffect, useState } from "react";
import "../../../assets/style/Home.scss";
function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    axios("http://localhost:3000/blogs").then((res) => {
      console.log(res.data);
      dispatch(setAllBlog(res.data));
    });

  }, []);

  // HANDLE DELETE BTN
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/blogs/${id}`)
      .then(() => {
        axios("http://localhost:3000/blogs").then((res) => {
          dispatch(setAllBlog(res.data));
        });
      })
      .catch((error) => {
        // console.error("error",error);
      });
  };
    // HANDLE DELETE BTN


    // HANDLE EDIT BTN
    
    // HANDLE EDIT BTN

  const allBlog = useSelector((state) => state.blogs.blogs);

  return (
    <>
      <section className="myBlogs">
        <h1>My Blogs</h1>
      </section>
      <section className="allBlogs">
        <ul>
          {allBlog?.map((blog) => {
            return (
              <li>
                <div className="header">
                  <strong>
                    <em>Title-</em>
                  </strong>{" "}
                  {blog.title}
                </div>
                <div className="main">
                  <strong>
                    <em>Content- </em>
                  </strong>
                  {blog.content}
                </div>
                <button onClick={() => handleDelete(blog.id)}>Delete</button>
                <button>Edit</button>
              </li>
            );
          })}
        </ul>
      </section>
      <section className="addBtn">
        <Button className="add" variant="outlined">
          <Link to="/add" style={{ textDecoration: "none" }}>
            {" "}
            Add new one
          </Link>
        </Button>
      </section>
    </>
  );
}

export default Home;
