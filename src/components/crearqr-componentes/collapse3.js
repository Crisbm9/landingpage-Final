import React, { useState } from 'react';

function Collapse3({ isCollapsed, children }) {
  const [show, setShow] = useState(isCollapsed);

  const handleToggle = () => {
    setShow(!show);
  };

  return (
    <div className={`collapse ${show ? 'show' : ''}`}>
      <button onClick={handleToggle} className='button-collapse'>Opciones de descarga</button>
      {show && children}
    </div>
  );
}

export default Collapse3;