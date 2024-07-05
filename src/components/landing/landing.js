import React from "react";
import { StaticImage } from "gatsby-plugin-image"
import TandemButton from "../button/tandembutton";
import "./landing.css"


function Landing(){
  return(
    <div className="layoute">
    
    <div className="cajatitulo">
      {/* <StaticImage
        src="../../images/Logo_de_Patrimonio_Nacional.svg.png"
        loading="eager"
        width={250}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      /> */}
      <h1>
        GENERADOR QR
      </h1>
      
    </div>
    <div className="botones">

    
    <TandemButton enlace="page-2" >Acceso empleados</TandemButton>
    
    <br></br>
    
    {/* <TandemButton enlace="page-infoinstitucional">Información Institucional</TandemButton> */}
    

   </div>
    
    </div>
  )
}
export default Landing