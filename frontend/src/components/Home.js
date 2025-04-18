// frontend/src/components/Home.js
import React, { useState } from 'react';
import axios from 'axios';
import ResultCard from './ResultCard';

function Home() {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const checkScam = async () => {
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/api/detect', { text });
      setResult(res.data);
    } catch (error) {
      setResult({ isScam: false, message: 'Failed to connect to detection service' });
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold mb-4">Scam Detection AI</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste email or message here..."
        className="w-full max-w-xl h-40 p-4 text-black rounded-lg resize-none"
      />
      <button
        onClick={checkScam}
        className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold"
        disabled={loading}
      >
        {loading ? 'Detecting...' : 'Detect Scam'}
      </button>
      {result && <ResultCard result={result} />}
    </div>
  );
}

export default Home;
//test