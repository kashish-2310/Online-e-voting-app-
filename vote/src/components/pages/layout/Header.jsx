import React from 'react'
import logo  from '../../../assets/images/logo.png'
import {Link} from 'react-router-dom'
export default function Header() {
  return (
    <div>
      <div className="header">
        <div className="header-logo">
            <img src={logo} alt="" />

        </div>
        <div className="navbar"></div>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Blog">Blog</Link>
        
            
      </div>
    </div>
  )
}
