import * as React from "react";
import { useState, useRef } from "react";
import Layout from "../components/layout";
import Collapse2 from "../components/crearqr-componentes/collapse2";
import MyComponent from "../components/crearqr-componentes/componente1";
import QRCode from 'qrcode.react';
import { toPng, toJpeg, toSvg } from 'html-to-image';
import download from "downloadjs";
import Collapse3 from "../components/crearqr-componentes/collapse3";
import CenteredTabs from "../components/tabs";
import Modal from "../components/modal";




function Crearqr() {
  const [inputValue, setInputValue] = useState('');
  const [qrColor, setQrColor] = useState('black');
  const [qrSize, setQrSize] = useState(100);
  const qrRef = useRef(null);
  const [descargado, setDescargado] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleColorChange = (color) => {
    setQrColor(color);
  };
  const handleSizeChange = (size) => {
    setQrSize(parseInt(size, 10));
  };
  
const handleFormatChange = (event) => {
  setSelectedFormat(event.target.value);
};
const [selectedFormat, setSelectedFormat] = useState('png');
///////////////////////////////////////////////////
const [showModal, setShowModal] = useState(false); // State to manage modal visibility
const handleHelpClick = () => {
  setShowModal(true);
};
const handleCloseModal = () => {
  setShowModal(false);
};

/////////////////////////////////////////////

const handleDownload1 = async () => {
  
  if (qrRef.current) {
    let dataUrl;
    if (selectedFormat === 'png') {
      dataUrl = await toPng(qrRef.current);
      setDescargado(true)
    } else if (selectedFormat === 'jpeg') {
      dataUrl = await toJpeg(qrRef.current);
      setDescargado(true)
    } else if (selectedFormat === 'svg') {
      dataUrl = await toSvg(qrRef.current);
      setDescargado(true)
    }
    download(dataUrl, `qr-code.${selectedFormat}`);
  }
};

  const containerStyle = {
    backgroundColor: "beige",
    border: "2px solid black",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
  };
  const colorOptions = ['black', 'blue', 'red', 'green', 'yellow', 'purple', 'orange', 'pink', 'magenta']; // Colores ampliados
  return (
    <Layout>

      <div className="qr-generador" style={containerStyle}>
        <h1>GENERADOR DE QR</h1>
        <Collapse2 />
        <br />

        <div className="white">
        <CenteredTabs></CenteredTabs>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <br></br>
        <div ref={qrRef}>
          <br></br>
          <h4>Tu QR generado:</h4>
          <QRCode value={inputValue} size={qrSize} fgColor={qrColor} />
        </div>
        </div>

        <div className="white">
          <h3>Personaliza tu QR:</h3>
        <MyComponent
          onColorChange={handleColorChange}
          onSizeChange={handleSizeChange}
          colorOptions={colorOptions}
        />
        </div>
        
        {/* <div className="qr-contenido"> */}
        
       
       
        {/* <p>Contenido del QR:</p>
        <p>{inputValue}</p> */}
        
        
        

        <Collapse3 isCollapsed={false}>
          {/* <Modal show={showModal} handleClose={handleCloseModal}> */}
          <div className="white">
        <p>Selecciona el formato para descargar el QR</p>
                <div className="radio-group">
                  <label>
                    <input
                      type="radio"
                      value="png"
                      checked={selectedFormat === 'png'}
                      onChange={handleFormatChange}
                    />
                    PNG
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="jpeg"
                      checked={selectedFormat === 'jpeg'}
                      onChange={handleFormatChange}
                    />
                    JPEG
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="svg"
                      checked={selectedFormat === 'svg'}
                      onChange={handleFormatChange}
                    />
                    SVG
                  </label>
                </div>
                <button onClick={handleDownload1} className="button23">
            Decargar QR
          </button>
          {descargado && <p className="pdescarga">¡El qr se ha descargado!</p>}
      
          {/* </Modal> */}
          </div>
      </Collapse3> 
                





          
      </div>
    </Layout>
  );
}
export default Crearqr;
