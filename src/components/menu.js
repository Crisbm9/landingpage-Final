import React, { useEffect, useState } from "react";

import "./layout.css"

export default function Menu() {
  const [role, setRole] = useState(null);
  const [name, setName] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setRole(localStorage.getItem('tandem_role'));
      setName(localStorage.getItem('tandem_nombre'));
    }
  }, []);

  if (!role) return null; // Return null or a loading spinner while role is being fetched

  if (role === 'guest') {
    return (<>
                  <a className="enlacemenu" href="/profile"
                  >
                    Perfil
                  </a>
                
                  <a className="enlacemenu" href="/info"
                  >
                    Información Institucional
                  </a>
          </>      
    );
  }

  if (role === 'employee') {
    return (<>
                  <a className="enlacemenu" href="/profile"
                  >
                    Perfil
                  </a>
                  <a className="enlacemenu" href="/info"
                  >
                    Información Institucional
                  </a>
                  <a className="enlacemenu" href="/crearqr"
                  >
                    Crear QR
                  </a>
                  <a className="enlacemenu" href="/misqr"
                  >
                    Mis QR
                  </a>
                  </>
    );
  }

  if (role === 'admin') {
    return (<>
                  <a className="enlacemenu" href="/profile"
                  >
                    Perfil
                  </a>
                  <a className="enlacemenu" href="/info"
                  >
                    Información Institucional
                  </a>
                  <a className="enlacemenu" href="/crearqr"
                  >
                    Crear QR
                  </a>
                  <a className="enlacemenu" href="/listqr"
                  >
                    Listado de QR
                  </a>
                  <a className="enlacemenu" href="/adminuser"
                  >
                    Administrar empleados
                  </a>
                  </>
    );
  }

  return null;
}