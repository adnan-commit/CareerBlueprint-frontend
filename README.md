# CareerBlueprint Frontend

The client-side interface for CareerBlueprint—an advanced, AI-driven career coaching platform. It provides a futuristic, high-performance dashboard for users to visualize their career growth, optimize resumes, and prepare for high-stakes tech interviews.

Built with a focus on User Experience (UX), Interactive Data Visualization, and Responsive Design.

---

## 🧠 Features

* 🚀 Interactive Dashboard: Real-time performance trends using Chart.js.

* 📄 FAANG-Style Resume Builder: AI-optimized resume generator with live editing and PDF export.

* 🗺️ Dynamic Roadmaps: Personalized, day-by-day sprint plans for interview prep.

* 📊 Skill Gap Analysis: Visual representation of missing competencies vs. job requirements.

* 🌗 Futuristic UI/UX: Dark-themed terminal aesthetic with Framer Motion animations.

* 📱 Mobile-First Approach: Fully responsive layouts for all devices.

* 🔐 Secure Auth Integration: Cookie-based JWT authentication handling.

* 📝 Technical & Behavioral Vault: Structured Q&A tailored to specific job descriptions.

* 🛠️ Live Edit Mode: Direct modification of AI-generated content before downloading.

---

## 🏗️ Tech Stack

* React.js (Frontend Library)

* Vite (Build Tool)

* Tailwind CSS (Styling)

* Framer Motion (Animations)

* Lucide React (Icons)

* Chart.js & React-Chartjs-2 (Data Visualization)

* React-to-Print (PDF Generation)

* Axios (API Client)

* React Hot Toast (Notifications)

---

## 📁 Folder Structure

```
client/
│
├── public/            # Assets & SEO files (Favicon, OG images)
├── src/
│   ├── api/           # Axios instance & interceptors
│   ├── assets/        # Styles & static images
│   ├── components/    # Reusable UI components (Logo, Buttons, etc.)
│   ├── pages/         # Page-level components
│   │   ├── Auth/      # Login & Register
│   │   └── Dashboard/ # Archives, AnalysisView, Resume, etc.
│   ├── context/       # Auth & Global state providers
│   ├── middleware/    # Route protection (ProtectedRoute)
│   ├── utils/         # Helper functions & constants
│   ├── App.jsx        # Main routing & layout
│   └── main.jsx       # Entry point

```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory and add:


```
VITE_API_BASE_URL=http://localhost:5000/api

```

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```
git clone https://github.com/adnan-commit/CareerBlueprint-frontend
cd Client
```

### 2️⃣ Install dependencies

```
npm install
```

### 3️⃣ Setup environment variables

Set your backend API URL in ```.env```.

### 4️⃣ Run the development server

```
npm run dev
```

The application will be accessible at:

```
http://localhost:5173
```

---

## 🎨 Design Language

* Theme: Deep Slate & Charcoal (#020617)

* Primary Accent: Neon Teal / Cyan (#2DD4BF)

* Typography: Inter (Standard) & JetBrains Mono (Technical/Data)

* Animations: Smooth entry/exit transitions via Framer Motion's AnimatePresence.


---

## 📊 Core Modules

### 📈 Analytics:

Uses Chart.js to map match scores across different job applications, allowing users to track their preparation progress over time.

### 📜 ATS Resume Engine

A specialized module that renders AI-generated JSON into a FAANG-standard resume layout. Supports real-time editing using contentEditable and high-quality PDF downloads.

### 🛣️ Sprint Roadmaps

A vertical timeline component that breaks down complex preparation strategies into manageable daily tasks.


---

## 🛡️ Routing & Protection

* Public Routes: Login, Register, Home.

* Protected Routes: Dashboard, Analysis View, Archive.

* 404 Handling: Custom "Protocol Breach" error page for invalid coordinates.

---

## 👨‍💻 Author

**Adnan Qureshi**

---

## 📜 License

This project is licensed under the MIT License.
