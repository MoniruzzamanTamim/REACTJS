import React from 'react';
import { BlogsData } from './BlogData';
import { Link } from 'react-router-dom';

function Blog() {

  const trancle = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + " ... ";
    } else {
      return str;
    }
  };

  return (
    <>
      {BlogsData.map((blog) => {
        const { id, title, body } = blog;
        const slug = title.toLowerCase().replaceAll(" ", "-");

        return (
          <div key={id}>
            <h1>{id}</h1>
            <h2>{title}</h2>
            <h4>{trancle(body, 100)}</h4>
            <h4>{body.slice(0, 150)}</h4>

            <Link to={`/blog/${slug}`}>Learn More</Link>
          </div>
        );
      })}
    </>
  );
}

export default Blog;
