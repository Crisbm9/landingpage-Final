import React, { useEffect, useState } from 'react';
import './TablaUsuarios.css'; // Archivo CSS para estilos de la tabla
import UpdateUser from './editarRole';

function TablaUsuarios({ url }) {
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState('');
    const [editingUser, setEditingUser] = useState(null);
    const [newRole, setNewRole] = useState('');
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setUsers(data.users);
                setMessage(data.message);
            } catch (error) {
                console.error('Error al buscar la lista de usuarios', error);
            }
        };
        fetchUsers();
    }, [url]);
    const handleEditUser = async (user) => {
        setEditingUser(user);
    };
    const handleDeleteUser = async (userId) => {
        try {
            const response = await fetch(`http://localhost:8000/delete-user.php?id=${userId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const updatedUsers = users.filter(user => user.id !== userId);
            setUsers(updatedUsers);
        } catch (error) {
            console.error('Error al eliminar usuario', error);
        }
    };
    const handleChangeRole = async (userId) => {
        try {
            const response = await fetch(`http://localhost:8000/change-role.php`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: userId, role: newRole })
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const updatedUsers = users.map(user => {
                if (user.id === userId) {
                    return { ...user, role: newRole };
                }
                return user;
            });
            setUsers(updatedUsers);
            setEditingUser(null);
            setNewRole('');
        } catch (error) {
            console.error('Error al cambiar el rol del usuario', error);
        }
    };
    return (
        <div className="usuarios-grid">
            {users.map(user => (
                <div key={user.id} className="usuario-card">
                    {/* <img src={user.imagen} alt={`${user.nombre}`} className="usuario-imagen" /> */}
                    <p>ID: {user.id}</p>
                    <p>Nombre: {user.nombre}</p>
                    <p>Email: {user.email}</p>
                    <p>Delegación: {user.delegacion}</p>
                    <p>Rol: {user.role}</p>
                    <button onClick={() => handleEditUser(user)}>Cambiar Role</button>
                    
                    {/* <button onClick={() => handleDeleteUser(user.id)}>Eliminar</button>
                    <div className="change-role">
                        <select
                            value={newRole}
                            onChange={(e) => setNewRole(e.target.value)}
                        >
                            <option value="">Seleccionar Rol</option>
                            <option value="Admin">Admin</option>
                            <option value="Usuario">Usuario</option>
                            <option value="Visitante">Visitante</option>
                        </select>
                        <button onClick={() => handleChangeRole(user.id)}>Cambiar Rol</button> */}
                    {/* </div> */}
                </div>
            ))}
            {editingUser && (
                <div className="modal">
                   <UpdateUser></UpdateUser>
                </div>
            )}
        </div>
    );
}
export default TablaUsuarios;