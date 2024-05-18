import React,{useState} from 'react'
import UserInput from './userInput';
import Users from './users';
import { v4 as uuidv4 } from 'uuid';
import SearchUserDAta from './SearchUserDAta';


export const Home = () => {
    const [collectuserInput, setCollectuserinput]= useState([])

  
// Collect USer Data
    const userDataCollect = (userData)=>{
        setCollectuserinput((previData)=>{
            return [...previData,{ id :uuidv4() ,userData}]
        })
    };

    // Delete UserData
    const deleteData = (id)=>{
        const deletTodosData = collectuserInput.filter(dataDelete=>dataDelete.id !== id )
        setCollectuserinput(deletTodosData)
    }

    // Filter Data 

     const searchVallue =((searchData)=>{
        const data = collectuserInput.filter((filterdata)=>
            filterdata.userData.name.toLowerCase().includes(searchData.toLowerCase())
         )
         setCollectuserinput(data)
     })
    

  return (
    <div>
      
        <UserInput onDataCollect = {userDataCollect} />
        <SearchUserDAta searchVallue= {searchVallue}/>
        <Users userInput={collectuserInput} onDelete={deleteData} />
        
    </div>
  )
}

export default Home;
