import { useState } from "react";
import { updateTask } from "../api/tasks";

export default function TaskEditForm({ task, onUpdated, onCancel }) {
  const [title, setTitle] = useState(task.title);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateTask(task.id, { title });
    onUpdated();
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
      <h3>Task bearbeiten</h3>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <button type="submit" style={{ marginLeft: "10px" }}>
        Speichern
      </button>

      <button
        type="button"
        style={{ marginLeft: "10px" }}
        onClick={onCancel}
      >
        Abbrechen
      </button>
    </form>
  );
}
