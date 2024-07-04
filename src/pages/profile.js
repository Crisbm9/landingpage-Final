import React from "react"
import CerrarSesion from "../components/cerrarsesion"
import Layout from "../components/layout"
import Pipiver from "../components/popover"

const Profile = () => {
  return (
    <>
      <Layout>
        <div className="qr-contenido">
      <p>Nombre: {localStorage.getItem('tandem_nombre')}</p>
      <p>Email: {localStorage.getItem('tandem_email')}</p>
      <p>Id: {localStorage.getItem('tandem_id')}</p>
     
      <a href="/contrasenia" role='button' className='botoncito'>Cambiar contraseña</a>
      <br></br>
      <CerrarSesion></CerrarSesion>
      <Pipiver></Pipiver>
         </div>
      </Layout>
    </>
  )
}
export default Profile