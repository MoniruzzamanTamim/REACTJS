import React, {useState, useRef,useEffect} from 'react'
import ChildComponent from './ChildComponent'
import DataShow from './DataShow'

const ParentComponent = () => {
    const userInfo = useRef()
    const [userData, setUserData]= useState({})
    const [userDatas, setUserDatas]= useState([])
    
    const handleforwadref=(e)=>{
        e.preventDefault();
        const userinfo = userInfo.current.value;
        setUserData((olduserinfo)=>{
             return{ ...olduserinfo ,  userinfo }
        });
    }
const userDatamarge =userData.userinfo

   useEffect(()=>{
    setUserDatas((oldData)=>{
        return [...oldData , {userDatamarge}]
    })
      
   },[userData])

  return (
    <div>
        <ChildComponent ref={userInfo} placeholder ="Hello" />
       <DataShow userData={userDatas}/> 
        <button type='submit' onClick={handleforwadref}>Submit Forwardref</button>
    </div>
  )
}

export default ParentComponent