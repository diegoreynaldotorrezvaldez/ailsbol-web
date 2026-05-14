// src/pages/Roles.jsx
// Página de visualización de roles del sistema.
// En el Sprint 1 se muestran los roles iniciales definidos en la base de datos.

import { useEffect, useState } from "react";
import api from "../services/api";

function Roles() {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    loadRoles();
  }, []);

  // Consulta los roles registrados en Laravel.
  const loadRoles = async () => {
    const response = await api.get("/roles");
    setRoles(response.data.roles);
  };

  return (
    <section className="content-panel">
      <h2>Roles del sistema</h2>
      <p>
        Los roles permiten controlar el acceso de los usuarios a las funciones
        disponibles dentro de AILSBOL WEB.
      </p>

      <div className="roles-grid">
        {roles.map((role) => (
          <div className="role-card" key={role.id}>
            <h3>{role.nombre}</h3>
            <p>{role.descripcion}</p>
            <span>{role.estado ? "Activo" : "Inactivo"}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Roles;