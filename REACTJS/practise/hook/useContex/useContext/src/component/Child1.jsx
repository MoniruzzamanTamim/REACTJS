import React, { useContext } from "react";
import UserContext from "./UserContext";

const Child1 = () => {
  const data = useContext(UserContext);

  return (
    <div>
      <h3>Child Component</h3>
      <p>Name: {data.name}</p>
      <p>Phone: {data.phone}</p>
    </div>
  );
};

export default Child1;
