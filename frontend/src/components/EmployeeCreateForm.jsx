import { useState } from "react";
import { createEmployee } from "../api/employees";

export default function EmployeeCreateForm({ onCreated }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    department: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // onCreate() wird an EmployeeList.jsx übergeben
  // nach dem Speichern wird die LIste automatisch aktualisiert
  // das Formular wird zurückgesetzt
  async function handleSubmit(e) {
    e.preventDefault();
    const newEmployee = await createEmployee(form);
    onCreated(newEmployee);   // Liste aktualisieren
    setForm({ name: "", email: "", department: "" });
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      <input
        name="department"
        placeholder="Department"
        value={form.department}
        onChange={handleChange}
      />
      <button type="submit">Mitarbeiter anlegen</button>
    </form>
  );
}
