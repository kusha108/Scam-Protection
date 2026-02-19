import axios from "axios";

export const detectScam = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text || text.trim() === "") {
      return res.status(400).json({ error: "No text provided" });
    }

    console.log("📩 Received text from frontend:", text);

    // Send the text to Flask AI backend
    const response = await axios.post("http://localhost:5001/detect", { text }, { timeout: 8000 });


    console.log("🤖 Flask AI Response:", response.data);

    // Forward the exact response to frontend
    return res.json(response.data);

  } catch (error) {
    console.error("❌ Error connecting to AI server:", error.message);

    // If Flask is down or connection fails
    return res.status(500).json({
      isScam: false,
      message: "⚠️ AI detection service not responding.",
      error: error.message
    });
  }
};
