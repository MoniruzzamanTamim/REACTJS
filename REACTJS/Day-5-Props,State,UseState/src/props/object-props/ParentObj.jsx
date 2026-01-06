import React from 'react'
import Child from './Child'
import Child2 from './Child2';
import Child3 from './Child3';
import Child4 from './Child4';


function ParentObj() {

const userData = {
    name: 'Jane Doe',
    age: 30,
    isActive: true,
};

const user = {
  username: "admin",
  isLoggedIn: false,
};
const employee = {
  name: "Karim",
  salary: 25000,
  address: {
    city: "Dhaka",
    country: "Bangladesh",
  },
};
const profile = {
  name: "Ayesha",
  showMessage: (name) => {
    alert(`"Hello from Parent, Name:", ${name}`);
  },
};
const status = {
  isActive: true,
};


  return (
   <>
   <h1>Object Props to Sent Obj Data parent to Child</h1>
   <Child userData ={userData}/>
   <Child2 user={user}/>
   <Child3 employee={employee}/>
   <Child4 profile={profile} status={status}/>
`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           `
   </>
  )
}

export default ParentObj