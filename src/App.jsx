import Home from "./components/Home";
import About from "./components/About";
import Blogs from "./components/Blogs";
import NotFound from "./components/NotFound";
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navber from "./components/Navber";
import Detail from "./components/Detail";

function App() {
  return (
    <BrowserRouter>
      <Navber />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/blogs" element={<Blogs/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
          <Route path="/home" element={<Navigate to="/" />}></Route>
          <Route path="/info" element={<Navigate to="/about" />}></Route>
          <Route path="/blog/:id" element={<Detail/>} ></Route>
        </Routes>
    </BrowserRouter>

  );
}

export default App
