import React from "react";
import { Link } from "react-router-dom";
import "./Navber.css";

const Navber = () => {
  return (
    <nav>
      <Link to="/" className="logo">
        <h3>Blog Application</h3>
      </Link>
      <Link to="/">หน้าแรก</Link>
      <Link to="/blogs">บทความทั้งหมด</Link>
      <Link to="/about">เกี่ยวกับเรา</Link>
    </nav>
  );
};

export default Navber;
