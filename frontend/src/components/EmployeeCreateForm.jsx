import { useState } from "react";
import { createEmployee } from "../api/employees";

export default function EmployeeCreateForm({ onCreated }) {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    department: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createEmployee(form);
    setForm({
      first_name: "",
      last_name: "",
      email: "",
      department: "",
    });
    onCreated(); // Liste neu laden
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        name="first_name"
        placeholder="Vorname"
        value={form.first_name}
        onChange={handleChange}
        required
      />
      <input
        name="last_name"
        placeholder="Nachname"
        value={form.last_name}
        onChange={handleChange}
        required
      />
      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        name="department"
        placeholder="Abteilung"
        value={form.department}
        onChange={handleChange}
      />

      <button type="submit" style={{ marginLeft: "10px" }}>
        Mitarbeiter anlegen
      </button>
    </form>
  );
}
