# ❤️ Heart Disease Prediction System Using Machine Learning

## 📌 Project Overview

The **Heart Disease Prediction System** is a Machine Learning-based application designed to predict the possibility of heart disease using patient medical information. The system analyses important health parameters such as age, sex, chest pain type, resting blood pressure, cholesterol level, maximum heart rate, and other clinical attributes to generate predictions.

This project uses a **Random Forest Machine Learning Algorithm** to classify whether a patient is likely to have heart disease or not. It also provides an interactive interface where users can enter medical details and receive real-time prediction results.

The main objective of this project is to demonstrate how Artificial Intelligence and Machine Learning can support preliminary heart disease risk assessment and make healthcare technology more accessible.

## 🎯 Project Objectives

- Predict the possibility of heart disease using Machine Learning.
- Analyse important patient medical parameters.
- Provide real-time prediction results.
- Develop a user-friendly interface for patient data entry.
- Apply Explainable AI techniques to improve model interpretability.
- Demonstrate the application of AI in healthcare.

## ⚙️ Technologies Used

**Frontend:**
- React.js
- Tailwind CSS
- Vite

**Backend:**
- Python
- FastAPI

**Machine Learning:**
- Random Forest Classifier
- Scikit-learn
- Pandas
- NumPy

**Explainable AI:**
- Feature Importance Visualization

## 🚀 Key Features

- **Patient Health Assessment:** Enter medical parameters through an interactive form.
- **Machine Learning Prediction:** Predict Heart Disease or No Heart Disease using a trained Random Forest model.
- **Real-Time Results:** Get prediction results through API integration.
- **Explainable AI:** Visualize important features influencing the model's predictions.
- **User-Friendly Interface:** Simple and responsive frontend design.
- **REST API Integration:** Connect the React frontend with the FastAPI backend.

## 🔄 Working Process

1. User enters patient medical information.
2. The frontend sends the input data to the FastAPI backend.
3. The backend processes the input parameters.
4. The trained Random Forest model generates a prediction.
5. The system displays the prediction result.
6. Feature importance visualization helps explain the model's behaviour.

## 📂 Project Modules

- Frontend User Interface
- Patient Data Input
- Data Preprocessing
- Machine Learning Model
- Heart Disease Prediction API
- Explainable AI Visualization
- Prediction Result Display

## 💻 Installation and Setup

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd YOUR_PROJECT_FOLDER
```

### 2. Frontend Setup

```bash
npm install
npm run dev
```

### 3. Backend Setup

```bash
pip install -r requirements.txt
```

### 4. Start FastAPI Server

```bash
uvicorn predict_api:app --reload --host 127.0.0.1 --port 8000
```

### 5. Open the Application

Open the local Vite URL in your browser:

```text
http://localhost:5173
```

FastAPI documentation:

```text
http://127.0.0.1:8000/docs
```

## 🔮 Future Enhancements

- Integration of additional machine learning algorithms.
- Improved Explainable AI visualizations.
- Integration of additional clinical parameters.
- Patient prediction history and report generation.
- Deployment as a cloud-based healthcare application.

## ⚠️ Disclaimer

This project is developed for educational and research purposes. Its predictions are not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional for medical decisions.

## 👨‍💻 Author

**Developed as a Machine Learning and Healthcare AI Project.**

If you find this project useful, consider giving the repository a ⭐ on GitHub!
