import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';


export default function IconMenu() {
  return (
    <Paper sx={{ width: 320, maxWidth: '100%' }}>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <ContentCut fontSize="small" />
          </ListItemIcon>
          <ListItemText>
         
     <a href="/profile" role='button' className="">Perfil</a>
      <a href="/page-infoinstitucional" role='button' className="">Información Institucional</a>
      <a href="/crear-qr" role='button' className="">Crear QR</a>
     <a href="/list-qr" role='button' className="">Listado de qr</a>
     <a href="/admin-user" role='button' className="">Administrar empleados</a>
   
          </ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ContentCopy fontSize="small" />
          </ListItemIcon>
          <ListItemText>

          </ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ContentPaste fontSize="small" />
          </ListItemIcon>
          <ListItemText>

          </ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem> 
          <ListItemText>

          </ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}