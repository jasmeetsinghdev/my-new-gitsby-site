// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout/Layout'; 
import { StaticImage } from 'gatsby-plugin-image'
import Banners from '../components/layout/Banners';
import { container } from '../components/layout/global.module.css'
import Seo from '../components/seo'
import { graphql } from 'gatsby'

// Step 2: Define your component
const Blog = ({ data }) => {
  return (
  <Layout>
    <Banners
      leftSlot= {        
        <div><h2>This is Blog Page Banner</h2><p>Lorem ipsum dolor sit amet dummy text</p></div>
      }

      rightSlot= {
        <div>
          <StaticImage alt="" src="../images/services-banner.jpg" />
        </div>
      }
        
    />

    <div className={container}>
      <h1>Main content of Blog</h1>
    </div>

    <ul>
      {
        data.allFile.nodes.map(node => (
          <li key={node.name}>
            {node.name}
          </li>
        ))
      }
    </ul>

   
  </Layout>

  )
}



export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`

// You'll learn about this in the next task, just copy it for now

export const Head = () => <Seo title="My Blog Posts" />

// Step 3: Export your component
export default Blog;