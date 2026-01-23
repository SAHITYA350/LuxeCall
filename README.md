# 📞 LuxeCall – Real-Time Video & Voice Calling App
<img width="1916" height="926" alt="image" src="https://github.com/user-attachments/assets/afcacdff-349e-4580-8e29-ce2a842d1b98" />


LuxeCall is a modern real-time video and voice calling application powered by **ZEGOCLOUD**, built for fast, secure, and scalable communication. It supports one-to-one and group calls with low latency and high reliability.

---

## 🚀 Features

* 🎥 High-quality real-time video calling
* 🎧 Crystal-clear voice communication
* 👥 One-to-one and group meetings
* 🔐 Secure room-based access
* ⚡ Low latency using ZEGOCLOUD RTC
* 🌐 Works across devices and browsers
* 🎨 Modern UI with responsive design

---

## 🛠️ Tech Stack

* **Frontend:** React + Vite
* **RTC Provider:** ZEGOCLOUD
* **Routing:** React Router
* **Styling:** Tailwind CSS
* **Icons:** Lucide React

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/your-username/luxecall.git
cd luxecall
```

Install dependencies:

```bash
npm install
```

---

## 🔑 ZEGOCLOUD Configuration

1. Create an account at **[https://www.zegocloud.com](https://www.zegocloud.com)**
2. Create a new project in the ZEGOCLOUD Console
3. Copy your **App ID** and **Server Secret**

---

## ▶️ Running the App

Start the development server:

```bash
npm run dev
```

Open in browser:

```
http://localhost:5173
```

---

## 📡 How It Works

1. User enters or generates a meeting room ID
2. App creates a ZEGOCLOUD token
3. Users join the same room ID
4. ZEGOCLOUD handles real-time audio/video streaming
