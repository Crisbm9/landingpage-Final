import React from "react";
import { StaticImage } from "gatsby-plugin-image"
import AlertButton from "../button/button";
import AlertButton2 from "../button/buttoninfo";
import "./landing.css"


function Landing(){
  return(
    <div className="layoute">
    
    <div className="cajatitulo">
      <StaticImage
        src="../../images/Logo_de_Patrimonio_Nacional.svg.png"
        loading="eager"
        width={250}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>
        GENERADOR QR
      </h1>
      
    </div>
    <div className="botones">

    <div className="alertbutton">
    <AlertButton></AlertButton>
    </div>
    <br></br>
    <div className="alertbutton">
    <AlertButton2></AlertButton2>
    </div>

   </div>
    
    </div>
  )
}
export default Landing