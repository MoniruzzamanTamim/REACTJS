import React,{useState} from 'react'
import { blogData } from './BlosData'
import { Link } from 'react-router-dom';


const Blogs = () => {
    const [blogsdata, setBlogsdata] = useState(blogData);

     const trancate=(str, num)=>{
        if (str.length > num) {
            return str.slice(0, 100) + "..."; 
        }else{
            return str;
        }
     }

  return (
    <div className='blog-page'>
        <h1>Blogs Page  </h1>
        <section className='blogs-design'>
        {blogsdata.map((blog)=> {
            const {id, title, body}= blog
            return <article key={id}>
                  <h3>{title}  </h3> 
                  <p> {trancate(body, 100)}</p>
                  <Link   to={title}>Learn More</Link>
                 
                  </article>
                  

        })}
    
        </section>
        
    </div>
  )
}

export default Blogs