import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import "./layout.css"



const Footer = () => {
  return (
    <footer
    style={{
      marginTop: `var(--space-5)`,
      fontSize: `var(--font-sm)`,
    }}
  >
    © {new Date().getFullYear()} &middot; 
    {` `}
    <a href="https://www.patrimonionacional.es/">Patrimonio Nacional</a>

   

<a className='a' href="#">Aviso Legal</a>
<a className='a' href="#">Accesibilidad</a>
<a className='a' href="#">Política de Privacidad</a>
<a className='a' href="#">Política de cookies</a>

<br></br>

<StaticImage
  src="../images/patrimonio.jpg"
  loading="eager"
  width={64}
  quality={95}
  formats={["auto", "webp", "avif"]}
  alt=""
  style={{ marginBottom: `var(--space-3)` }}
/>

  </footer>
  );
};

export default Footer;

