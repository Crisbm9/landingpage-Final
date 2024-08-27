import React, { useEffect, useState } from "react";
import Pipiver from './pipiver';
import Menu from "./menu";




const PerfilOpc = () => {
    const [ide, setIde] = useState(null);

    useEffect(() => {
        if (typeof window !== 'undefined') { // Verifica si el código se está ejecutando en el navegador
            setIde(localStorage.getItem('tandem_id'));
        }
    }, []);

    if (!ide) return null; // Return null or a loading spinner while ide is being fetched

    return (
        <>
        <div className="contenedor">
        <div className="elemento1">
        <Menu></Menu>
        </div>
        <div className="elemento">
        <Pipiver/>
        </div>
       </div>
        
        </>
    );
}

export default PerfilOpc;

