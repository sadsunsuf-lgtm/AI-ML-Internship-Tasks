# AI & Machine Learning Internship Portfolio 🚀

This repository contains the projects completed during my AI/ML internship, demonstrating proficiency in data analysis, predictive modeling, and Generative AI deployment.

---

## 📂 Internship Tasks

### 🧪 Task 1: Iris Flower EDA
* **Objective:** Perform Exploratory Data Analysis to identify patterns in floral species.
* **Dataset:** Classic Iris Dataset (Fisher, 1936).
* **Models/Analysis:** Statistical profiling, correlation heatmaps, and pair-plots using Seaborn.
* **Key Results:** Successfully identified that *Iris-Setosa* is linearly separable from other species based on petal measurements.

### 📈 Task 2: Stock Price Prediction
* **Objective:** Predict the closing price of stocks using historical time-series data.
* **Dataset:** Yahoo Finance / Google Stock Price History (CSV).
* **Models Applied:** Linear Regression and Moving Averages.
* **Key Results:** Captured general market trends with a focused Mean Squared Error (MSE) analysis, showing the impact of previous-day volume on price.

### 💓 Task 3: Heart Disease Prediction
* **Objective:** Classify whether a patient has heart disease based on clinical parameters.
* **Dataset:** UCI Heart Disease Dataset.
* **Models Applied:** Logistic Regression and Random Forest Classifier.
* **Key Results:** Achieved high classification accuracy; identified 'Age' and 'Max Heart Rate' as the most significant predictors of cardiac issues.

### 🩺 Task 4: AI Health Assistant (Generative AI)
* **Objective:** Create a real-time, high-speed AI chatbot for medical information.
* **Dataset:** Pre-trained Llama 3.3 70B (via Groq Cloud).
* **Models Applied:** Llama-3.3-70b-Versatile with specialized System Prompt Engineering.
* **Key Results:** Built a production-ready Next.js app with sub-second response times and integrated safety disclaimers.

---

## 🛠️ Technical Competencies
* **Programming:** Python (Data Science), TypeScript (Frontend/AI Integration).
* **Libraries:** Pandas, Scikit-Learn, Matplotlib, React, Next.js.
* **Inference:** Groq LPU (Large Language Processing Unit) Cloud.

---

## 🚀 Deployment & Usage
- **Live Demo (Task 4):** [https://ai-ml-internship-tasks.vercel.app](https://ai-ml-internship-tasks.vercel.app)
- **Environment:** To run the notebooks (Tasks 1-3), install dependencies via `pip install pandas scikit-learn matplotlib`.

- -

### 🤖 Task 5: MindfulAI - Fine-Tuned Empathetic Chatbot
* **Objective:** Fine-tune a Large Language Model to generate emotionally resonant and supportive responses.
* **Dataset:** Facebook’s **EmpatheticDialogues** (25k+ conversation samples).
* **Models Applied:** **DistilGPT2** (Hugging Face Transformers) with specialized output filtering.
* **Key Results:** Successfully reduced model "hallucinations" by implementing a custom logic layer to maintain assistant identity while achieving high empathy scores.

