import * as React from "react";
import { useState, useRef } from "react";
import Layout from "../components/layout";
import Collapse2 from "../components/crearqr-componentes/collapse2";
import MyComponent from "../components/crearqr-componentes/componente1";
import QRCode from 'qrcode.react';
import { toPng, toJpeg, toSvg } from 'html-to-image';
import download from "downloadjs";
import CenteredTabs from "../components/tabs";
import Modall from "../components/modal";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import MapaConMarcador from "../components/mapa";

function Crearqr() {
  const [inputValue, setInputValue] = useState('');
  const [latLng, setLatLng] = useState({ lat: 40.030501, lng: -3.604052 });
  const [qrColor, setQrColor] = useState('black');
  const [qrSize, setQrSize] = useState(100);
  const qrRef = useRef(null);
  const [descargado, setDescargado] = useState(false);
  const [inputType, setInputType] = useState('url');
  const [selectedFormat, setSelectedFormat] = useState('png');

  const handleColorChange = (color) => {
    setQrColor(color);
  };
  
  const handleSizeChange = (size) => {
    setQrSize(parseInt(size, 10));
  };

  const handleFormatChange = (event) => {
    setSelectedFormat(event.target.value);
  };

  const handleDownload1 = async () => {
    if (qrRef.current) {
      let dataUrl;
      if (selectedFormat === 'png') {
        dataUrl = await toPng(qrRef.current);
        setDescargado(true);
      } else if (selectedFormat === 'jpeg') {
        dataUrl = await toJpeg(qrRef.current);
        setDescargado(true);
      } else if (selectedFormat === 'svg') {
        dataUrl = await toSvg(qrRef.current);
        setDescargado(true);
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
  const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
  const colorOptions = ['black', 'blue', 'red', 'green', 'yellow', 'purple', 'orange', 'pink', 'magenta'];

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Layout>
      <div className="qr-generador" style={containerStyle}>
        <h1>GENERADOR DE QR</h1>
        <Collapse2 />

        <div className="white">
          <CenteredTabs 
            inputValue={inputValue} 
            setInputValue={setInputValue} 
            latLng={latLng} 
            setLatLng={setLatLng} 
            setInputType={setInputType}
          /> 
          </div>
          <div ref={qrRef} className="white">
            <br></br>
            <h4>Tu QR generado:</h4>
            <QRCode
              value={inputType === 'coordinates' ? `${latLng.lat},${latLng.lng}` : inputValue}
              size={qrSize}
              fgColor={qrColor}
            />
        
        </div>

        <div className="white">
          <h3>Personaliza tu QR:</h3>
          <MyComponent
            onColorChange={handleColorChange}
            onSizeChange={handleSizeChange}
            colorOptions={colorOptions}
          />
        </div>
        <div className="modales">
          {/* <Modall></Modall> */}
           <Button onClick={handleOpen} className='button-collapse'>Descargar</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <p>Selecciona el formato para descargar el QR</p>
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
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
                  Descargar QR
                </button>
                {descargado && <p className="pdescarga">¡El QR se ha descargado!</p>}
              </Typography>
              <Button onClick={handleClose}>Cerrar</Button>
            </Box>
          </Modal>
        </div>
      </div>
    </Layout>
  );
}

export default Crearqr;

