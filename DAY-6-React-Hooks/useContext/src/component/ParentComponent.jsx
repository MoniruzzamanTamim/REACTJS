import React, {useState} from 'react'
import ChildComponent2 from './ChildComponent2'
import Context from './Context'



const ParentComponent = () => {

    const [userData, setUserData]= useState({
        id: 15 , name: "Tamim",
    })
    const [location, setLocation]= useState("Plashbari ")
  return (
    <>
        
        <h3>This is Parent Component</h3>
        <br />
         <Context.Provider value ={{userData,location} }> 
          <ChildComponent2/>
        </Context.Provider>
    </>
  )
}

export default ParentComponent