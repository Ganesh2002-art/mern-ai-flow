import { useState } from "react";
import ReactFlow from "reactflow";
import "reactflow/dist/style.css";
import axios from "axios";
import { initialNodes, edges } from "./flow";

const BASE_URL = "https://mern-ai-flow-1.onrender.com"; // ✅ your backend

function App() {
  const [nodes, setNodes] = useState(initialNodes);
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const runFlow = async () => {
    if (!prompt) {
      alert("Enter prompt");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(`${BASE_URL}/api/ask-ai`, {
        prompt,
      });

      setResult(res.data.result);

      setNodes((nds) =>
        nds.map((node) =>
          node.id === "2"
            ? { ...node, data: { label: res.data.result } }
            : node
        )
      );
    } catch (err) {
      console.error(err);
      alert("Error fetching AI");
    } finally {
      setLoading(false);
    }
  };

  const saveData = async () => {
    if (!result) {
      alert("Run flow first");
      return;
    }

    try {
      await axios.post(`${BASE_URL}/api/save`, {
        prompt,
        response: result,
      });

      alert("Saved to MongoDB ✅");
    } catch (err) {
      console.error(err);
      alert("Save failed");
    }
  };

  return (
    <div style={{ height: "100vh", padding: 20 }}>
      <h2>🚀 AI Flow App (Vite)</h2>

      <input
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Type your prompt..."
        style={{ width: 300, padding: 8 }}
      />

      <button onClick={runFlow} style={{ marginLeft: 10 }}>
        {loading ? "Running..." : "Run Flow"}
      </button>

      <button onClick={saveData} style={{ marginLeft: 10 }}>
        Save
      </button>

      {loading && <p>🤖 Thinking...</p>}

      <div style={{ height: "80%", marginTop: 20 }}>
        <ReactFlow nodes={nodes} edges={edges} />
      </div>
    </div>
  );
}

export default App;