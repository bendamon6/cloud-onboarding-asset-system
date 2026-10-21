import client from "./client";

export async function getTasks() {
  const response = await client.get("/tasks/");
  return response.data;   // ← WICHTIG
}


export function createTask(data) {
  return client.post("/tasks/", data);
}

export function updateTask(id, data) {
  return client.put(`/tasks/${id}`, data);
}

export function deleteTask(id) {
  return client.delete(`/tasks/${id}`);
}

export function completeTask(id) {
  return client.put(`/tasks/${id}/complete/`);
}
