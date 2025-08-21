const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/api/detect', async (req, res) => {
  try {
    const { text } = req.body;
    const response = await axios.post('http://127.0.0.1:5001/detect', { text });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Detection failed' });
  }
});

app.listen(5000, () => {
  console.log('Node.js server running on http://localhost:5000');
});
//test
