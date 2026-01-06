import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { blogData } from './BlosData'



const Blog = () => {
  const [bodyData, setBodyData]= useState("")
    const {path}= useParams();

    useEffect(()=>{

      const blogsdata = blogData.filter((blogdata)=> blogdata.title == path)
          setBodyData(blogsdata[0].body)
    }, [])

  return (
    <div>
      <h1>{path}</h1>
      <p>{bodyData.slice(0, 1000)}</p>
      <p>{bodyData.slice(1001, 3000)}</p>
    </div>
  )
}

export default Blog