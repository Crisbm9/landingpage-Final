import React, { useState } from 'react';
import "./LoginForm.css"
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import Registro from '../components/registro';



const Register = () => {


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
      
         
        <Registro></Registro>
        </div>
        </div>
        {/* <a href="/" role='button' className='button'>Volver a inicio</a>
      <a href="/inicio" role='button' className='button'>Siguiente</a> */}
        </Layout>
    );
};

export default Register;

