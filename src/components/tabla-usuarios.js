import React, { useEffect, useState } from 'react';
import UpdateUser from './editarRole';
import ModificarUsuario from './modificarusuario';
import ModalTandem from './modaltandem';
import DeleteUserButton from './delete';
import Registro from './registro';
import { Card, CardContent, CardActions, Typography, Button } from '@mui/material';

const Usuarios = () => {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost/api-qr-tandem/v1/list-users.php');
        if (!response.ok) {
          throw new Error('Error al cargar los usuarios');
        }
        const data = await response.json();
        setUsers(data.users);
        setMessage(data.message);
      } catch (error) {
        console.error('Error fetching users', error);
        setMessage('Error al cargar los usuarios');
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <ModalTandem
        boton="+ Registrar nuevo usuario"
        text={<Registro />}
      />
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {users.map((user) => (
          <Card key={user.id} style={{ width: '300px' }}>
            <CardContent>
              <Typography variant="h6">{user.nombre}</Typography>
              <Typography variant="body2">Id: {user.id}</Typography>
              <Typography variant="body2">Email: {user.email}</Typography>
              <Typography variant="body2">Departamento: {user.departamento}</Typography>
              <Typography variant="body2">Role: {user.role}</Typography>
            </CardContent>
            <CardActions>
              <ModalTandem
                boton="Modificar"
                text={<ModificarUsuario initialEmail={user.email} initialNombre={user.nombre} initialDepartamento={user.departamento} />}
              />
              <ModalTandem
                boton="Cambiar rol"
                text={<UpdateUser emaill={user.email} rolee={user.role} />}
              />
              <ModalTandem
                boton="Borrar"
                text={<DeleteUserButton emaili={user.email} />}
              />
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Usuarios;

// import React, { useEffect, useState } from 'react';
// import UpdateUser from './editarRole';
// import ModificarUsuario from './modificarusuario';
// import ModalTandem from './modaltandem';
// import DeleteUserButton from './delete';
// import Registro from './registro';

// const Usuarios = () => {
//   const [users, setUsers] = useState([]);
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await fetch('http://localhost/api-qr-tandem/v1/list-users.php ');
//         if (!response.ok) {
//           throw new Error('Error al cargar los usuarios');
//         }
//         const data = await response.json();
//         setUsers(data.users);
//         setMessage(data.message);
//       } catch (error) {
//         console.error('Error fetching users', error);
//         setMessage('Error al cargar los usuarios');
//       }
//     };

//     fetchUsers();
//   }, []);

//   return (
//     <div className="tablaqr">
//       <h1>Lista de Usuarios</h1>
//       <ModalTandem
//                   boton="Registro"
//                   text={<Registro></Registro>}
//                 />
//       <table>
//         <thead>
//           <tr>
//             <th>Nombre</th>
//             <th>Id</th>
//             <th>Email</th>
//             <th>Departamento</th>
//             <th>Role</th>
//             <th></th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user.id}>
//               <td>{user.nombre}</td>
//               <td>{user.id}</td>
//               <td>{user.email}</td>
//               <td>{user.departamento}</td>
//               <td>{user.role}</td>
//               <td>
//               <ModalTandem
//                   boton="Modificar"
//                   text={<ModificarUsuario initialEmail={user.email} initialNombre={user.nombre} initialDepartamento={user.departamento} />}
//                 />
//                 <ModalTandem
//                   boton="Cambiar rol"
//                   text={<UpdateUser emaill={user.email} rolee={user.role}></UpdateUser>}
//                 />
//                  <ModalTandem
//                   boton="Borrar"
//                   text={<DeleteUserButton emaili={user.email}></DeleteUserButton>}
//                 />
                
//                 </td>
//             </tr>

//           ))}
//         </tbody>
//       </table>
     
      
//     </div>
//   );
// };

// export default Usuarios;
