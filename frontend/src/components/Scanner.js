

import React, { useState } from "react";
import axios from "axios";
import {
  AiOutlineCheckCircle,
  AiOutlineWarning,
  AiOutlineLoading3Quarters,
} from "react-icons/ai";
import "../styles/scanner.css";

const Scanner = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCheck = async () => {
    if (!text.trim()) return;
    setLoading(true);
    setResult(null);
    try {
      // Node backend must be running on port 5000
      const res = await axios.post("http://localhost:5000/api/detect", { text }, { timeout: 5000 });
      setResult(res.data);
    } catch (error) {
      console.error("Frontend -> Backend error:", error.message);
      setResult({
        isScam: false,
        message: "❌ Failed to connect to detection service",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setText("");
    setResult(null);
  };

  return (
    <div className="scanner-page">
      <div className="scanner-card">
        <h1 className="scanner-title">🔍 Scam Detection AI</h1>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste any email or message here..."
          className="scanner-textarea"
        />

        <div className="scanner-actions">
          <button className="btn-detect" onClick={handleCheck} disabled={loading}>
            {loading ? <AiOutlineLoading3Quarters className="spin" /> : "Detect Scam"}
          </button>
          <button className="btn-clear" onClick={handleClear}>Clear</button>
        </div>

        <div className="char-count">{text.length} characters</div>

        {result && (
          <div className={`result-box ${result.isScam ? "result-scam" : "result-safe"}`}>
            {result.isScam ? <AiOutlineWarning className="icon" /> : <AiOutlineCheckCircle className="icon" />}
            <div className="result-text">
              <div className="msg">{result.message || (result.isScam ? "⚠️ Scam Detected!" : "✅ Message is Safe")}</div>
              {typeof result.probability !== "undefined" && (
                <div className="prob">Confidence: {result.probability}%</div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Scanner;
