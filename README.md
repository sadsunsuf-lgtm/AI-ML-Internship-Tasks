# AI/ML Internship - DevelopersHub Corporation 🚀

This repository contains my professional tasks and projects completed during my AI/ML Engineering internship. Each task demonstrates data science workflows, model development, and analytical insights.

---

## 📂 Task 1: Exploratory Data Analysis (EDA) - Iris Dataset
**🎯 Objective:** To perform a comprehensive statistical and visual analysis of the Iris flower dataset.
**📊 Dataset:** Iris Dataset (Seaborn)
**📈 Key Results:** Identified 0.96 correlation between petal dimensions; Setosa is linearly separable.

---

## 📂 Task 2: Stock Price Prediction (Short-Term)
**🎯 Objective:** To predict the next day's closing price of a stock using historical Yahoo Finance data.
**📊 Dataset:** Apple (AAPL) Historical Data via `yfinance`.
**🛠️ Tools & Libraries:** Python, Scikit-Learn (Linear Regression, Random Forest), Matplotlib.
**📈 Key Results:** * **Linear Regression:** R² Score = 0.9178 (Best Performer)
* **Random Forest:** R² Score = 0.8845
* **Insight:** Momentum-based features show a highly linear trend, allowing simpler models to outperform complex ensembles in short-term predictions.

---

---

## 📂 Task 3: Heart Disease Prediction (Breast Cancer Diagnostic)
**🎯 Objective:** To predict whether a medical case is Malignant or Benign using classification.
**📊 Dataset:** Scikit-Learn Built-in Breast Cancer Dataset.
**🛠️ Tools & Libraries:** Python, Scikit-Learn (Logistic Regression), StandardScaler, Seaborn.
**📈 Key Results:** * **Model Accuracy:** 97.37%
* **ROC-AUC Score:** [Insert your AUC value, likely 0.99]
* **Key Finding:** Scaling features using `StandardScaler` was critical for model convergence. The model shows extremely high sensitivity, making it reliable for preliminary medical screening.
