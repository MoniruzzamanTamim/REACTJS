import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../Pages/Home';
import Contact from '../Pages/Contact';
import About from '../Pages/About';
import Error from '../Pages/Error';
import Header from '../Pages/Header-Fotter/Header';
import Footer from '../Pages/Header-Fotter/Footer';
import Blogs from '../Pages/BlogsPage/Blogs';
import Blog from '../Pages/BlogsPage/Blog';



const path = () => {

  return (
  

<BrowserRouter>
<Header/>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/*' element={<Error/>} />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/blogs/:path' element={<Blog/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>


        
          
 
  )
}

export default path