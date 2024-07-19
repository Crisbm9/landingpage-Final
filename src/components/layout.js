

import React,{ useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

import Footer from "./footer"

import "./layout.css"

import Darkmode from "./darkmode"

const Layout = ({ children }) => { 
const [darkMode,setDarkmode]=useState(() => {
  const savedTheme = localStorage.getItem('darkMode');
  return savedTheme !== null ? JSON.parse(savedTheme) : false;  
})

localStorage.setItem('darkMode', JSON.stringify(darkMode));

const handlerDarkMode=()=>{
  setDarkmode(!darkMode)
}
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <button onClick={handlerDarkMode}>
  {darkMode?"claro":"oscuro"}
</button>
<Darkmode dark={darkMode}>
<div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
        
      </div>
</Darkmode>
      
      <Footer></Footer>
    </>
  )
}

export default Layout
