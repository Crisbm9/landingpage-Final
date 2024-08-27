import React, { useState } from 'react';
import { Button } from "@mui/material";
import { FaSave } from 'react-icons/fa';

const SaveDb = ({ data, nref, desc }) => {
    const [mensaje, setMensaje] = useState(false);
    const [respuesta, setRespuesta] = useState('');

    const saveQr = async () => {
        if (typeof window !== 'undefined') { 
            try {
                const response = await fetch('https://cristina.tandempatrimonionacional.eu/api-qr-tandem/v1/create-qr.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "data": data,
                        "nombre_ref": nref,
                        "description": desc,
                        "created_by": localStorage.getItem('tandem_id')
                    })
                });
                const respuesta = await response.json();
                setRespuesta(respuesta.message);
                setMensaje(true);
                console.log(respuesta.message);
            } catch (error) {
                console.error('Error creando código QR', error);
            }
        }
    };

    return (
        <>
            <Button onClick={saveQr} className='button-collapse'><FaSave /> Guardar </Button>
            {mensaje && <p>{respuesta}</p>}
        </>
    );
};

export default SaveDb;
