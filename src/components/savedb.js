import React, { useState } from 'react';
import { Button } from "@mui/material";
import { FaDownload, FaEdit, FaSave } from 'react-icons/fa';

const SaveDb= ({data,nref,desc})=>{
const [mensaje, setMensaje]=useState(false)
const [respuesta, setRespuesta]=useState('')


    const saveQr= async () => {
       
        try {
            const response = await fetch('http://localhost/api-qr-tandem/v1/create-qr.php', {
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
            const respuesta=await response.json();
           setRespuesta(respuesta.message)
           setMensaje(true)
           console.log(respuesta.message)

        } catch (error) {
            console.error('Error creando código QR', error);
        
        }
    };

   return(
    <>
    <Button onClick={saveQr} className='button-collapse'><FaSave></FaSave> Guardar </Button>
    {mensaje && <p>{respuesta.message}</p> }
    </>
   ) 
}


export default SaveDb