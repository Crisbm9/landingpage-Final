import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import "./footer.css"



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
    Patrimonio Nacional



<a className='a' href="#">Aviso Legal</a>
<a className='a' href="#">Accesibilidad</a>
<a className='a' href="#">Política de Privacidad</a>
<a className='a' href="#">Política de cookies</a>


<div className='footerfoto'>
<StaticImage
  src="../images/Logo_de_Patrimonio_Nacional.svg"
  loading="eager"
  width={150}
  quality={95}
  formats={["auto", "webp", "avif"]}
  alt=""
  style={{ marginBottom: `var(--space-3)` }}
/>
<StaticImage
  src="../images/logo-tandem.png"
  loading="eager"
  width={120}
  quality={95}
  formats={["auto", "webp", "avif"]}
  alt=""
  style={{ marginBottom: `var(--space-3)` }}
/>
</div>
  </footer>
  );
};

export default Footer;

