// src/pages/Users.jsx
// Página de gestión básica de usuarios para el Sprint 1.
// Permite listar usuarios registrados, crear nuevos usuarios y activar/desactivar cuentas.

import { useEffect, useState } from "react";
import api from "../services/api";

function Users() {
  // Lista de usuarios registrados.
  const [users, setUsers] = useState([]);

  // Lista de roles disponibles.
  const [roles, setRoles] = useState([]);

  // Estado del formulario para crear usuarios.
  const [form, setForm] = useState({
    name: "",
    email: "",
    telefono: "",
    password: "",
    role_id: "",
  });

  // Mensajes visuales para éxito o error.
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("success");

  // Carga usuarios y roles cuando la página se abre.
  useEffect(() => {
    loadUsers();
    loadRoles();
  }, []);

  // Obtiene la lista de usuarios desde Laravel.
  const loadUsers = async () => {
    try {
      const response = await api.get("/users");
      setUsers(response.data.users);
    } catch (error) {
      console.error("Error al cargar usuarios:", error);
    }
  };

  // Obtiene la lista de roles desde Laravel.
  const loadRoles = async () => {
    try {
      const response = await api.get("/roles");
      setRoles(response.data.roles);
    } catch (error) {
      console.error("Error al cargar roles:", error);
    }
  };

  // Actualiza los datos del formulario.
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Registra un nuevo usuario en el backend Laravel.
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      await api.post("/users", form);

      setMessageType("success");
      setMessage("Usuario registrado correctamente.");

      setForm({
        name: "",
        email: "",
        telefono: "",
        password: "",
        role_id: "",
      });

      loadUsers();
    } catch (error) {
      const errors = error.response?.data?.errors;

      setMessageType("error");

      if (errors) {
        const firstError = Object.values(errors)[0][0];
        setMessage(firstError);
      } else {
        setMessage("No se pudo registrar el usuario.");
      }
    }
  };

  // Activa o desactiva un usuario.
  const toggleStatus = async (id) => {
    try {
      await api.patch(`/users/${id}/toggle-status`);
      loadUsers();

      setMessageType("success");
      setMessage("Estado del usuario actualizado correctamente.");
    } catch (error) {
      setMessageType("error");
      setMessage("No se pudo actualizar el estado del usuario.");
    }
  };

  return (
    <section className="content-panel">
      <h2>Gestión de usuarios</h2>
      <p>
        En esta sección el administrador puede registrar usuarios básicos del
        sistema y asignarles un rol inicial.
      </p>

      <form className="user-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre completo"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={form.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="telefono"
          placeholder="Teléfono"
          value={form.telefono}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={form.password}
          onChange={handleChange}
        />

        <select name="role_id" value={form.role_id} onChange={handleChange}>
          <option value="">Seleccionar rol</option>
          {roles.map((role) => (
            <option key={role.id} value={role.id}>
              {role.nombre}
            </option>
          ))}
        </select>

        <button type="submit">Registrar usuario</button>
      </form>

      {message && (
        <div
          className={
            messageType === "success" ? "info-message" : "error-message-box"
          }
        >
          {message}
        </div>
      )}

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Teléfono</th>
              <th>Rol</th>
              <th>Estado</th>
              <th>Acción</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.telefono || "Sin teléfono"}</td>
                <td>{user.role?.nombre || "Sin rol"}</td>
                <td>
                  <span className={user.estado ? "status-ok" : "status-danger"}>
                    {user.estado ? "Activo" : "Inactivo"}
                  </span>
                </td>
                <td>
                  <button
                    className="table-button"
                    onClick={() => toggleStatus(user.id)}
                  >
                    {user.estado ? "Desactivar" : "Activar"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Users;