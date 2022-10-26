import React from 'react';
import { Link } from 'gatsby'
import { footerCopyright, copyrightInner, footerInner, footerInfo, footerLinksBlock } from './footer.module.css'
import { container } from './global.module.css'

const Footer = () => (
  <footer>
    <div className={container}>
      <div className={footerInner}>
        <div className={footerInfo}>
          <h4>About Service Global</h4>
          <p>Iron Service Global is a leading provider of integrated information technology solutions and last-mile supply chain services to the global Data Center, Edge Computing, Telecom and IoT Infrastructure and adjacent industries.</p>
          <p>Focused on enabling end-to-end last-mile global commerce, we provide highly scalable solutions to our customers in more than 100 countries around the world, serving over 900 metros and 100,000 business locations as well as most IT infrastructure manufacturer & software vendors.</p>
        </div>

        <div className={footerLinksBlock}>
          <h4>Additional Links</h4>
          <ul>
            <li><Link to="../">Home</Link></li>
            <li><Link to="../recruitment">Recruitment</Link></li>
            <li><Link to="../about">About</Link></li>
          </ul>
        </div>

        <div className={footerLinksBlock}>
          <h4>Get In Touch</h4>
          <ul>
            <li>Service Global, Inc 980 Mission Court Fremont, CA 94539 USA</li>
            <li>408-943-8000</li>
            <li>info@serviceglobal.com</li>
          </ul>
        </div>

      </div>      
    </div>

    <div>
    <div className={footerCopyright}>
        <div className={container}>
          <div className={copyrightInner}>
            <ul>
              <li><Link to="../">Privacy Policy</Link></li>
              <li><Link to="../">Cookies Policy</Link></li>
              <li><Link to="../">Legal Policy</Link></li>
            </ul>
            <p>Copyright © 2022 Service Global, Inc. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
