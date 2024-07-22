import React from "react"
import CerrarSesion from "../components/cerrarsesion"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const Profile = () => {
  return (
    <>
      <Layout>
        <div className="qrinicio">
          <div className="divi">
          <StaticImage
        src="../images/perfill.png"
        loading="eager"
        width={80}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <p>Nombre: {localStorage.getItem('tandem_nombre')}</p>
      <p>Email: {localStorage.getItem('tandem_email')}</p>
      <p>Id: {localStorage.getItem('tandem_id')}</p>
          </div>
      <a href="/contrasenia" role='button' className='botoncito'>Cambiar contraseña</a>
      <br></br>
      <br></br>
      <CerrarSesion></CerrarSesion>
      
      </div>
      </Layout>
    </>
  )
}
export default Profile