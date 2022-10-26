// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout/Layout'; 
import { StaticImage } from 'gatsby-plugin-image'
import Banners from '../components/layout/Banners';
import Seo from '../components/seo'

// Step 2: Define your component
const AboutPage = () => (
  <Layout>

    <Banners
      leftSlot= {        
        <div><h2>This is About Us page Banner</h2><p>Lorem ipsum dolor sit amet dummy text</p></div>
      }

      rightSlot= {
        <div>
          <StaticImage alt="" src="../images/Banner-about-us.jpg" />
        </div>
      }
        
    />

    
    <h1>Welcome to Iron service global About Us Page.</h1>
  </Layout>
);

export const Head = () => <Seo title="About Page" />

// Step 3: Export your component
export default AboutPage