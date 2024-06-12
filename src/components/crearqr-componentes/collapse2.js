import React from "react";
import Collapse from "./collapse1";

function Collapse2() {
  return (
    <div>
      <Collapse isCollapsed={false} >
        <div className="collapsi">
        <h3>Instrucciones</h3>
        <p>Introduce el texto, URL o coordenadas en el campo de entrada.</p>
        <p>Selecciona el color y tamaño del QR utilizando las opciones disponibles.</p>
        <p>Haz clic en descarga para obtener el QR en el formato deseado (PNG, JPG, SVG)</p>
        </div>
      </Collapse>
    </div>
  );
}

export default Collapse2;