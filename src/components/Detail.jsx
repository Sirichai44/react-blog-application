import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import blogs from "../data/blogs";
import "./Detail.css";

const Detail = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  useEffect(() => {
    const result = blogs.find((item) => item.id === parseInt(id));
    // console.log(result);
    setTitle(result.title);
    setImage(result.image_url);
    setContent(result.content);
    setAuthor(result.author);
  }, []);
  
  return (
    <div className="container">
        <h2 className="title">บทความ : {title}</h2>
        <img src={image} alt={title} className="blog-img" />

        <div className="blog-detail">
            <strong>ผู้เขียน : {author}</strong>
            <p>{content}</p>
        </div>
    </div>
  );
};

export default Detail;
