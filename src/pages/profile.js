import React, { useEffect, useState } from "react";
import CerrarSesion from "../components/cerrarsesion";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const Profile = () => {
  const [userInfo, setUserInfo] = useState({
    nombre: '',
    email: '',
    id: ''
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUserInfo({
        nombre: localStorage.getItem('tandem_nombre') || '',
        email: localStorage.getItem('tandem_email') || '',
        id: localStorage.getItem('tandem_id') || ''
      });
    }
  }, []);

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
            <p>Nombre: {userInfo.nombre}</p>
            <p>Email: {userInfo.email}</p>
            <p>Id: {userInfo.id}</p>
          </div>
          <br></br>
          <a href="/contrasena" role='button' className='botoncito'>Cambiar contraseña</a>
          <br></br>
          <br></br>
          <CerrarSesion />
        </div>
      </Layout>
    </>
  );
};

export default Profile;

