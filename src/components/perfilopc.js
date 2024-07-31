import React, { useEffect, useState } from "react";
import Pipiver from './pipiver';

const PerfilOpc = () => {
    const [ide, setIde] = useState(null);

    useEffect(() => {
        if (typeof window !== 'undefined') { // Verifica si el código se está ejecutando en el navegador
            setIde(localStorage.getItem('tandem_id'));
        }
    }, []);

    if (!ide) return null; // Return null or a loading spinner while ide is being fetched

    return (
        <Pipiver />
    );
};

export default PerfilOpc;


// import React from "react"
// import Pipiver from './pipiver';
// const PerfilOpc = () => {
// const ide= localStorage.getItem('tandem_id')
// if(ide){
// return(
// <Pipiver></Pipiver>
// )
// }
// }
// export default PerfilOpc