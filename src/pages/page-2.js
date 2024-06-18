import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import './EmployeeLoginForm.css';
import Layout from "../components/layout"
import Seo from "../components/seo"

const EmployeeLoginForm = () => {
  return (
    <Layout>



      <div className="login-form-container">
        
        <form className="login-form">
          <StaticImage
        src="../images/Logo_de_Patrimonio_Nacional.svg.png"
        loading="eager"
        width={250}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
          <h2>Inicio de sesión</h2>
          <label htmlFor="username">Usuario:</label>
          <input type="text" id="username" name="username" placeholder="Usuario" required />
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" name="password" placeholder="Contraseña" required />
          <button type="submit">Acceder</button>
          <br></br>
          <br></br>
          <a href="#" role='button' >¿Olvidaste tu contraseña?</a>
          <br></br>
          <br></br>
          <a href="/formulario" role='button' >Registrarse</a>
        </form>
      </div>

      <a href="/" role='button' className='button'>Volver a inicio</a>
      <a href="/inicio" role='button' className='button'>Siguiente</a>
      
    </Layout>
  );
};
export default EmployeeLoginForm;
export const Head = () => <Seo title="Acceso de Empleados" />