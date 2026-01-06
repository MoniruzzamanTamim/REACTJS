import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { BlogsData } from './BlogData'


const blog = () => {
    const [bodydata, setBodydata]=useState("")
    useEffect(()=>{
     const bodyData =  BlogsData.filter((blogdata)=> blogdata.title == title)
     setBodydata(bodyData[0].body)

    }, [])

    

    const {title} = useParams();
    console.log(title);
  return (
    <div>
        <h1 style={{textAlign: "center"}}> {title} Value </h1>
        <p>{bodydata.slice(0, 500)}</p>
        <p>{bodydata.slice(501, 2000)}</p>
        <p>{bodydata.slice(2001, 5000)}</p>
        <p></p>
    </div>
  )
}

export default blog