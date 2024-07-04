import React, { useEffect, useState } from 'react';
function TablaUsuarios({ url }) {
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState('');
    useEffect(() => {
        const fetchUser = async () => {
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
        fetchUser();
    }, [url]);
    return (
        <>
            <p>Esta será la Tabla</p>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Delegación</th>
                        <th>Rol</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.nombre}</td>
                            <td>{user.email}</td>
                            <td>{user.departamento}</td>
                            <td>{user.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
export default TablaUsuarios;