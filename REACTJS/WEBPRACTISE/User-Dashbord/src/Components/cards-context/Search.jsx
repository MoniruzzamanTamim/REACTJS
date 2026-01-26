import React,{useContext} from 'react'
import CardContex from './CardContex'

function Search() {

   const Data = useContext(CardContex)

  const {HandleSearch,search} = Data.SearchValue
  
  
  
  
  return (
   <>
   
   <input type="text" name="search" value={search} id=""  onChange={HandleSearch} />
   
   </>
  )
}

export default Search