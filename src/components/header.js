import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (


  <div className="grid-x grid-padding-x header">
  {/* Left side topbar */}
   <div className="topBar cell small-12">
    <div className="grid-x">
  
    <div className="topBar_left cell small-6">
    <div
    className="topBar__logo"
    >
    </div>
    </div>
    {/* Right side topbar */}
    <div
    className="topBar_right cell small-6"
    >
    {/* Menu */}
    <ul className="menu">
     <li className="menu__link">Our Solution</li>
     <li className="menu__link">Roadmap</li>
     <li className="menu__link">API</li>
     <li className="menu__link">FAQ</li>
     <li className="menu__link"><button className="button_empty">Contact Sales</button></li>
    </ul>
    </div>
    </div>
   </div>

   {/* Main Title and Buttons */}
   <div className="header_main cell small-12 text-center">
    <h1 className="header_main__title text-center">Automation for blockchains</h1>
    <h6 className="header_main__tagline">Thinblock connects blockchain platforms with third-party services to help you build smart applications.</h6>

   </div>
   
  
  </div>
)

export default Header
