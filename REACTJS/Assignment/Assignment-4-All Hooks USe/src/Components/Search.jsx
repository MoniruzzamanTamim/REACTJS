import React,{useContext, useState, useEffect} from 'react'
import ContextApi from './ContextApi'

const Search = () => {
    const {dispatch}=useContext(ContextApi);


 
const HandleSearch =(e)=>{
    
    dispatch({type: "TEST", payload: e.target.value})
}





  return (
    <div>
        <input type="text" name="search" id=""  onChange={HandleSearch}/>
    </div>
  )
}

export default Search