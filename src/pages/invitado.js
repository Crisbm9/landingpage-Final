import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from 'gatsby';
import { Button } from '@mui/material';

export default function Invitado() {
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
    return (
      <Layout>
        <div className="qrinicio">
          <h1>¡Bienvenido {name}!</h1>
          <div className="contenedor">
            <div className="columna">
              <StaticImage
                src="../images/escaleras.jpg"
                loading="eager"
                width={1000}
                height={700}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt=""
                style={{ marginBottom: `var(--space-3)` }}
              />
            </div>
            <div className="columna">
              <ul>
                <li>
                  <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to="/profile"
                  >
                    Perfil
                  </Button>
                </li>
                <li>
                  <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to="/info"
                  >
                    Información Institucional
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (role === 'employee') {
    return (
      <Layout>
        <div className="qrinicio">
          <h1>¡Bienvenido {name}!</h1>
          <div className="contenedor">
            <div className="columna">
              <StaticImage
                src="../images/escaleras.jpg"
                loading="eager"
                width={1000}
                height={700}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt=""
                style={{ marginBottom: `var(--space-3)` }}
              />
            </div>
            <div className="columna">
              <ul>
                <li>
                  <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to="/profile"
                  >
                    Perfil
                  </Button>
                </li>
                <li>
                  <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to="/info"
                  >
                    Información Institucional
                  </Button>
                </li>
                <li>
                  <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to="/crearqr"
                  >
                    Crear QR
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (role === 'admin') {
    return (
      <Layout>
        <div className="qrinicio">
          <h1>¡Bienvenido {name}!</h1>
          <div className="contenedor">
            <div className="columna">
              <StaticImage
                src="../images/escaleras.jpg"
                loading="eager"
                width={1000}
                height={700}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt=""
                style={{ marginBottom: `var(--space-3)` }}
              />
            </div>
            <div className="columna">
              <ul>
                <li>
                  <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to="/profile"
                  >
                    Perfil
                  </Button>
                </li>
                <li>
                  <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to="/info"
                  >
                    Información Institucional
                  </Button>
                </li>
                <li>
                  <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to="/crearqr"
                  >
                    Crear QR
                  </Button>
                </li>
                <li>
                  <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to="/listqr"
                  >
                    Listado de QR
                  </Button>
                </li>
                <li>
                  <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to="/adminuser"
                  >
                    Administrar empleados
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return null;
}


