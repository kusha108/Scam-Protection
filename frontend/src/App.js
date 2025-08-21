import React, { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleSubmit = async () => {
    if (!text.trim()) return;
    setLoading(true);
    setResult("");

    // Simulate API call (replace with real backend)
    setTimeout(() => {
      const isScam =
        text.toLowerCase().includes("prince") ||
        text.toLowerCase().includes("lottery");
      setResult(isScam ? "Scam Detected 🚨" : "Message is Safe ✅");
      setLoading(false);
    }, 1500);
  };

  const handleClear = () => {
    setText("");
    setResult("");
  };

  return (
    <div className="app">
      <div className="card">
        <h1 className="neon-heading">🔍 Scam Detection AI</h1>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste email or message here..."
          rows="6"
        />
        <div className="actions">
          <button onClick={handleSubmit} disabled={!text || loading}>
            {loading && <AiOutlineLoading3Quarters className="spinner" />}
            {loading ? "Analyzing..." : "Detect Scam"}
          </button>
          <button onClick={handleClear} className="clear">
            Clear
          </button>
        </div>
        <div className="status">
          {text && (
            <p className="text-sm text-gray-400">{text.length} characters</p>
          )}
          {result && (
            <p
              className={`result ${
                result.includes("Scam") ? "danger" : "safe"
              }`}
            >
              {result}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
