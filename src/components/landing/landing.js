import React from "react";

import { Link } from 'gatsby';
import { Button } from '@mui/material';
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

    <Button
      variant="contained"
      color="primary"
      component={Link}
      to="/acceso"
    >
      Acceso empleados
    </Button>
    
    <br></br>
    
    

    </div>
    
    </div>
  )
}
export default Landing