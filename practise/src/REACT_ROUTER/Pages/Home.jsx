import React from 'react'
import logo from './Header-Fotter/PIC.png'

const Home = () => {
  return (
    <>
    <div className="banner-section">   </div>

    <div className="service-section">
         <div className="service-title">
          <h3>Service</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam velit soluta consectetur vel est nihil, error quia quo, sequi accusantium debitis cum. Voluptas, alias nisi accusamus harum, beatae quae consequuntur est ex eos ut eum, veniam velit eveniet! Tempora aliquid asperiores eius amet praesentium distinctio provident nobis excepturi? Nesciunt nihil adipisci sed in qui voluptas placeat, similique fuga labore vero!</p>
         </div>

         <div className="service-items">
          <div className="service-item">
            <img src={logo} alt="" srcset="" />
            <h1>HTML</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto reiciendis dolorem hic debitis earum sit sed dolorum ipsam at culpa.</p>
          </div>
          <div className="service-item">
            <img src={logo} alt="" srcset="" />
            <h1>CSS</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto reiciendis dolorem hic debitis earum sit sed dolorum ipsam at culpa.</p>
          </div>
          <div className="service-item">
            <img src={logo} alt="" srcset="" />
            <h1>REACT</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto reiciendis dolorem hic debitis earum sit sed dolorum ipsam at culpa.</p>
          </div>
         </div>
    </div>

    </>
  )
}

export default Home