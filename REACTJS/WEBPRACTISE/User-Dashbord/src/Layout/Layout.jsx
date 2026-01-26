import React from 'react'
import Header from '../Components/HeaderFooter/Header'
import Footer from '../Components/HeaderFooter/Footer'

function Layout({children}) {
  return (
 <>
 <Header/>
  {children}
  <Footer/>
 </>
  )
}

export default Layout