import React, { useEffect, useState } from 'react';
import { BlogsData } from './BlogData';
import { useParams } from 'react-router-dom';

function DetailsBlog() {
  const { title } = useParams();
  const [bodydata, setBodydata] = useState("");

  useEffect(() => {
    const bodyData = BlogsData.filter(
      (blogdata) =>
        blogdata.title.toLowerCase().replaceAll(" ", "-") === title
    );

    if (bodyData.length > 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setBodydata(bodyData[0].body);
    }
  }, [title]);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title} Value</h1>
      <p>{bodydata.slice(0, 500)}</p>
      <p>{bodydata.slice(501, 2000)}</p>
      <p>{bodydata.slice(2001, 5000)}</p>
    </div>
  );
}

export default DetailsBlog;
