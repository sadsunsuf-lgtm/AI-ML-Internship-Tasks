# Task 5: MindfulAI - Fine-Tuned Empathetic Chatbot

## 🎯 Objective
To build a functional AI assistant fine-tuned for emotional support and empathy using the Hugging Face ecosystem.

## 🛠️ Technical Stack
- **Base Model:** DistilGPT2 (82M parameters)
- **Dataset:** Facebook AI's EmpatheticDialogues
- **Frameworks:** Hugging Face Transformers, PyTorch, Streamlit
- **Deployment:** Localtunnel for temporary public access

## 🧠 Engineering Insights
- **Fine-Tuning:** Trained using the Trainer API to shift the model's tone from general text generation to empathetic dialogue.
- **Inference Optimization:** Implemented `top_k=40` and `temperature=0.6` to manage hallucinations and maintain logical flow.
- **Guardrails:** Added a Python-based filtering layer to intercept and correct model-specific artifacts (e.g., child-related hallucinations) common in smaller LLMs.

## 📊 Evaluation
As a lightweight model (82M parameters), the bot excels at tone alignment but shows limitations in long-form reasoning. This project demonstrates the full ML lifecycle: Data Preparation -> Training -> UI Development -> Deployment.
