
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [status, setStatus] = useState("Checking...");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/health")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Backend request failed");
        }
        return response.json();
      })
      .then((data) => {
        setStatus(data.status);
        setMessage(data.application);
      })
      .catch(() => {
        setStatus("Offline");
        setMessage("Could not connect to backend");
      });
  }, []);

  return (
    <main className="container">
      <h1>RepoLens</h1>
      <p>AI-powered Codebase Intelligence Platform</p>

      <section className="status-card">
        <h2>Backend Connection</h2>
        <p>Status: <strong>{status}</strong></p>
        <p>Application: {message}</p>
      </section>
    </main>
  );
}

export default App;
