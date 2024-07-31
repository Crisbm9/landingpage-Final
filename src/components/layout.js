import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./header";
import Footer from "./footer";
import "./layout.css";
import Darkmode from "./darkmode";
import { FiSun, FiMoon } from "react-icons/fi";

const Layout = ({ children }) => {
  const [darkMode, setDarkmode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('darkMode');
      return savedTheme !== null ? JSON.parse(savedTheme) : false;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }
  }, [darkMode]);

  const handlerDarkMode = () => {
    setDarkmode(!darkMode);
  };

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <button onClick={handlerDarkMode} className="sol">
        {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
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
  );
};

export default Layout;


// import React,{ useState } from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import Header from "./header"
// import Footer from "./footer"
// import "./layout.css"
// import Darkmode from "./darkmode"
// import { FiSun, FiMoon } from "react-icons/fi";

// const Layout = ({ children }) => { 
// const [darkMode,setDarkmode]=useState(() => {
//   const savedTheme = localStorage.getItem('darkMode');
//   return savedTheme !== null ? JSON.parse(savedTheme) : false;  
// })

// localStorage.setItem('darkMode', JSON.stringify(darkMode));

// const handlerDarkMode=()=>{
//   setDarkmode(!darkMode)
// }
//   const data = useStaticQuery(graphql`
//     query SiteTitleQuery {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `)

//   return (
//     <>
//       <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
//       <button onClick={handlerDarkMode} className="sol">
//       {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
// </button>
// <Darkmode dark={darkMode}>
// <div
//         style={{
//           margin: `0 auto`,
//           maxWidth: `var(--size-content)`,
//           padding: `var(--size-gutter)`,
//         }}
//       >
//         <main>{children}</main>
        
//       </div>
// </Darkmode>
      
//       <Footer></Footer>
//     </>
//   )
// }

// export default Layout
