import React from "react";
import Layout from "../components/layout";



export default function Invitado (){
  const rol = localStorage.getItem('tandem_role')
  if(rol=='guest'){
    return(
    <Layout>
      <div className="qrinicio">
      
      <h1>¡Bienvenido {localStorage.getItem('tandem_nombre')}!</h1>
    <ul>
      <li><a href="/profile" role='button' className="">Perfil</a></li>
      <li><a href="/page-infoinstitucional" role='button' className="">Información Institucional</a></li>
    </ul>
    </div>
    </Layout>
  )
}
if(rol=='employee'){
  return(
    <Layout>
      <div className="qrinicio">
     
      <h1>¡Bienvenido {localStorage.getItem('tandem_nombre')}!</h1>
    <ul>
    <li><a href="/profile" role='button' className="">Perfil</a></li>
    <li><a href="/page-infoinstitucional" role='button' className="">Información Institucional</a></li>
    <li><a href="/crear-qr" role='button' className="">Crear QR</a></li>
    
    </ul>
    </div>
    </Layout>
  )}
if(rol=='admin'){
    return(
      <Layout>
        <div className="qrinicio">
        
       
      <h1>¡Bienvenido {localStorage.getItem('tandem_nombre')}!</h1>
      <ul>
      <li><a href="/profile" role='button' className="">Perfil</a></li>
      <li><a href="/page-infoinstitucional" role='button' className="">Información Institucional</a></li>
      <li><a href="/crear-qr" role='button' className="">Crear QR</a></li>
      <li><a href="/list-qr" role='button' className="">Listado de qr</a></li>
      <li><a href="/admin-user" role='button' className="">Administrar empleados</a></li>
      </ul>
      </div>
      </Layout>
    )}
}
