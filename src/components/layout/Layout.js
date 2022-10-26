import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { useStaticQuery, graphql } from 'gatsby'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)


    return (
      <>
        <Header />        
        <main className="text-gray-900">{children}</main>
        <h4>{data.site.siteMetadata.title}</h4>
        <Footer />
      </>
    );
  };
  
  export default Layout;