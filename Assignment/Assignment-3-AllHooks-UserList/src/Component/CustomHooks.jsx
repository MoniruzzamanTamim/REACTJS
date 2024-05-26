import React, {useEffect,useReducer,useState,useRef} from 'react'
import { initialState, reducerFunction } from './Reducer';




const customhooks = (url) => {

 const [userList, dispatch]=useReducer(reducerFunction, initialState )


    useEffect(()=>{
        fetch(url)
        .then((res)=>{
           return res.json();
        })
        .then((data)=>{
           dispatch({type: "RES", payload: data });
        
        })
        .catch((error)=>{
            dispatch({type: "FIELD"});
        })

    },[])

  return  {userList,dispatch, }
}

export default customhooks