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

### 🤖 Task 5: MindfulAI - Fine-Tuned Empathetic Chatbot
* **Objective:** Fine-tune a Large Language Model to generate emotionally resonant and supportive responses.
* **Dataset:** Facebook’s **EmpatheticDialogues** (25k+ conversation samples).
* **Models Applied:** **DistilGPT2** (Hugging Face Transformers) with specialized output filtering.
* **Key Results:** Successfully reduced model "hallucinations" by implementing a custom logic layer to maintain assistant identity while achieving high empathy scores.

* Goolgle Colab Link: https://colab.research.google.com/drive/1XScpcygVGKG6Ax5hVfLR68Dm3q8py9jv?usp=sharing

* ### 🏠 Task 6: House Price Prediction
* **Objective:** Predict housing prices using property features like size, age, and location.
* **Dataset:** California Housing Dataset (20k+ entries).
* **Models Applied:** Linear Regression and **Gradient Boosting Regressor**.
* **Key Results:** * Successfully reduced Mean Absolute Error (MAE) from ~$50k to **~$35k** by transitioning to Gradient Boosting.
    * Performed Feature Engineering (One-Hot Encoding) on location data to capture geographical price trends.
    * Evaluated performance using MAE and RMSE metrics with side-by-side model comparison.

---

## 🛠️ Technical Competencies
* **Programming:** Python (Data Science), TypeScript (Frontend/AI Integration).
* **Libraries:** Pandas, Scikit-Learn, Matplotlib, Seaborn, Transformers, PyTorch, React, Next.js.
* **Machine Learning:** Regression Modeling, Feature Scaling, Gradient Boosting (XGBoost logic), Hyperparameter Tuning.
* **Inference:** Groq LPU, Hugging Face Hub.

---

## 🚀 Deployment & Usage
- **Live Demo (Task 4):** [https://ai-ml-internship-tasks.vercel.app](https://ai-ml-internship-tasks.vercel.app)
- **Environment:** To run the notebooks (Tasks 1-3, 5-6), install dependencies via:
  `pip install pandas scikit-learn matplotlib seaborn transformers torch`

