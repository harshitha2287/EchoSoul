require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// ✅ Gemini setup
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash-latest",
});

// ✅ Serve frontend
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// ✅ Test route
app.get("/api/test", (req, res) => {
  res.send("EchoSoul backend is working 🚀");
});

// ✅ Nova Chatbot (Gemini)
app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;

  console.log("User:", userMessage);

  try {
    const result = await model.generateContent(`
You are Nova, a warm, emotionally supportive AI friend.
Speak kindly, naturally, and help the user feel calm and heard.

User: ${userMessage}
Nova:
    `);

    const reply = result.response.text();

    res.json({ reply });

  } catch (err) {
    console.error("Gemini Error:", err);

    res.status(500).json({
      reply: "Nova is having trouble thinking right now 💭 Please try again.",
    });
  }
});

// ✅ Start server (Render-compatible)
const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});