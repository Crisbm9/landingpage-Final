import React, { useState } from 'react';

const Registro = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const hadleNombre=(e) => setNombre(e.target.value);
    const hadleEmail=(e) => setEmail(e.target.value);
    const hadlePassword=(e) => setPassword(e.target.value);


    const handleRegistro = async () => {
        try {
            const response = await fetch('http://localhost/api-qr-tandem/v1/register-user.php', {
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
        <div>
          <label htmlFor='nombre'>Nombre:</label>
            <input
                type="text"
                placeholder="Introduce tu nombre"
                id='nombre'
                value={nombre}
                onChange={hadleNombre}
            />
          <label htmlFor='email'>Email:</label>
            <input
                type="text"
                placeholder="Introduce tu email"
                id='email'
                value={email}
                onChange={hadleEmail}
            />
          <label htmlFor='password'>Contraseña:</label>
            <input
                type="text"
                placeholder="Introduce tu Contraseña"
                id='password'
                value={password}
                onChange={hadlePassword}
            />
            <button onClick={handleRegistro}>Registro</button>
        </div>
    );
};

export default Registro;