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
   
  
  </div>
)

export default Header
