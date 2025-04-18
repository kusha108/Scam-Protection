const axios = require('axios');

exports.analyzeText = async (text) => {
  try {
    const res = await axios.post('http://127.0.0.1:5001/detect', { text });
    return res.data;
  } catch (err) {
    return { scam: false, message: 'Detection failed' };
  }
};
//test