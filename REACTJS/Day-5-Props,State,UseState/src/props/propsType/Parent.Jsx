import React, { useState } from "react";
import Child from "./Child";

function ParentPropsType() {
  const [user, setUser] = useState({
    name: "tamim",
    phone: 1739820399,
  });

  return (
    <>
      <Child user={user} title="String Value" />
    </>
  );
}

export default ParentPropsType;
