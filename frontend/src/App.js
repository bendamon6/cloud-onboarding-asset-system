import StatusBanner from "./components/StatusBanner";
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";

export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <StatusBanner />
      <EmployeeForm />
      <EmployeeList />
    </div>
  );
}
