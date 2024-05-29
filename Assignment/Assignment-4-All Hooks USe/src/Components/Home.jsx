import { useState, useReducer } from 'react';
import ContextApi from './ContextApi';
import Users from './Users';
import NewUser from './NewUser';
import { v4 as uuidv4 } from 'uuid';
import Search from './Search';




const userData = [
 { Roll: 1,
  Name: "Tamim",
  Address: "Rangpur"},
{ Roll: 2,
    Name: "Iqbal",
    Address: "Rangpur"},
{ Roll: 3,
      Name: "Jibin",
      Address: "Rangpur"},
{ Roll: 4,
        Name: "Moniruzzaman",
        Address: "Rangpur"},
]

const reducerFunction =(state, action)=>{

  switch (action.type) {
    case "ADD":
      return{
        ...state,
           UserData: [...state.UserData, action.payload],
           
      }
      case "REMOVE":
        const REmoveUSer = state.UserData.filter((data)=> data.Roll !== action.payload)
      return{
        ...state,
      UserData: REmoveUSer,
      }

      case "TEST":
        const SearchData = state.UserData.filter((searchData)=> searchData.Name.toLowerCase().includes(action.payload.toLowerCase()) )
        console.log(action.payload);
        return{
          ...state,
          UserData: SearchData
        }
     
      
 
    default:
      break;
  }

}

const Home = () => {

const [UserInfo, dispatch] = useReducer(reducerFunction,{

    UserData: userData,
    error: " "
 
   
} )


  return (
    <ContextApi.Provider value={{UserInfo, dispatch}}>
      <NewUser  /> 
      <Search/>
      <Users />
    </ContextApi.Provider>
   
  )
}

export default Home