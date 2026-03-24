require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");
const OpenAI = require("openai");

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// ✅ OpenAI setup
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// ✅ Serve frontend
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// ✅ Test route
app.get("/api/test", (req, res) => {
  res.send("EchoSoul backend is working 🚀");
});

// ✅ Nova Chatbot Route
app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;

  console.log("User:", userMessage);

  try {
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are Nova, a warm, emotionally supportive AI friend. Speak kindly, naturally, and help users feel heard and calm.",
        },
        {
          role: "user",
          content: userMessage,
        },
      ],
    });

    const reply = response.choices[0].message.content;

    res.json({ reply });

  } catch (err) {
    console.error("OpenAI Error:", err);

    res.json({
      reply: "Nova is having trouble thinking right now 💭 Please try again.",
    });
  }
});

// ✅ Start server (ONLY ONCE)
const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});