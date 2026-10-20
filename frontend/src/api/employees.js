import client from "./client";

export function getEmployees() {
  return client.get("/employees");
}

export function createEmployee(data) {
  return client.post("/employees", data);
}

export function updateEmployee(id, data) {
  return client.put(`/employees/${id}`, data);
}

export function deleteEmployee(id) {
  return client.delete(`/employees/${id}`);
}
