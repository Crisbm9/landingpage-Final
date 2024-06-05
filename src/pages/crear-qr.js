import * as React from "react";
import { useState, useRef } from "react";
import Layout from "../components/layout";
import Collapse2 from "../components/crearqr-componentes/collapse2";
import MyComponent from "../components/crearqr-componentes/componente1";
import TandemButton from "../components/button/tandembutton";
import QRCode from 'qrcode.react';
import { toPng } from 'html-to-image';
import download from 'downloadjs';

function Crearqr() {
  const [inputValue, setInputValue] = useState('');
  const [qrColor, setQrColor] = useState('black');
  const [qrSize, setQrSize] = useState(100);
  const qrRef = useRef(null);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleColorChange = (color) => {
    setQrColor(color);
  };
  const handleSizeChange = (size) => {
    setQrSize(parseInt(size, 10));
  };
  const handleDownload = async () => {
    if (qrRef.current) {
      const dataUrl = await toPng(qrRef.current);
      download(dataUrl, 'qr-code.png');
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
      <div style={containerStyle}>
        <h1>GENERADOR DE QR</h1>
        <Collapse2 />
        <br />
        <p>Introduce tu texto o url aquí:</p>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <MyComponent
          onColorChange={handleColorChange}
          onSizeChange={handleSizeChange}
          colorOptions={colorOptions}
        />
        <br /> 
        <div className="qr-contenido">
        <div ref={qrRef}>
          <QRCode value={inputValue} size={qrSize} fgColor={qrColor} />
        </div>
        <br />
       <br />
         {/* <TandemButton enlace="#">Generar QR</TandemButton> */}
        <p>Contenido del QR:</p>
        <p>{inputValue}</p>
        </div>
        <br />
        <button onClick={handleDownload} className="button22">Descargar QR</button>
      </div>
    </Layout>
  );
}
export default Crearqr;
