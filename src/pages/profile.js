
import React, { useState, useEffect } from "react";
import '../components/layout.css';
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import CerrarSesion from "../components/cerrarsesion";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    nombre: '',
    email: '',
    id: ''
  });
  const [image, setImage] = useState(null);
  useEffect(() => {
    setProfileData({
      nombre: localStorage.getItem('tandem_nombre') || '',
      email: localStorage.getItem('tandem_email') || '',
      id: localStorage.getItem('tandem_id') || ''
    });
    const savedImage = localStorage.getItem('profile_image');
    if (savedImage) {
      setImage(savedImage);
    }
  }, []);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result;
        setImage(base64Image);
        localStorage.setItem('profile_image', base64Image);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <Layout>
    <div className="qrinicio">
      <h2 className="page-title">Perfil del Usuario</h2>
      <div className="divi">
        {image ? (
          <img src={image} alt="avatar" className="avatar" style={{ width: '100px', height: '100px' }} />
        ) : (
          <StaticImage
            src="../images/perfill.png"
            alt="avatar"
            className="avatar"
            style={{ width: '100px', height: '100px' }}
          />
        )}
        <br></br>
        <p>Cambiar imagen de usuario:</p>
        <input type="file" accept="image/*" onChange={handleImageChange} className="file-input" />
        <br></br>
        <br></br>
        <p className="profile-item">Nombre: {profileData.nombre}</p>
        <p className="profile-item">Email: {profileData.email}</p>
        <p className="profile-item">Id: {profileData.id}</p>

        <br/>
        <a href="/contrasena" role='button' className='aform'>Cambiar contraseña</a>
        <br/>
        <CerrarSesion />
        
      </div>
    </div>
    </Layout>
  );
};
export default Profile;


// import React, { useEffect, useState } from "react";
// import CerrarSesion from "../components/cerrarsesion";
// import Layout from "../components/layout";
// import { StaticImage } from "gatsby-plugin-image";

// const Profile = () => {
//   const [userInfo, setUserInfo] = useState({
//     nombre: '',
//     email: '',
//     id: ''
//   });

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       setUserInfo({
//         nombre: localStorage.getItem('tandem_nombre') || '',
//         email: localStorage.getItem('tandem_email') || '',
//         id: localStorage.getItem('tandem_id') || ''
//       });
//     }
//   }, []);

//   return (
//     <>
//       <Layout>
//         <div className="qrinicio">
//           <div className="divi">
//             <StaticImage
//               src="../images/perfill.png"
//               loading="eager"
//               width={80}
//               quality={95}
//               formats={["auto", "webp", "avif"]}
//               alt=""
//               style={{ marginBottom: `var(--space-3)` }}
//             />
//             <p>Nombre: {userInfo.nombre}</p>
//             <p>Email: {userInfo.email}</p>
//             <p>Id: {userInfo.id}</p>
//           </div>
//           <br></br>
//           <a href="/contrasena" role='button' className='botoncito'>Cambiar contraseña</a>
//           <br></br>
//           <br></br>
//           <CerrarSesion />
//         </div>
//       </Layout>
//     </>
//   );
// };

// export default Profile;