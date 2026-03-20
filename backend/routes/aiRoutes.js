import express from "express";
import Chat from "../models/Chat.js";

const router = express.Router();

// 🔹 MOCK AI RESPONSE
router.post("/ask-ai", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt required" });
    }

    // Simulate AI delay (optional, looks realistic)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Simple intelligent mock response
    let result = "";

    if (prompt.toLowerCase().includes("capital of france")) {
      result = "The capital of France is Paris.";
    } else if (prompt.toLowerCase().includes("hello")) {
      result = "Hello! How can I help you today?";
    } else if (prompt.toLowerCase().includes("ai")) {
      result =
        "Artificial Intelligence (AI) refers to machines that can simulate human intelligence.";
    } else {
      result = `AI Response: ${prompt}`;
    }

    res.json({ result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "AI failed" });
  }
});


// 🔹 SAVE TO DB (UNCHANGED)
router.post("/save", async (req, res) => {
  try {
    const { prompt, response } = req.body;

    if (!prompt || !response) {
      return res.status(400).json({ error: "Missing data" });
    }

    const saved = await Chat.create({ prompt, response });

    res.json(saved);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Save failed" });
  }
});

export default router;