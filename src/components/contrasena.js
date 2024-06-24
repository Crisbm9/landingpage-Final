import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    const url = '/'; ////////////////////meter aqui cuando tenga la api hecha

    
    const requestBody = new FormData();
    requestBody.append('email', email);

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: requestBody,
      });

      if (response.ok) {
        const responseData = await response.json();
        if (responseData.success) {
          setSuccess(true);
          console.log('Correo de restablecimiento enviado');
          
        } else {
          setError(responseData.message);
        }
      } else {
        setError('Error al enviar el correo de restablecimiento');
      }
    } catch (error) {
      console.error(error);
      setError('Error al enviar el correo de restablecimiento');
    }
  };

  return (
    <div className="forgot-password">
      <h2>¿Olvidaste tu contraseña?</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {error && <p className="error">{error}</p>}
        {success && <p className="success">Correo de restablecimiento enviado</p>}
        <button type="submit">Enviar correo de restablecimiento</button>
      </form>
    </div>
  );
};

export default ForgotPassword;