import React, {useState} from 'react'
import { BlogsData } from './BlogData'
import { Link } from 'react-router-dom';




const Blogs = () => {

    const trancle=(str, num)=>{
        if(str.length > num){
            return str.slice(0, num) + " ... ";
        }else{
            return str;
            
        }
    }

    const [blogs, setBlogs]= useState(BlogsData);
    console.log(blogs);
  return (
 
    <>
    <h1 style={{textAlign: "center"}}>Blogs Page </h1>
    <section>
        {blogs.map((data)=>{
            const{id, title, body}=data
            return <article key={id}>
                <h1>{title}</h1>
                <p>{trancle(body, 100)}</p>
                <Link   to={title}>Learn More</Link>

            </article>
        })}
    </section>
    </>
  )
}

export default Blogs