import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode.react';
import Layout from '../components/layout';
import ModalTandem from '../components/modaltandem';
import EliminarQR from '../components/deleteqr';
import { Card, CardContent, CardActions, Typography, Button } from '@mui/material';

const QrCodeList = () => {
  const [qrCodes, setQrCodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQrCodes = async () => {
      try {
        const response = await fetch('http://localhost/api-qr-tandem/v1/list-qr.php');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setQrCodes(data.qr_codes);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchQrCodes();
  }, []);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error al cargar los datos: {error.message}</p>;
  }

  return (
    <Layout>
      
       <div >
      <h2>Listado de Códigos QR</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {qrCodes.map((qrCode) => (
          <Card key={qrCode.qr_id} style={{ width: '300px' }}>
            <CardContent>
              <QRCode value={qrCode.qr_data} />
              <Typography variant="h6">{qrCode.qr_nombre_ref}</Typography>
              <Typography variant="body2">Data: {qrCode.qr_data}</Typography>
              <Typography variant="body2">Descripción: {qrCode.qr_description}</Typography>
              <Typography variant="body2">Fecha Creación: {qrCode.qr_created_at}</Typography>
              <Typography variant="body2">ID Usuario: {qrCode.user_id}</Typography>
            </CardContent>
            <CardActions>
              <ModalTandem
                boton="Borrar"
                text={<EliminarQR qr={qrCode.qr_nombre_ref} />}
              />
            </CardActions>
          </Card>
        ))}
      </div>
      </div>
    </Layout>
  );
};

export default QrCodeList;

// import React, { useEffect, useState } from 'react';
// import QRCode from 'qrcode.react';
// import Layout from '../components/layout';
// import ModalTandem from '../components/modaltandem';
// import EliminarQR from '../components/deleteqr';

// const QrCodeList = () => {
//   const [qrCodes, setQrCodes] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchQrCodes = async () => {
//       try {
//         const response = await fetch('http://localhost/api-qr-tandem/v1/list-qr.php'); // Cambia esto a la URL correcta de tu API
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setQrCodes(data.qr_codes);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchQrCodes();
//   }, []);

//   if (loading) {
//     return <p>Cargando...</p>;
//   }

//   if (error) {
//     return <p>Error al cargar los datos: {error.message}</p>;
//   }

//   return (
//     <Layout>
//     <div className="tablaqr">
//       <h2>Listado de Códigos QR</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>QR</th>
//             <th>ID</th>
//             <th>Data</th>
//             <th>Nombre Referencia</th>
//             <th>Descripción</th>
//             <th>Fecha Creación</th>
//             <th>ID Usuario</th>
//             <th></th>

//           </tr>
//         </thead>
//         <tbody>
//           {qrCodes.map((qrCode) => (
//             <tr key={qrCode.qr_id}>
//               <td><QRCode
//               value={qrCode.qr_data}
//             /></td>
//               <td>{qrCode.qr_id}</td>
//               <td>{qrCode.qr_data}</td>
//               <td>{qrCode.qr_nombre_ref}</td>
//               <td>{qrCode.qr_description}</td>
//               <td>{qrCode.qr_created_at}</td>
//               <td>{qrCode.user_id}</td>
//               <td><ModalTandem
//                   boton="Borrar"
//                   text={<EliminarQR qr={qrCode.qr_nombre_ref}></EliminarQR>}
//                 /></td>

//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//     </Layout>
//   );
// };

// export default QrCodeList;