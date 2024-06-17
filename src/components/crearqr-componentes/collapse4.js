import React from "react";
import Collapse3 from "./collapse3";

function Collapse4() {
  return (
    <div>
      <Collapse3 isCollapsed={false} >
        <div>
        <h3>Información básica sobre Protección de Datos</h3>
        <p>Responsable: Patrimonio Nacional.</p>
        <p>Finalidad: Acceso personalizado a los servicios interactivos que ofrece el generador de qr de PAtrimonio Nacional.</p>
        <p>Legitimación: Consentimiento del interesado.</p>
        <p>Destinatarios: No se cederán datos a terceros.</p>
        </div>
      </Collapse3>
    </div>
  );
}

export default Collapse4;