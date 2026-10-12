const API_BASE = "http://localhost:8000";

export async function getStatus() {
  const res = await fetch(`${API_BASE}/status`);
  return res.json();
}

export async function getEmployees() {
  const res = await fetch(`${API_BASE}/employees/list`);
  return res.json();
}

export async function createEmployee(data) {
  const res = await fetch(`${API_BASE}/employees/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return res.json();
}
