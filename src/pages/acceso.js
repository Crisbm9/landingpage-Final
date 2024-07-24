import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import './LoginForm.css';
import Layout from "../components/layout"
import LoginForm from "../components/loginform";

const Acceso = () => {
  return (
    <Layout>
      <div className="login-form-container">
        
        <div className="login-form">
          <StaticImage
        src="../images/Logo_de_Patrimonio_Nacional.svg.png"
        loading="eager"
        width={250}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
          <LoginForm></LoginForm>
        </div>
        
      </div>
      
    </Layout>
  );
};
export default Acceso;
