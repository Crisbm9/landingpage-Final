import React, { useState } from 'react';

const Registro = () => {
    const [nombre, setNombre] = useState('');
    const [departamento, setDepartamento] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleNombre = (e) => setNombre(e.target.value);
    const handleDepartamento = (e) => setDepartamento(e.target.value);
    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);

    const handleRegistro = async () => {
        try {
            const response = await fetch('http://localhost/api-qr-tandem/v1/register-user.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nombre,
                    departamento,
                    email,
                    password
                })
            });
            const data = await response.json();
            if (response.ok) {
                setMessage(data.message);
                
                // window.location.href = '/page-2';
            } else {
                setMessage(data.message);
            }
        } catch (error) {
            console.error('Error registrando usuario', error);
            setMessage('Error en el registro');
        }
    };

    return (
        <div>
            <h2>Registro de Usuario</h2>
            <label htmlFor='nombre'>Nombre:</label>
            <input
                type="text"
                placeholder="Introduce tu nombre"
                id='nombre'
                value={nombre}
                onChange={handleNombre}
            />
            <label htmlFor='departamento'>Departamento:</label>
            <input
                type="text"
                placeholder="Introduce tu departamento"
                id='departamento'
                value={departamento}
                onChange={handleDepartamento}
            />
            <label htmlFor='email'>Email:</label>
            <input
                type="email"
                placeholder="Introduce tu email"
                id='email'
                value={email}
                onChange={handleEmail}
            />
            <label htmlFor='password'>Contraseña:</label>
            <input
                type="password"
                placeholder="Introduce tu Contraseña"
                id='password'
                value={password}
                onChange={handlePassword}
            />
            <button onClick={handleRegistro}>Registro</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Registro;

