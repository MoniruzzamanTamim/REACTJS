import React,{useContext} from 'react'
 import Context from './Context'
const ChildComponent4 = () => {

    const userInfo = useContext(Context);

    const {userData, location} =userInfo;
    const {id, name}= userData;

  return (
    <div>
        <h3>This is ChildComponent 4</h3>
        <h4>Receive Data Throw UseContext</h4>
       
          
          <span>
            <li>ID: {id} </li>
            <li>NAME: {name}</li>
            <li>LOCATION:{location}</li>
          </span>
       
    </div>
  )
}

export default ChildComponent4