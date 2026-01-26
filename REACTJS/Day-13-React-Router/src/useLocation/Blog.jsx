/* eslint-disable no-unused-vars */
import React from 'react'
import { useLocation } from 'react-router-dom'

const Blog = () => {
    const useLocatidon =useLocation()
    console.log(useLocatidon);
  return (
    <div>
        <h1>{useLocatidon.state.id}</h1>
        <h1>{useLocatidon.state.title}</h1>
        <p>{useLocatidon.state.body.slice(0,1500)}</p>
        <p>{useLocatidon.state.body.slice(1501 ,5000)}</p>
    </div>
  )
}

export default Blog