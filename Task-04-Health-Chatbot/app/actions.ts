"use server";

import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function askHealthBot(formData) {
  const userMessage = formData.get("message");

  const chatCompletion = await groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `You are a friendly and helpful Medical Assistant. 
        IMPORTANT SAFETY RULES:
        1. State clearly that you are an AI and not a doctor.
        2. For medication dosage (like paracetamol for kids), advise consulting a pharmacist or doctor.
        3. If symptoms sound like an emergency (chest pain, breathing issues), urge the user to seek emergency care immediately.
        4. Provide general information only, not a formal diagnosis.`
      },
      {
        role: "user",
        content: userMessage,
      },
    ],
    model: "llama-3.3-70b-versatile", // This is a fast, powerful model on Groq
  });

  return chatCompletion.choices[0].message.content;
}