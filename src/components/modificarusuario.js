import React, { useState } from 'react';

const ModificarUsuario = ({ initialNombre,  initialEmail, initialdelegacion, onUserUpdated }) => {
  const [nombre, setNombre] = useState(initialNombre);
  const [email, setEmail] = useState(initialEmail);
  const [delegacion, setDelegacion] = useState(initialdelegacion);
  const [message, setMessage] = useState('');

  const manejarUsuario = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://cristina.tandempatrimonionacional.eu/api-qr-tandem/v1/update-user.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, email, delegacion }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);

      }

      const data = await response.json();
      setMessage(data.message);
      onUserUpdated();
    } catch (error) {
      console.error('Error registrando usuario:', error);
      setMessage('Error en el registro');
    }
  };

  return (
    <div>
      <h2>Actualizar Datos de Usuario</h2>
      <form onSubmit={manejarUsuario}>
         <div>
          <p>{email}</p>
        </div> 
        <div>
          <label>
            Nombre:
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
          </label>
        </div>
        <div>
          <label>
            Delegacion:
            <input type="text" value={delegacion} onChange={(e) => setDelegacion(e.target.value)} required />
          </label>
        </div>
        <button type="submit">Actualizar</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ModificarUsuario;

