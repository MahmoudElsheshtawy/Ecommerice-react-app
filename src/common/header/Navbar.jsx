import React, { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  // Toogle Menu
  // const [MobileMenu, setMobileMenu] = useState(false)
  const [nav ,setNav]=useState(false)
  return (
    <>
      <header className='header'>
      {/* d_flex */}
        <div className='container '>
        {/* d_flex */}
          <div className='catgrories '>
            <span className='fa-solid fa-border-all'></span>
            <h4>
              Categories <i className='fa fa-chevron-down'></i>
            </h4>
          </div>

          <div >
            {/* <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}> */}
             
             <ul className={nav ?"navlink active" :"navlink"}onClick={()=>setNav(!nav)}>
             
              {/* <ul className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'> */}
              <li>
                <Link to='/'>home</Link>
              </li>
              <li>
                <Link to='/pages'>pages</Link>
              </li>
              <li>
                <Link to='/user'>user </Link>
              </li>
              <li>
                <Link to='/vendor'>vendor </Link>
              </li>
              <li>
                <Link to='/track'>track </Link>
              </li>
              <li>
                <Link to='/contact'>contact</Link>
              </li>
            </ul>
      {/* button 
       onClick={() => setMobileMenu(!MobileMenu)}
        */}
        {/* MobileMenu */}
            <button className='toggle' onClick={()=>setNav(!nav)}>
              { nav ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
