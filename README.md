# 🚀 MERN AI Flow App

A simple MERN stack application that allows users to input a prompt, process it through a backend API, and visualize the result using React Flow.

---

## 🧠 Features

* 📝 Input prompt using UI
* 🔗 Visual flow using React Flow
* 🤖 AI response (mock implementation)
* 💾 Save prompt & response to MongoDB
* ⚡ Fast frontend using Vite

---

## 🛠️ Tech Stack

* **Frontend:** React (Vite), React Flow, Axios
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose)
* **AI:** Mock API (fallback implementation)

---

## 📁 Project Structure

```
mern-ai-flow/
│
├── backend/
│   ├── config/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   ├── App.jsx
│   └── main.jsx
│
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/mern-ai-flow.git
cd mern-ai-flow
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/ai-flow-db
```

Run backend:

```bash
npm start
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Open:

```
http://localhost:5173
```

---

## 🔄 API Endpoints

### 🔹 POST `/api/ask-ai`

Request:

```json
{
  "prompt": "What is AI?"
}
```

Response:

```json
{
  "result": "AI Response: What is AI?"
}
```

---

### 🔹 POST `/api/save`

Request:

```json
{
  "prompt": "Hello",
  "response": "Hi there!"
}
```

---

## 🧪 How It Works

1. User enters a prompt
2. Clicks **Run Flow**
3. Frontend sends request to backend
4. Backend generates mock AI response
5. Response is displayed in React Flow node
6. User can save result to MongoDB

---

## 💡 Note

Due to external API limitations, a mock AI response is used to ensure consistent functionality.

---

## 📸 Demo

(Add screenshots here)

---

## 🚀 Deployment

* Frontend → Vercel
* Backend → Render

---

## 👨‍💻 Author
https://github.com/Ganesh2002-art
