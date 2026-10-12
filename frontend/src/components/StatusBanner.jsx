import { useEffect, useState } from "react";
import { getStatus } from "../api/client";

export default function StatusBanner() {
  const [status, setStatus] = useState("checking...");

  useEffect(() => {
    getStatus().then((data) => setStatus(data.status));
  }, []);

  return (
    <div style={{ padding: "10px", background: status === "online" ? "green" : "red", color: "white" }}>
      Systemstatus: {status}
    </div>
  );
}
