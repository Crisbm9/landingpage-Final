import React, { useState } from 'react';
import "./layout.css"
const ModalGuardar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [saved, setSaved] = useState(false);
  const handleSave = () => {
    // código para guardar el archivo
    setSaved(true);
  };
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <React.Fragment>
      <button onClick={toggleModal}>Guardar archivo</button>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>Guardar archivo</h2>
              <button onClick={toggleModal} className="close-button">
                ×
              </button>
            </div>
            <div className="modal-body">
              {saved ? (
                <p>Archivo guardado correctamente!</p>
              ) : (
                <p>Seleccione la opción para guardar el archivo:</p>
              )}
              <button onClick={handleSave} className="save-button">
                Guardar
              </button>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
export default ModalGuardar;