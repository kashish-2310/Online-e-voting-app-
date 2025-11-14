import React from 'react'
import logo  from '../../../assets/images/logo.png'
export default function Header() {
  return (
    <div>
      <div className="header">
        <div className="header-logo">
            <img src={logo} alt="" />

        </div>
        <div className="navbar"></div>
        <ul>
            <li><a href="/">home</a></li>
            <li><a href="/">about</a></li>
            <li><a href="/">contact</a></li>
        </ul>
      </div>
    </div>
  )
}
