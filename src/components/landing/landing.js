import React from "react";

import TandemButton from "../button/tandembutton";
import "./landing.css"


function Landing(){
  return(
    <div className="layoute">
    
    <div className="cajatitulo">
      
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