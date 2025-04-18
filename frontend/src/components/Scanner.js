import React, { useState } from 'react';
import axios from 'axios';
import '../styles/scanner.css';

const Scanner = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);

  const handleCheck = async () => {
    const res = await axios.post('http://localhost:5000/api/scam/detect', { text });
    setResult(res.data);
  };

  return (
    <div className="scanner">
      <h2>Scam Message Detector</h2>
      <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Paste message here..." />
      <button onClick={handleCheck}>Check Message</button>
      {result && (
        <p className={result.scam ? 'scam' : 'safe'}>
          {result.scam ? '⚠️ Scam Detected!' : '✅ Safe Message'}
        </p>
      )}
    </div>
  );
};

export default Scanner;
//test