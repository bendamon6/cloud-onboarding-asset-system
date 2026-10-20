import client from "./client";

export function getTasks() {
  return client.get("/tasks");
}

export function createTask(data) {
  return client.post("/tasks", data);
}

export function updateTask(id, data) {
  return client.put(`/tasks/${id}`, data);
}

export function deleteTask(id) {
  return client.delete(`/tasks/${id}`);
}

export function completeTask(id) {
  return client.put(`/tasks/${id}/complete`);
}
