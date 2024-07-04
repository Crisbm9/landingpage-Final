import React from "react";
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import "../components/layout.css"
import TandemButton from "../components/button/tandembutton";
import Pipiver from "../components/popover";


function Inicio(){
  const nombreUser =  localStorage.getItem('tndm_name')
  const email=localStorage.getItem('tndm_email')
  return(
<Layout>
  <div className="qrinicio">
    <h1>GENERADOR DE QR</h1>
  <StaticImage
        src="../images/qr-code.png"
        loading="eager"
        width={180}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <br></br>
      <p>¡Bienvenido {localStorage.getItem('tandem_nombre')}!</p>
      <Pipiver></Pipiver>

      
    <TandemButton enlace="/crear-qr" >Crear QR</TandemButton>
  </div>
  
  <div className="qrarchivo">
  <h2>ARCHIVO QR</h2>
  <StaticImage
    src="../images/qr-code.png"
    loading="eager"
    width={100}
    quality={95}
    formats={["auto", "webp", "avif"]}
    alt=""
    style={{ marginBottom: `var(--space-3)` }}
    />
  <StaticImage
    src="../images/qr-code.png"
    loading="eager"
    width={100}
    quality={95}
    formats={["auto", "webp", "avif"]}
    alt=""
    style={{ marginBottom: `var(--space-3)` }}
    />
  <StaticImage
    src="../images/qr-code.png"
    loading="eager"
    width={100}
    quality={95}
    formats={["auto", "webp", "avif"]}
    alt=""
    style={{ marginBottom: `var(--space-3)` }}
    />
  <br></br>
  <TandemButton enlace="#" >Acceder</TandemButton>
  </div>
  <a href="/" role='button' className='button'>Volver a inicio</a>
</Layout>
  )
}

export default Inicio