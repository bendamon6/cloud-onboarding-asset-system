import { useEffect, useState } from "react";
import {
  getEmployees,
  deleteEmployee
} from "../api/employees";
import EmployeeCreateForm from "./EmployeeCreateForm";
import EmployeeEditForm from "./EmployeeEditForm";

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null);

  const loadEmployees = () => {
    getEmployees()
      .then((res) => setEmployees(res))
      .catch((error) => {
        console.error("Failed to load employees:", error);
        setEmployees([]);   // ← verhindert weißen Bildschirm
      });
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  return (
    <div>
      <h2>Mitarbeiter</h2>

      <EmployeeCreateForm onCreated={loadEmployees} />

      <ul>
        {employees.map((e) => (
          <li key={e.id} style={{ marginBottom: "10px" }}>
            <strong>{e.name}</strong> – {e.email}

            <button
              style={{ marginLeft: "10px" }}
              onClick={() => setEditingEmployee(e)}
            >
              Bearbeiten
            </button>

            <button
              style={{ marginLeft: "10px", color: "red" }}
              onClick={async () => {
                await deleteEmployee(e.id);
                loadEmployees();
              }}
            >
              Löschen
            </button>
          </li>
        ))}
      </ul>

      {editingEmployee && (
        <EmployeeEditForm
          employee={editingEmployee}
          onUpdated={() => {
            setEditingEmployee(null);
            loadEmployees();
          }}
          onCancel={() => setEditingEmployee(null)}
        />
      )}
    </div>
  );
}
