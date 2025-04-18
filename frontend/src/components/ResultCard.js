import React from 'react';

function ResultCard({ result }) {
  return (
    <div className="mt-6 p-4 max-w-xl w-full rounded-lg shadow-lg bg-white text-black">
      <h2 className="text-xl font-bold">
        {result.isScam ? '⚠️ Scam Detected' : '✅ Safe Message'}
      </h2>
      <p className="mt-2">{result.message}</p>
    </div>
  );
}

export default ResultCard;
//test