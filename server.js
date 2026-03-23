const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
const express = require("express");

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
process.env.PORT

//TEST ROUTE
app.get("/", (req, res) => {
  res.send("Nova is alive 💖");
});

//CHATBOT ROUTE
app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;

  console.log("User:", userMessage);

  try {
    const ollamaRes = await fetch("http://127.0.0.1:11434/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "phi:latest",
        prompt: `
You are Nova, a friendly, warm, emotionally supportive AI friend.
Always reply clearly, like a human conversation.
Never leave the response empty.

User: ${userMessage}
Nova:
`,
        stream: false,
        options: {
          num_predict: 60
        }
      }),
    });

    const data = await ollamaRes.json();

    console.log("FULL OLLAMA DATA:", data);

    let reply = data.response;

    if (!reply || reply.trim() === "") {
      reply = "Hey… I'm here 🌸 Tell me what's on your mind.";
    }

    reply = reply.trim();

    res.json({ reply });

  } catch (err) {
    console.log("ERROR:", err);

    res.json({
      reply: "Nova is having trouble thinking right now 💭",
    });
  }
});
//START SERVER
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});