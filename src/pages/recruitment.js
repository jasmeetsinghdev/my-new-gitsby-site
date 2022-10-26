// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout/Layout'; 
import { StaticImage } from 'gatsby-plugin-image'
import Banners from '../components/layout/Banners';

// Step 2: Define your component
const RecruitmentPage = () => (
  <Layout>
    <Banners
      leftSlot= {        
        <div><h2>This is Recruitment page Banner</h2><p>Lorem ipsum dolor sit amet dummy text</p></div>
      }

      rightSlot= {
        <div>
          <StaticImage alt="" src="../images/recruitment-banner-1.jpg"/>
        </div>
      }
        
    />
    
    <h1>Welcome to Iron service global Recruitment Page.</h1>
  </Layout>
);

export const Head = () => (
  <>
    <title>About Service Global</title>
    <meta name="description" content="Iron Service Global website" />
  </>
)

// Step 3: Export your component
export default RecruitmentPage