import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image"
import { Link } from 'gatsby';
import { Button } from '@mui/material';

export default function Invitado (){
 
  const rol = localStorage.getItem('tandem_role')
  if(rol=='guest'){
    return(
    <Layout>
       <div className="qrinicio">
          <h1>¡Bienvenido {localStorage.getItem('tandem_nombre')}!</h1>
        <div class="contenedor">
          
  <div class="columna">
  
  <StaticImage
    src="../images/escaleras.jpg"
    loading="eager"
    width={1000}
    height={700}
    quality={95}
    formats={["auto", "webp", "avif"]}
    alt=""
    style={{ marginBottom: `var(--space-3)` }}
    />
  </div>
  <div class="columna">
 
      <ul>
        <li>
    <Button
      variant="contained"
      color="primary"
      component={Link}
      to="/profile"
    >
      Perfil
    </Button></li>
    <li>
    <Button
      variant="contained"
      color="primary"
      component={Link}
      to="/info"
    >
      Información Institucional
    </Button>
    </li>
    </ul>
    </div>
</div>

</div>
    </Layout>
  )
}
if(rol=='employee'){
  return(
    <Layout>
   <div className="qrinicio">
          <h1>¡Bienvenido {localStorage.getItem('tandem_nombre')}!</h1>
        <div class="contenedor">
          
  <div class="columna">
  
  <StaticImage
    src="../images/escaleras.jpg"
    loading="eager"
    width={1000}
    height={700}
    quality={95}
    formats={["auto", "webp", "avif"]}
    alt=""
    style={{ marginBottom: `var(--space-3)` }}
    />
  </div>
  <div class="columna">
 

        <ul>
        <li>
    <Button
      variant="contained"
      color="primary"
      component={Link}
      to="/profile"
    >
      Perfil
    </Button></li>
    <li>
    <Button
      variant="contained"
      color="primary"
      component={Link}
      to="/info"
    >
      Información Institucional
    </Button>
    </li>
    <li>
    <Button
      variant="contained"
      color="primary"
      component={Link}
      to="/crearqr"
    >
      Crear QR
    </Button></li>
    </ul>
    </div>
</div>

</div>
    </Layout>
  )}
if(rol=='admin'){
    return(
      <Layout>
        <div className="qrinicio">
          <h1>¡Bienvenido {localStorage.getItem('tandem_nombre')}!</h1>
        <div class="contenedor">
          
  <div class="columna">
  
  <StaticImage
    src="../images/escaleras.jpg"
    loading="eager"
    width={1000}
    height={700}
    quality={95}
    formats={["auto", "webp", "avif"]}
    alt=""
    style={{ marginBottom: `var(--space-3)` }}
    />
  </div>
  <div class="columna">
 
      <ul>
        <li>
    <Button
      variant="contained"
      color="primary"
      component={Link}
      to="/profile"
    >
      Perfil
    </Button></li>
    <li>
    <Button
      variant="contained"
      color="primary"
      component={Link}
      to="/info"
    >
      Información Institucional
    </Button>
    </li>
    <li>
    <Button
      variant="contained"
      color="primary"
      component={Link}
      to="/crearqr"
    >
      Crear QR
    </Button></li>
    <li>
    <Button
      variant="contained"
      color="primary"
      component={Link}
      to="/listqr"
    >
      Listado de QR
    </Button></li>
    <li>
    <Button
      variant="contained"
      color="primary"
      component={Link}
      to="/adminuser"
    >
      Administrar empleados
    </Button></li>
    </ul>

    </div>
</div>
</div>
      
      </Layout>
    )}
}
