
import EmployeeList from "./components/EmployeeList";
import TaskList from "./components/TaskList";

console.log("App.jsx wird geladen!");

export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Cloud Onboarding Asset System</h1>

      <EmployeeList />
      <TaskList />
    </div>
  );
}
