import { useEffect, useState } from "react";
import { getEmployees } from "../api/client";

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getEmployees().then(setEmployees);
  }, []);

  return (
    <div>
      <h2>Mitarbeiter</h2>
      {employees.map((e) => (
        <div key={e.id}>{e.name} – {e.role}</div>
      ))}
    </div>
  );
}
