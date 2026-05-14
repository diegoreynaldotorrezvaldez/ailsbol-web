// src/App.jsx
// Componente principal de AILSBOL WEB.
// Maneja rutas reales, sesión local y protección básica del dashboard.
// Si el usuario cierra sesión, no podrá volver al panel usando atrás/adelante del navegador.

import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import "./styles/app.css";

function AppContent() {
  // Estado donde se guarda el usuario autenticado.
  const [user, setUser] = useState(null);

  // Hook para navegar entre páginas.
  const navigate = useNavigate();

  // Revisa si existe sesión guardada en localStorage.
  const checkSession = () => {
    const savedUser = localStorage.getItem("ailsbol_user");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else {
      setUser(null);
    }
  };

  // Al iniciar la aplicación, verifica sesión.
  useEffect(() => {
    checkSession();

    // Este evento ayuda cuando el navegador restaura páginas con atrás/adelante.
    const handlePageShow = () => {
      checkSession();
    };

    window.addEventListener("pageshow", handlePageShow);

    return () => {
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, []);

  // Login correcto.
  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem("ailsbol_user", JSON.stringify(userData));

    // replace evita que el login quede guardado como pantalla anterior.
    navigate("/dashboard", { replace: true });
  };

  // Cerrar sesión.
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("ailsbol_user");

    // Redirige al login y reemplaza el historial.
    // Así no permite volver al dashboard con atrás/adelante.
    navigate("/login", { replace: true });
  };

  return (
    <Routes>
      {/* Página pública institucional */}
      <Route
        path="/"
        element={<Home onGoLogin={() => navigate("/login")} />}
      />

      {/* Login */}
      <Route
        path="/login"
        element={
          user ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <Login onLogin={handleLogin} />
          )
        }
      />

      {/* Dashboard protegido */}
      <Route
        path="/dashboard"
        element={
          user ? (
            <Dashboard user={user} onLogout={handleLogout} />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      {/* Cualquier ruta incorrecta vuelve al inicio */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;