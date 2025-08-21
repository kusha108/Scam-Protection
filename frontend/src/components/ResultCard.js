// frontend/src/components/ResultCard.js
import React from 'react';
import { AiOutlineCheckCircle, AiOutlineWarning } from 'react-icons/ai';

function ResultCard({ result }) {
  const isScam = result.isScam;

  return (
    <div
      className={`mt-6 p-6 w-full max-w-xl rounded-xl shadow-2xl transition transform hover:scale-[1.02] ${
        isScam
          ? 'bg-gradient-to-r from-red-500 to-red-600 text-white'
          : 'bg-gradient-to-r from-green-500 to-green-600 text-white'
      }`}
    >
      <div className="flex items-center gap-4">
        {isScam ? (
          <AiOutlineWarning className="text-3xl animate-pulse" />
        ) : (
          <AiOutlineCheckCircle className="text-3xl" />
        )}
        <h2 className="text-2xl font-bold">
          {isScam ? '⚠️ Scam Detected' : '✅ Safe Message'}
        </h2>
      </div>
      <p className="mt-4 text-white text-lg">{result.message}</p>
    </div>
  );
}

export default ResultCard;
