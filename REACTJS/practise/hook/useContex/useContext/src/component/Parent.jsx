import React, { useEffect } from "react";
import UserContext from "./UserContext";
import Child1 from "./Child1";
import Child3 from "./Child3";

const datas = {
  name: "Tamim",
  phone: "01739820399",
};

const Parent = () => {

  const ClickFunction = (phone) => {
    console.log("Clicked"+phone );
  };

  useEffect(() => {
    console.log("Parent mounted");
  }, []);

  return (
    <div>
      <h2>Parent Component</h2>

      <UserContext.Provider value={{datas, ClickFunction}}>
        <Child1 />
        <Child3 />
      </UserContext.Provider>
    </div>
  );
};

export default Parent;
