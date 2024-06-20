import * as React from "react"

const LoginForm = () => {

  return (
   <> 
   <h2>Inicio de sesión</h2>
          <label htmlFor="username">Usuario:</label>
          <input type="text" id="username" name="username" placeholder="Usuario" required />
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" name="password" placeholder="Contraseña" required />
          <button type="submit">Acceder</button>
          <br></br>
          <br></br>
          <a href="#" role='button' >¿Olvidaste tu contraseña?</a>
          <br></br>
          <br></br>
          <a href="/formulario" role='button' >Registrarse</a>
     
      </>
    );
  };
export default LoginForm;
