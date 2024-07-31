import React from 'react'
const CerrarSesion = ()=>{
    const handleCerrarSesion= ()=>{
        if (typeof window !== 'undefined') { // Verifica si el código se está ejecutando en el navegador
            localStorage.removeItem('tandem_nombre');
            localStorage.removeItem('tandem_id');
            localStorage.removeItem('tandem_email');
            window.location.href = '/';

    }};
    return (
        <>
        <button onClick={handleCerrarSesion} className='button-collapse'>Cerrar sesion</button>
        </>
    )
}
export default CerrarSesion