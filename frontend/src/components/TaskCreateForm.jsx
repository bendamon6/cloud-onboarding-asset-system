import { useState } from "react";
import { createTask } from "../api/tasks";

export default function TaskCreateForm({ onCreated }) {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTask({ title });
    setTitle("");
    onCreated();
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Task Titel"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <button type="submit" style={{ marginLeft: "10px" }}>
        Erstellen
      </button>
    </form>
  );
}
