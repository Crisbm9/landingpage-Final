import React, { useEffect, useState } from 'react';
import EditarRole from './editarRole';
import ModificarUsuario from './modificarusuario';
import ModalTandem from './modaltandem';
import DeleteUserButton from './delete';
import Registro from './registro';
import { Card, CardContent, CardActions, Typography } from '@mui/material';


const Usuarios = ({url}) => {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('');
  const [refresh, setRefresh] = useState(false);
  const [q, setQ] = useState("");
  const [searchParam] = useState(["nombre"]);


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Error al cargar los usuarios');
        }
        const data = await response.json();
        setUsers(data.users);
        setMessage(data.message);
        setRefresh(true)
        handleUserUpdated();
      } catch (error) {
        console.error('Error fetching users', error);
        setMessage('Error al cargar los usuarios');
      }
    };

    fetchUsers();
  }, [url, refresh]);

  const handleUserUpdated = () => {
    setRefresh(!refresh); // Cambia el estado de refresh para desencadenar useEffect
  };

  function search(items) {
    return items.filter((item) => {
      return searchParam.some((param) => {
        return (
          item[param] && // Verifica que el campo existe
          item[param]
            .toString()
            .toLowerCase()
            .indexOf(q.toLowerCase()) > -1
        );
      });
    });
  }

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <div className="search-wrapper">
                <label htmlFor="search-form">
                  <span className="sr-only">Buscar por nombre:</span>
                  <input
                    type="search"
                    name="search-form"
                    id="search-form"
                    className="search-input"
                    placeholder="Buscar por nombre"
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    style={{ width: '400px', height: '40px', fontSize: '16px', padding: '10px' }}
                  />
                </label>
              </div>
              <br></br>
              <ModalTandem
        boton="+ Registrar nuevo usuario"
        text={<Registro />}
      />

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {search(users).map((user) => (
          <Card key={user.id} 
          sx={{
            width: '300px',
            transition: 'transform 0.3s, background-color 0.3s',
            '&:hover': {
              backgroundColor: '#C2EBF5',
              transform: 'scale(1.05)',
            },
          }}>
            <CardContent>
              <Typography variant="h6">{user.nombre}</Typography>
              <Typography variant="body2">Id: {user.id}</Typography>
              <Typography variant="body2">Email: {user.email}</Typography>
              <Typography variant="body2">Departamento: {user.delegacion}</Typography>
              <Typography variant="body2">Role: {user.role}</Typography>
            </CardContent>
            <CardActions>
              <ModalTandem
                boton="Modificar"
                text={<ModificarUsuario initialEmail={user.email} initialNombre={user.nombre} initialdelegacion={user.delegacion} onUserUpdated={handleUserUpdated} />}
              />
              <ModalTandem
                boton="Cambiar rol"
                text={<EditarRole emaill={user.email} rolee={user.role} onUserUpdated={handleUserUpdated} />}
              />
              <ModalTandem
                boton="Borrar"
                text={<DeleteUserButton emaili={user.email} onUserUpdated={handleUserUpdated} />}
              />
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Usuarios;
