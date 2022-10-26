import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { container } from './global.module.css'
import { headerInner, navLinkItem, navLinks, activeNav } from './header.module.css'


const Header = () => (

    <header>
      <div className={container}>
        <div className={headerInner}>
            <Link to="/"><StaticImage alt="" src="../../images/ISG-gray-logo.png"/></Link>
            <nav>
              <ul className={navLinks}>
                  <li className={navLinkItem}><Link activeClassName={activeNav} to="../">Home</Link></li>
                  <li className={navLinkItem}><Link activeClassName={activeNav} to="../recruitment">Recruitment</Link></li>
                  <li className={navLinkItem}><Link activeClassName={activeNav} to="../about">About</Link></li>
                  <li className={navLinkItem}><Link activeClassName={activeNav} to="../blog">Blog</Link></li>
              </ul>
            </nav>
        </div>
      </div>
    </header>
  );
  
  export default Header;
  