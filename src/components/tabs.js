import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { useState, useRef } from "react";

// Componente para el contenido de cada tab
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="URL" />
        <Tab label="Texto" />
        {/* <Tab label="Coordenadas" /> */}
      </Tabs>
      <TabPanel value={value} index={0}>
      <h3>Introduce tu URL:</h3>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <h3>Introduce tu Texto:</h3>
      </TabPanel>
      {/* <TabPanel value={value} index={2}>
      Introduce tus Coordenadas:
      </TabPanel> */}
    </Box>
  );
}