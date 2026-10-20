import { useEffect, useState } from "react";
import { getTasks, deleteTask, updateTask, completeTask } from "../api/tasks";
import TaskCreateForm from "./TaskCreateForm";
import TaskEditForm from "./TaskEditForm";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const loadTasks = () => {
    getTasks()
      .then((res) => setTasks(res.data))
      .catch(() => setTasks([]));
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div>
      <h2>Tasks</h2>

      <TaskCreateForm onCreated={loadTasks} />

      <ul>
        {tasks.map((t) => (
          <li key={t.id} style={{ marginBottom: "10px" }}>
            <strong>{t.title}</strong> – {t.status}

            <button
              style={{ marginLeft: "10px" }}
              onClick={() => setEditingTask(t)}
            >
              Bearbeiten
            </button>

            <button
              style={{ marginLeft: "10px", color: "red" }}
              onClick={async () => {
                await deleteTask(t.id);
                loadTasks();
              }}
            >
              Löschen
            </button>

            <button
              style={{ marginLeft: "10px", color: "green" }}
              disabled={t.status === "completed"}
              onClick={async () => {
                await completeTask(t.id);
                loadTasks();
              }}
            >
              Fertig
            </button>
          </li>
        ))}
      </ul>

      {editingTask && (
        <TaskEditForm
          task={editingTask}
          onUpdated={() => {
            setEditingTask(null);
            loadTasks();
          }}
          onCancel={() => setEditingTask(null)}
        />
      )}
    </div>
  );
}
