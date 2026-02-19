const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const scamController = require('./controllers/scamController'); // module.exports style

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.get('/', (req, res) => res.send('🚀 Node backend is running'));

app.post('/api/detect', scamController.detectScam || scamController); // support both exports

app.listen(PORT, () => {
  console.log(`✅ Node.js backend running on http://localhost:${PORT}`);
});
