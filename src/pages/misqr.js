import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, CardActions, Typography, CircularProgress } from '@mui/material';
import QRCode from 'qrcode.react';
import Layout from '../components/layout';

const MisQr = () => {
    const [qrCodes, setQRCodes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Asegúrate de que window esté disponible antes de acceder a localStorage
        if (typeof window !== "undefined") {
            const userId = localStorage.getItem('tandem_id');

            if (userId) {
                // Usa una variable de entorno para la URL de la API
                const apiUrl = process.env.REACT_APP_API_URL || 'https://cristina.tandempatrimonionacional.eu/api-qr-tandem/v1/list-qr-user.php';

                axios.post(apiUrl, { id: userId })
                    .then(response => {
                        if (response.data && response.data.qr_codes) {
                            setQRCodes(response.data.qr_codes);
                        } else {
                            setError('No se encontraron códigos QR para este usuario.');
                        }
                        setLoading(false);
                    })
                    .catch(error => {
                        console.error('Error fetching QR codes:', error);
                        setError('Error al obtener los códigos QR.');
                        setLoading(false);
                    });
            } else {
                setError('No se encontró el ID de usuario en localStorage.');
                setLoading(false);
            }
        } else {
            setError('LocalStorage no está disponible.');
            setLoading(false);
        }
    }, []);

    if (loading) {
        return (
            <Layout>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <CircularProgress />
                </div>
            </Layout>
        );
    }

    if (error) {
        return (
            <Layout>
                <div style={{ padding: '20px' }}>
                    <Typography variant="h6" color="error">{error}</Typography>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div style={{ padding: '20px' }}>
                <h1>Mis QR</h1>
                {qrCodes.length > 0 ? (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                        {qrCodes.map(qrCode => (
                            <Card key={qrCode.qr_id} 
                            sx={{
                              width: '300px',
                              transition: 'transform 0.3s, background-color 0.3s',
                              '&:hover': {
                                backgroundColor: '#C2EBF5',
                                transform: 'scale(1.05)',
                              },
                            }}>
                              <CardContent>
                                <QRCode value={qrCode.qr_data} />
                                <Typography variant="h6">{qrCode.qr_nombre_ref}</Typography>
                                <Typography variant="body2">Data: {qrCode.qr_data}</Typography>
                                <Typography variant="body2">Descripción: {qrCode.qr_description}</Typography>
                                <Typography variant="body2">Fecha Creación: {qrCode.qr_created_at}</Typography>
                                <Typography variant="body2">ID Usuario: {qrCode.user_id}</Typography>
                            </CardContent>
                            <CardActions>
                            </CardActions>
                            </Card>
                        ))}
                    </div>
                ) : (
                    <Typography variant="body1">No se encontraron códigos QR para este usuario.</Typography>
                )}
            </div>
        </Layout>
    );
};

export default MisQr;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Card, CardContent, CardActions, Typography } from '@mui/material';
// import QRCode from 'qrcode.react';
// import Layout from '../components/layout';


// const MisQr = () => {
//     const [qrCodes, setQRCodes] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         // Obtener el ID del usuario desde localStorage
//         const userId = localStorage.getItem('tandem_id');

//         if (userId) {
//             // Hacer la solicitud a la API PHP
//             axios.post('http://cristina.tandempatrimonionacional.eu/api-qr-tandem/v1/list-qr-user.php', { id: userId })
//                 .then(response => {
//                     setQRCodes(response.data.qr_codes);
//                     setLoading(false);
//                 })
//                 .catch(error => {
//                     setError('Error al obtener los códigos QR.');
//                     setLoading(false);
//                 });
//         } else {
//             setError('No se encontró el ID de usuario en localStorage.');
//             setLoading(false);
//         }
//     }, []);

//     if (error) {
//         return <p>{error}</p>;
//     }

//     return (
//         <Layout>
//         <div>
//             <h1>Mis QR</h1>
//             {qrCodes.length > 0 ? (
//                 <ul>
//                     {qrCodes.map(qrCode => (
//                         <Card key={qrCode.qr_id} 
//                         sx={{
//                           width: '300px',
//                           transition: 'transform 0.3s, background-color 0.3s',
//                           '&:hover': {
//                             backgroundColor: '#C2EBF5',
//                             transform: 'scale(1.05)',
//                           },
//                         }}>
//                           <CardContent>
//                             <QRCode value={qrCode.qr_data} />
//                             <Typography variant="h6">{qrCode.qr_nombre_ref}</Typography>
//                             <Typography variant="body2">Data: {qrCode.qr_data}</Typography>
//                             <Typography variant="body2">Descripción: {qrCode.qr_description}</Typography>
//                             <Typography variant="body2">Fecha Creación: {qrCode.qr_created_at}</Typography>
//                             <Typography variant="body2">ID Usuario: {qrCode.user_id}</Typography>
//                         </CardContent>
//                         <CardActions>
//                         </CardActions>
//                         </Card>
//                     ))}
//                 </ul>
//             ) : (
//                 <p>No se encontraron códigos QR para este usuario.</p>
//             )}
//         </div>
//         </Layout>
//     );
// };

// export default MisQr;