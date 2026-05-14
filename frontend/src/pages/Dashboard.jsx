// src/pages/Dashboard.jsx
// Panel administrativo inicial del Sprint 1.
// Contiene navegación básica hacia Dashboard, Usuarios y Roles.

import { useEffect, useState } from "react";
import logo from "../assets/logo-ailsbol.png";
import api from "../services/api";
import Users from "./Users";
import Roles from "./Roles";

function Dashboard({ user, onLogout }) {
  // Vista activa dentro del panel administrativo.
  const [activePage, setActivePage] = useState("dashboard");
  // Datos estadísticos básicos del dashboard.
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalRoles: 0,
    activeUsers: 0,
    inactiveUsers: 0,
  });

  // Carga los datos reales desde Laravel cuando se abre el panel.
  useEffect(() => {
    loadDashboardStats();
  }, []);

  // Consulta usuarios y roles para calcular estadísticas iniciales.
  const loadDashboardStats = async () => {
    try {
      const usersResponse = await api.get("/users");
      const rolesResponse = await api.get("/roles");

      const users = usersResponse.data.users || [];
      const roles = rolesResponse.data.roles || [];

      setStats({
        totalUsers: users.length,
        totalRoles: roles.length,
        activeUsers: users.filter((u) => u.estado).length,
        inactiveUsers: users.filter((u) => !u.estado).length,
      });
    } catch (error) {
      console.error("Error al cargar estadísticas del dashboard:", error);
    }
  };
  // Renderiza el contenido según la opción seleccionada en el menú.
  const renderContent = () => {
    if (activePage === "users") {
      return <Users />;
    }

    if (activePage === "roles") {
      return <Roles />;
    }

    return (
      <>
               <section className="cards-grid">
          <div className="stat-card">
            <span>Usuarios</span>
            <h2>{stats.totalUsers}</h2>
            <p>Usuarios registrados</p>
          </div>

          <div className="stat-card">
            <span>Roles</span>
            <h2>{stats.totalRoles}</h2>
            <p>Roles iniciales del sistema</p>
          </div>

          <div className="stat-card">
            <span>Usuarios activos</span>
            <h2>{stats.activeUsers}</h2>
            <p>Cuentas habilitadas</p>
          </div>

          <div className="stat-card">
            <span>Usuarios inactivos</span>
            <h2>{stats.inactiveUsers}</h2>
            <p>Cuentas deshabilitadas</p>
          </div>
        </section>
        
        <section className="content-panel">
          <h2>Avance del Sprint 1</h2>
          <p>
            El Sprint 1 contempla la autenticación, gestión inicial de roles y
            visualización del panel administrativo. Esta base permitirá
            incorporar posteriormente los módulos de formación, intérpretes,
            solicitudes, pagos, certificados y credenciales.
          </p>

          <div className="progress-list">
            <div>
              <strong>Login conectado al backend Laravel</strong>
              <span>Completado</span>
            </div>
            <div>
              <strong>Base de datos MySQL configurada</strong>
              <span>Completado</span>
            </div>
            <div>
              <strong>Roles iniciales creados</strong>
              <span>Completado</span>
            </div>
            <div>
              <strong>Gestión básica de usuarios</strong>
              <span>En desarrollo</span>
            </div>
          </div>
        </section>
      </>
    );
  };

  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <div className="sidebar-logo">
          <img src={logo} alt="Logo AILSBOL" />
          <div>
            <h3>AILSBOL</h3>
            <span>Panel administrativo</span>
          </div>
        </div>

        <nav className="sidebar-menu">
          <button
            className={activePage === "dashboard" ? "active" : ""}
            onClick={() => setActivePage("dashboard")}
          >
            Dashboard
          </button>

          <button
            className={activePage === "users" ? "active" : ""}
            onClick={() => setActivePage("users")}
          >
            Usuarios
          </button>

          <button
            className={activePage === "roles" ? "active" : ""}
            onClick={() => setActivePage("roles")}
          >
            Roles
          </button>

          <button>Formación</button>
          <button>Estudiantes</button>
          <button>Intérpretes</button>
          <button>Solicitudes</button>
          <button>Pagos</button>
          <button>Certificados</button>
          <button>Credenciales</button>
          <button>Reportes</button>
        </nav>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <h1>Panel administrativo</h1>
            <p>Bienvenido al Sprint 1 de AILSBOL WEB.</p>
          </div>

          <div className="user-box">
            <span>{user?.name}</span>
            <small>{user?.role?.nombre}</small>
            <button onClick={onLogout}>Cerrar sesión</button>
          </div>
        </header>

        {renderContent()}
      </main>
    </div>
  );
}

export default Dashboard;