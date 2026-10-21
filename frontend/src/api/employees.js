import client from "./client";

export async function getEmployees() {
  const response = await client.get("/employees/");
  return response.data;
}

export async function createEmployee(employee) {
  const response = await client.post("/employees/", employee);
  return response.data;
}

export async function deleteEmployee(id) {
  const response = await client.delete(`/employees/${id}`);
  return response.data;
}

export async function updateEmployee(id, data) {
  const response = await client.put(`/employees/${id}`, data);
  return response.data;
}
