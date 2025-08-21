const { analyzeText } = require('../utils/scamAnalyzer');

exports.analyzeScam = async (req, res) => {
  const { text } = req.body;
  const result = await analyzeText(text);
  res.json(result);
};
//test