import React,{useState, useEffect} from 'react'
import style from './users.module.css'

const SearchUserDAta = (props) => {

    const [searchvallue, setSearchVallue]=useState()

    const HandleSearch = (e)=>{
      const  vallue = e.target.value;
      setSearchVallue(vallue);
     
    }


    useEffect(()=>{
     props.searchVallue(searchvallue)
    }, [searchvallue])

   return (
    <div className={style.searchdesign}>
        <label htmlFor="search">Search UserData: </label>
    <input type="text"  onChange={HandleSearch} />
    </div>
  )
}

export default SearchUserDAta