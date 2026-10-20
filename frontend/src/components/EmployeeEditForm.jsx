import { useState } from "react";
import { updateEmployee } from "../api/employees";

export default function EmployeeEditForm({ employee, onUpdated, onCancel }) {
  const [form, setForm] = useState({
    first_name: employee.first_name,
    last_name: employee.last_name,
    email: employee.email,
    department: employee.department
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateEmployee(employee.id, form);
    onUpdated();
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
      <h3>Mitarbeiter bearbeiten</h3>

      <input
        name="first_name"
        value={form.first_name}
        onChange={handleChange}
        required
      />
      <input
        name="last_name"
        value={form.last_name}
        onChange={handleChange}
        required
      />
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        name="department"
        value={form.department}
        onChange={handleChange}
      />

      <button type="submit" style={{ marginLeft: "10px" }}>
        Speichern
      </button>

      <button
        type="button"
        style={{ marginLeft: "10px" }}
        onClick={onCancel}
      >
        Abbrechen
      </button>
    </form>
  );
}
