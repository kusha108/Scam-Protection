// frontend/src/components/Scanner.js
import React, { useState } from 'react';
import axios from 'axios';
import { AiOutlineCheckCircle, AiOutlineWarning, AiOutlineLoading3Quarters } from 'react-icons/ai';

const Scanner = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCheck = async () => {
    if (!text.trim()) return;
    setLoading(true);
    setResult(null);
    try {
      const res = await axios.post('http://localhost:5000/api/scam/detect', { text });
      setResult(res.data);
    } catch (error) {
      setResult({ scam: false, message: 'Failed to connect to detection service' });
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl bg-gray-800 rounded-xl shadow-2xl p-6">
        <h2 className="text-3xl font-bold text-white mb-4 text-center">
          Scam Message Detector
        </h2>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste message here..."
          className="w-full h-40 p-4 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 transition"
        />

        <button
          onClick={handleCheck}
          className="mt-4 w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300"
          disabled={loading}
        >
          {loading && <AiOutlineLoading3Quarters className="animate-spin text-white text-xl" />}
          {loading ? 'Checking...' : 'Check Message'}
        </button>

        {result && (
          <div
            className={`mt-6 p-6 rounded-xl shadow-lg transition transform ${
              result.scam
                ? 'bg-gradient-to-r from-red-500 to-red-600 text-white'
                : 'bg-gradient-to-r from-green-500 to-green-600 text-white'
            } flex items-center gap-4`}
          >
            {result.scam ? (
              <AiOutlineWarning className="text-3xl animate-pulse" />
            ) : (
              <AiOutlineCheckCircle className="text-3xl" />
            )}
            <p className="text-lg">{result.message || (result.scam ? '⚠️ Scam Detected!' : '✅ Safe Message')}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Scanner;
