import React, { useState } from 'react';

const ModificarUsuario = ({ initialNombre,  initialEmail, initialDepartamento }) => {
  const [nombre, setNombre] = useState(initialNombre);
  const [email, setEmail] = useState(initialEmail);
  const [departamento, setDepartamento] = useState(initialDepartamento);
  const [message, setMessage] = useState('');

  const manejarUsuario = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost/api-qr-tandem/v1/update-user.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, email, departamento }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      setMessage(data.message);
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
          <label>
            Email:
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
        </div> 
        <div>
          <label>
            Nombre:
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
          </label>
        </div>
        <div>
          <label>
            Departamento:
            <input type="text" value={departamento} onChange={(e) => setDepartamento(e.target.value)} required />
          </label>
        </div>
        <button type="submit">Actualizar</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ModificarUsuario;

// import React, { useState } from 'react';

// const ModificarUsuario = ({id, nombre, email, departamento}) => {
//   const [nombre, setNombre] = useState({nombre});
//   const [email, setEmail] = useState({email});
//   const [departamento, setDepartamento] = useState({departamento});
//   const [message, setMessage] = useState('');

//   const manejarUsuario = async (e) => {
//     e.preventDefault();

//     const response = await fetch('http://localhost/api-qr-tandem/v1/update-user.php', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ id, nombre, email, departamento }),
//     });

//     const data = await response.json();
//     setMessage(data.message);
//   };

//   return (
//     <div>
//       <h2>Actualizar Rol de Usuario</h2>
//       <form onSubmit={manejarUsuario}>
//         <div>
//           <label>
//             Email:
//             <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
//           </label>
//         </div>
//         <div>
//           <label>
//             Nombre:
//             <input type="text" value={nombre} onChange={(e) => setRole(e.target.value)} required />
//           </label>
//         </div>
//         <div>
//           <label>
//             Departamento:
//             <input type="text" value={departamento} onChange={(e) => setRole(e.target.value)} required />
//           </label>
//         </div>
//         <button type="submit">Actualizar</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default ModificarUsuario;
