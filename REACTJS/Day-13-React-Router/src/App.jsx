import { useState } from 'react'


import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './Pages/Home/Home'
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Header from './Pages/Header/Header';
import Blogs from './DynamicRouting/Blogs';
import Blog from './DynamicRouting/Blog';
import UseBlogs from './useLocation/Blogs';
import UseBlog from './useLocation/Blog';
import Users from './QueryRoute/Users';
import ProtectedVallue from './ProtectedRoute/ProtectedVallue';
import Proteced from './ProtectedRoute/Proteced';





function App() {

  const [isLogin, setIslogin]=useState(false)

  return (
    <>
    <BrowserRouter>
    <Header/>
    {/* Navlink  */}
    {isLogin? <button onClick={()=>setIslogin(!isLogin) }>Logout</button> : <button onClick={()=>setIslogin(!isLogin) }>LogIN</button> }

    <Routes>
        <Route path='/' element ={<Home/>} />
        <Route path='/home' element ={<Home/>} />
        <Route path='/about' element ={<About/>} />
        <Route path='/contact' element ={<Contact/>} />
        <Route path='/*' element ={<ErrorPage/>} />
        <Route path='/blogs' element ={<Blogs/>} />
        <Route path='/blogs/:title' element ={<Blog/>} />
        <Route path='/uselocation' element ={<UseBlogs/>} />
        <Route path='/uselocation/:title' element ={<UseBlog/>} />
        <Route path='/users' element ={<Users/>} />
        <Route path='/protecedvalue' element ={<Proteced isLogin={isLogin}>
                        <ProtectedVallue/>
        </Proteced>} />

        

      
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
