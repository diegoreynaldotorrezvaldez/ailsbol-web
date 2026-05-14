// src/pages/Login.jsx
// Pantalla de inicio de sesión de AILSBOL WEB.
// Esta pantalla envía el correo y contraseña al backend Laravel.

import { useState } from "react";
import api from "../services/api";
import logo from "../assets/logo-ailsbol.png";

function Login({ onLogin }) {
  // Estados para capturar los datos del formulario.
  const [email, setEmail] = useState("admin@ailsbol.org");
  const [password, setPassword] = useState("admin12345");

  // Estado para mostrar mensajes de error o carga.
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Función que se ejecuta al enviar el formulario.
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Enviamos los datos al endpoint de login creado en Laravel.
      const response = await api.post("/login", {
        email,
        password,
      });

      // Si el login es correcto, guardamos el usuario en el estado principal.
      if (response.data.success) {
        onLogin(response.data.user);
      }
    } catch (err) {
      // Si Laravel devuelve error, mostramos el mensaje correspondiente.
      const message =
        err.response?.data?.message || "No se pudo iniciar sesión.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-left">
        <img src={logo} alt="Logo AILSBOL" className="login-logo" />

        <h1>AILSBOL WEB</h1>
        <p>
          Plataforma integral para la gestión, formación y acreditación de
          intérpretes de Lengua de Señas Boliviana.
        </p>

        <div className="login-badges">
          <span>Formación virtual</span>
          <span>Gestión institucional</span>
          <span>Acreditación</span>
        </div>
      </div>

      <div className="login-right">
        <form className="login-card" onSubmit={handleSubmit}>
          <h2>Iniciar sesión</h2>
          <p className="login-subtitle">
            Ingresa con tu cuenta institucional para acceder al sistema.
          </p>

          <label>Correo electrónico</label>
          <input
            type="email"
            placeholder="admin@ailsbol.org"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Contraseña</label>
          <input
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <div className="error-message">{error}</div>}

          <button type="submit" disabled={loading}>
            {loading ? "Ingresando..." : "Ingresar"}
          </button>

          <small>
            Usuario de prueba: admin@ailsbol.org / admin12345
          </small>
        </form>
      </div>
    </div>
  );
}

export default Login;