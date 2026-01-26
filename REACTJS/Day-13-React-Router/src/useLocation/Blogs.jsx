/* eslint-disable no-unused-vars */
import React,{useState} from 'react'
import { BlogsData } from './BlogsData'
import {Link} from 'react-router-dom'


const Blogs = () => {

    const [blogsdata, setBlogsdata] = useState(BlogsData)

    const trancate = (str, num) =>{
        if (str.length > num) {
            return str.slice(0,100) + '........';
        } else {
            return str ;
        }
    }

  return (
    <>
    <div>UseHiiks ( Blogs Page)</div>
    <section>
        {blogsdata.map((data)=>{
            const {id, title, body}= data
            return <article key={id}>
                <span>{id}</span>
                <h4>{title}</h4>
                <p>{trancate(body, 100)}</p>
                <Link   to={"hello"} state={{id, title, body}}  >Learn More</Link>
            </article>
        })}
    </section>
    </>
    
  )
}

export default Blogs