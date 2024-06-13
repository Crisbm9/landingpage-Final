
import React, { useState } from 'react';
import { FaQuestionCircle } from "react-icons/fa";

function Collapse({ isCollapsed, children }) {
  const [show, setShow] = useState(isCollapsed);

  const handleToggle = () => {
    setShow(!show);
  };

  return (
    <div className={`collapse ${show ? 'show' : ''}`}>
      <button onClick={handleToggle} className='button-collapse'>
      Ayuda<FaQuestionCircle className='icono'/>
      </button>
      {show && children}
    </div>
  );
}

export default Collapse;