import React, { useEffect, useState } from 'react';
import UpdateUser from './editarRole';
import ModificarUsuario from './modificarusuario';
import ModalTandem from './modaltandem';
import DeleteUserButton from './delete';


const Usuarios = () => {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost/api-qr-tandem/v1/list-users.php ');
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
    <div className="tablaqr">
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Departamento</th>
            <th>Role</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.nombre}</td>
              <td>{user.email}</td>
              <td>{user.departamento}</td>
              <td>{user.role}</td>
              <td>
              <ModalTandem
                  boton="Modificar"
                  text={<ModificarUsuario initialEmail={user.email} initialNombre={user.nombre} initialDepartamento={user.departamento} />}
                />
                <ModalTandem
                  boton="Cambiar rol"
                  text={<UpdateUser emaill={user.email} rolee={user.role}></UpdateUser>}
                />
                 <ModalTandem
                  boton="Borrar"
                  text={<DeleteUserButton emaili={user.email}></DeleteUserButton>}
                />
                
                </td>
            </tr>

          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Usuarios;
