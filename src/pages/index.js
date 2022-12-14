// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout/Layout'; 
import { StaticImage } from 'gatsby-plugin-image'
import Banners from '../components/layout/Banners';
import { container } from '../components/layout/global.module.css'
import Seo from '../components/seo'

// Step 2: Define your component
const Index = () => (
  <Layout>

    <Banners
      leftSlot= {        
        <div><h2>This is homepage banner</h2><p>Lorem ipsum dolor sit amet dummy text</p></div>
      }

      rightSlot= {
        <div>
          <StaticImage alt="" src="../images/services-banner.jpg" />
        </div>
      }
        
    />

    <div className={container}>
      <h1>Main content of Homepage</h1>
    </div>
  </Layout>
);



// You'll learn about this in the next task, just copy it for now

export const Head = () => <Seo title="Home Page" />

// Step 3: Export your component
export default Index;