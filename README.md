# AI & Machine Learning Engineering Internship Portfolio 🚀
**Organization:** DevelopersHub Corporation  
**Intern:** Sana Nasir  
**Submission Date:** April 2026

This repository contains all 6 internship tasks, demonstrating a full-stack foundation in Data Science, Regression, Classification, and Generative AI (LLMs).

---

## 📂 Internship Tasks

### 🧪 Task 1: Exploring and Visualizing a Simple Dataset
* **Problem:** Understanding biological variance in iris species to facilitate automated classification.
* **Dataset:** Classic Iris Dataset (Fisher, 1936).
* **Analysis:** Performed summary statistics (.describe), distribution histograms, and box plots to identify outliers.
* **Key Results:** Identified that Iris-Setosa is linearly separable. Used Seaborn for correlation heatmaps and pair-plots.

### 📈 Task 2: Predict Future Stock Prices
* **Problem:** Forecasting short-term market movements using historical time-series data.
* **Dataset:** Yahoo Finance (via `yfinance`).
* **Models:** Linear Regression and Moving Averages.
* **Key Results:** Successfully plotted actual vs. predicted prices, capturing general trends based on Open, High, Low, and Volume features.

### 💓 Task 3: Heart Disease Prediction
* **Problem:** Early detection of cardiac risk factors through clinical parameters.
* **Dataset:** UCI Heart Disease Dataset.
* **Models:** Logistic Regression and Random Forest.
* **Evaluation:** Evaluated using **Accuracy, ROC Curves, and Confusion Matrices**.
* **Insights:** Identified 'Max Heart Rate' and 'Age' as the most significant predictors.

### 🩺 Task 4: AI Health Assistant (Generative AI)
* **Problem:** Providing high-speed, safe access to general health information.
* **Model:** Llama 3.3 70B via Groq Cloud.
* **Technique:** **System Prompt Engineering** (Acting as a medical assistant) with strict **safety filters** to prevent harmful advice.
* **Deployment:** Live Next.js Web App with sub-second inference.

### 🤖 Task 5: MindfulAI - Fine-Tuned Empathetic Chatbot
* **Problem:** Enhancing emotional resonance in AI interactions for mental wellness support.
* **Dataset:** Facebook’s EmpatheticDialogues (25k samples).
* **Fine-Tuning:** Fine-tuned **DistilGPT2** using Hugging Face’s Trainer API.
* **Key Results:** Achieved gentle, emotionally supportive tone with custom logic to handle model identity.

### 🏠 Task 6: House Price Prediction
* **Problem:** Estimating real estate value based on geographical and structural features.
* **Dataset:** California Housing Dataset.
* **Models:** Linear Regression vs. **Gradient Boosting Regressor**.
* **Evaluation:** Measured via **MAE and RMSE**.
* **Key Results:** Gradient Boosting reduced MAE by ~$15k compared to Linear Regression.

---

## 🛠️ Technical Competencies
* **Machine Learning:** Regression, Binary Classification, Feature Scaling, One-Hot Encoding, Hyperparameter Tuning.
* **Generative AI:** LLM Fine-tuning (Hugging Face), Prompt Engineering, Safety Guardrails.
* **Tools:** Python (Pandas, Scikit-Learn, PyTorch), Next.js, Groq LPU, GitHub.

## 🚀 Deployment & Usage
* **Live Demo (Task 4):** https://ai-ml-internship-tasks.vercel.app

* **Notebooks:** All tasks are available as `.ipynb` files in this repository.
