import { useState } from "react";
import { createEmployee } from "../api/client";

export default function EmployeeForm() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  async function submit(e) {
    e.preventDefault();
    await createEmployee({ name, role, start_date: "2024-01-01" });
    alert("Mitarbeiter angelegt!");
  }

  return (
    <form onSubmit={submit}>
      <h2>Mitarbeiter anlegen</h2>
      <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="Rolle" value={role} onChange={(e) => setRole(e.target.value)} />
      <button type="submit">Speichern</button>
    </form>
  );
}
