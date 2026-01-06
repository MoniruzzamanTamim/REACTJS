import React, { useState } from "react";
import User from "./user";

const Users = () => {
  const [user, setUser] = useState({
    id: 1302020017,
    name: "TAmim",
  });

  const [userName, setUserName] = useState(20);
  const [rollNumber, setRollNumber] = useState();

  return (
    <>
      <User user={user}  username={userName} rollNumber ={rollNumber}/>
    </>
  );
};

export default Users;