<<<<<<< HEAD
import React, { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
=======
// import React, { useState } from 'react';
// import axios from 'axios';
// import ResultCard from './components/ResultCard';
// import './styles/global.css';

// function App() {
//   const [text, setText] = useState('');
//   const [result, setResult] = useState(null);

//   const checkScam = async () => {
//     const res = await axios.post('http://localhost:5000/api/detect', { text });
//     setResult(res.data);
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4">
//       <h1 className="text-3xl font-bold mb-4">Scam Detection AI</h1>
//       <textarea
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="Paste email or message here..."
//         className="w-full max-w-xl h-40 p-4 text-black rounded-lg resize-none"
//       />
//       <button
//         onClick={checkScam}
//         className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold"
//       >
//         Detect Scam
//       </button>
//       {result && <ResultCard result={result} />}
//     </div>
//   );
// }

// export default App;
// App.js
import React, { useState } from "react";
>>>>>>> 2fc15a662625aafe840c8b2d1efd9e249d5f08d6
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleSubmit = async () => {
<<<<<<< HEAD
    if (!text.trim()) return;
    setLoading(true);
    setResult("");

    // Simulate API call (replace with real backend)
    setTimeout(() => {
      const isScam =
        text.toLowerCase().includes("prince") ||
        text.toLowerCase().includes("lottery");
=======
    setLoading(true);
    setResult("");

    // Simulate API call (replace with your real backend call)
    setTimeout(() => {
      const isScam = text.toLowerCase().includes("prince") || text.toLowerCase().includes("lottery");
>>>>>>> 2fc15a662625aafe840c8b2d1efd9e249d5f08d6
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
<<<<<<< HEAD
        <h1 className="neon-heading">🔍 Scam Detection AI</h1>
=======
        <h1>🔍 Scam Detection AI</h1>
>>>>>>> 2fc15a662625aafe840c8b2d1efd9e249d5f08d6
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste email or message here..."
          rows="6"
        />
        <div className="actions">
          <button onClick={handleSubmit} disabled={!text || loading}>
<<<<<<< HEAD
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
=======
            {loading ? "Analyzing..." : "Detect Scam"}
          </button>
          <button onClick={handleClear} className="clear">Clear</button>
        </div>
        <div className="status">
          {text && <p>{text.length} characters</p>}
          {result && <p className={`result ${result.includes("Scam") ? "danger" : "safe"}`}>{result}</p>}
>>>>>>> 2fc15a662625aafe840c8b2d1efd9e249d5f08d6
        </div>
      </div>
    </div>
  );
}

export default App;
<<<<<<< HEAD
=======
//test
>>>>>>> 2fc15a662625aafe840c8b2d1efd9e249d5f08d6
