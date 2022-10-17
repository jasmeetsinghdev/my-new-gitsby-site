import * as React from 'react'
import { Link } from 'gatsby'
import {
    mainWrap,
    container,
    heading,
    navLinks,
    navLinkItem,
    active
  } from './layout.module.css'  

const Layout = ({ pageTitle, children }) => {
  return (
   
      <div className={container}>
        <div className='header'>
        <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}><Link to="/" activeClassName="active">Home</Link></li>
            <li className={navLinkItem}><Link to="/about" activeClassName="active">About</Link></li>
          </ul>
        </nav>
        </div>
        <div className='banner'>
          
        </div>
        <main>
          <h1 className={heading}>{pageTitle}</h1>
          {children}
        </main>
      </div>
    
  )
}

export default Layout