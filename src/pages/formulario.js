import React, { useState } from 'react';
import "./EmployeeLoginForm.css"
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';



const Register = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [delegacion, setDelegacion] = useState('');

    const handleRegister = async () => {
        try {
            const response = await fetch('http://tu-dominio/endpoints/register.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nombre,
                    email,
                    password
                })
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error registrando usuario', error);
        }
    };

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
      <h2>Registro</h2>
          <label htmlFor="name">Nombre:</label>
            <input
                type="text"
                placeholder="Nombre"
                id="name"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
            <label htmlFor="delegacion">Delegación:</label>
            <input
                type="text"
                placeholder="Delegacion"
                id="delegacion"
                value={delegacion}
                onChange={(e) => setDelegacion(e.target.value)}
            />
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                placeholder="Email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
             <label htmlFor="password">Contraseña:</label>
            <input
                type="password"
                placeholder="Password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleRegister}>Registrarse</button>
            
            </form>
            
        </div>
       
        <div className='divcollapse'>
        

        </div>
        <a href="/" role='button' className='button'>Volver a inicio</a>
      <a href="/inicio" role='button' className='button'>Siguiente</a>
        </Layout>
    );
};

export default Register;

