import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';
import ComponentThree from './ComponentThree';
import Blog from '../DynamicRoute/Blog';
import DetailsBlog from '../DynamicRoute/DetailsBlog';

const MainComponentOne = () => {
  return (
    <BrowserRouter>
      <h2>MainComponentOne</h2>

      <nav>
        <NavLink to="/">One</NavLink> |{" "}
        <NavLink to="/two">Two</NavLink> |{" "}
        <NavLink to="/three">Three</NavLink> |{" "}
        <NavLink to="/blog">Blog</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<ComponentOne />} />
        <Route path="/two" element={<ComponentTwo />} />
        <Route path="/three" element={<ComponentThree />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:title" element={<DetailsBlog />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainComponentOne;
