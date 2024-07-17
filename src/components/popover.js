
import React from 'react'
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { StaticImage } from "gatsby-plugin-image"
import CerrarSesion from './cerrarsesion';

export default function Pipiver (){
   const [anchorEl, setAnchorEl] = React.useState(null);
   const handleClick = (event) => {
     setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
     setAnchorEl(null);
   };
   const rol = localStorage.getItem('tandem_role')
   const email = localStorage.getItem('tandem_email')
   const open = Boolean(anchorEl);
   const id = open ? 'simple-popover' : undefined;
  
   if(rol=='guest'){
     return(
         <>
         <div>
             <Button aria-describedby={id} variant="contained" style={{color: `white`,backgroundColor: `#4e517a`}} onClick={handleClick}>
             <StaticImage
        src="../images/perfill.png"
        loading="eager"
        width={43}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
            {/* popover */}
             </Button>
             <Popover
                 id={id}
                 open={open}
                 anchorEl={anchorEl}
                 onClose={handleClose}
                 anchorOrigin={{
                 vertical: 'bottom',
                 horizontal: 'left',
                 }}
             >
                 <Typography sx={{ p: 2 }}  style={{}}>
           
        <ul>
        <li><a href="/profile" role='button' className='aform'>Perfil</a></li>
        <li><a href="/invitado" role='button' className='aform'>Inicio</a></li>
        <li><CerrarSesion></CerrarSesion></li>
        </ul>
                
                 </Typography>
             </Popover>
             </div>
    
         </>
     )
 }
   if(rol=='employee'){
     return(
         <>
         <div>
             <Button aria-describedby={id} variant="contained" style={{color: `white`,backgroundColor: `#4e517a`}} onClick={handleClick}>
             <StaticImage
        src="../images/perfill.png"
        loading="eager"
        width={43}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
                 {/* popover */}
             </Button>
             <Popover
                 id={id}
                 open={open}
                 anchorEl={anchorEl}
                 onClose={handleClose}
                 anchorOrigin={{
                 vertical: 'bottom',
                 horizontal: 'left',
                 }}
             >
                 <Typography sx={{ p: 2 }}  style={{}}>
           
        <ul>
        <li><a href="/profile" role='button' className='aform'>Perfil</a></li>
        <li><a href="/invitado" role='button' className='aform'>Inicio</a></li>
        <li><CerrarSesion></CerrarSesion></li>
        </ul>
                 
                 </Typography>
             </Popover>
             </div>
    
         </>
     )
 }
   if(rol=='admin'){
     return(
         <>
         <div>
             <Button aria-describedby={id} variant="contained" style={{color: `white`,backgroundColor: `#4e517a`}} onClick={handleClick}>
             <StaticImage
        src="../images/perfill.png"
        loading="eager"
        width={43}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
             {/* Popover */}
             </Button>
             <Popover
                 id={id}
                 open={open}
                 anchorEl={anchorEl}
                 onClose={handleClose}
                 anchorOrigin={{
                 vertical: 'bottom',
                 horizontal: 'left',
                 }}
             >
                 <Typography sx={{ p: 2 }}  style={{}}>
           
        <ul>
        <li><a href="/profile" role='button' className='aform'>Perfil</a></li>
        <li><a href="/invitado" role='button' className='aform'>Inicio</a></li>
        <li><CerrarSesion></CerrarSesion></li>
        </ul>
                 </Typography>
             </Popover>
             </div>
    
         </>
     )
 
   }
};