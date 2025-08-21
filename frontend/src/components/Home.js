// frontend/src/components/Home.js
import React, { useState } from 'react';
import axios from 'axios';
import ResultCard from './ResultCard';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

function Home() {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const checkScam = async () => {
    if (!text.trim()) return;
    setLoading(true);
    setResult(null);
    try {
      const res = await axios.post('http://localhost:5000/api/detect', { text });
      setResult(res.data);
    } catch (error) {
      setResult({ isScam: false, message: 'Failed to connect to detection service' });
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center justify-center px-4 py-10">
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 text-center">
        Scam Detection AI
      </h1>

      <p className="text-gray-300 text-center max-w-2xl mb-8">
        Detect fraudulent messages and emails instantly using our AI-powered system.
        Paste the content below to check.
      </p>

      <div className="w-full max-w-2xl bg-gray-800 rounded-xl p-6 shadow-lg">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste email or message here..."
          className="w-full h-40 p-4 text-gray-900 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />

        <button
          onClick={checkScam}
          className="mt-4 w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300"
          disabled={loading}
        >
          {loading && <AiOutlineLoading3Quarters className="animate-spin text-white text-xl" />}
          {loading ? 'Detecting...' : 'Detect Scam'}
        </button>
      </div>

      {result && (
        <div className="w-full max-w-2xl mt-6">
          <ResultCard result={result} />
        </div>
      )}
    </div>
  );
}

export default Home;
