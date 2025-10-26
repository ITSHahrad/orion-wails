# 🛰️ Orion-Wails Boilerplate

🚀 A modern starter template for building cross-platform desktop applications using **React 19 (JavaScript)**, **Wails v2 (Go)**, and **Tailwind CSS v4**.

---

## 🧭 Overview

**Orion-Wails** provides a production-ready setup for creating **desktop-first** applications that blend the power of Go with the flexibility of React.  
The goal is to help developers rapidly prototype and ship performant native apps with a modern frontend experience.

It includes:
- A **React + Tailwind** frontend with Vite for blazing-fast builds  
- A **Go backend** structured within a clean `/backend` module  
- A **Wails bridge** for seamless Go ↔️ JS communication  

---

## ⚙️ Tech Stack

| Layer | Technology | Purpose |
|-------|-------------|----------|
| Frontend | **React v19 (JavaScript)** | UI and state management |
| Styling | **Tailwind CSS v4** | Utility-first responsive design |
| Build Tool | **Vite v7** | Super-fast bundling and HMR |
| Backend | **Go (Wails v2)** | Native desktop app layer |
| Platforms | **Windows / macOS / Linux** | Cross-platform binaries |

---

## ✨ Key Features

- 🧩 **Modular Backend Folder** – All Go logic and app entry points under `/backend`  
- ⚡ **Vite + React Hot Reloading** – Live preview during dev  
- 🎨 **Tailwind v4 Styling** – Instant UI iteration  
- 📦 **Single Binary Builds** – Lightweight and portable  
- 💻 **Cross-Platform Support** – Windows, macOS, and Linux ready  
- 🧠 **Clean Architecture** – Separation of backend and frontend logic  

---

## 🧱 Project Structure

```
orion-wails/
├── backend/                # Go (Wails) backend
│   ├── main.go             # Entry point to start the Wails app
│   ├── app.go              # Core app logic (bindings to frontend)

├── frontend/               # React + Tailwind frontend
│   ├── src/                # React components, hooks, and logic
│   ├── public/             # Static assets
│   ├── vite.config.js      # Vite configuration
│   └── package.json        # Frontend dependencies

├── main.go                 # Root-level entry 
├── go.mod                  # Go module file
├── go.sum                  # Go dependencies
├── wails.json              # Wails configuration
└── README.md               # Project documentation
```

🧠 **Note:**  
Wails generates frontend bindings based on your backend package name.  
If your backend folder uses `package backend`, JS bindings will appear under:
```

frontend/wailsjs/go/backend/App.js

```


## 🚀 Quick Start

1. **Clone the repository**
```bash
   git clone https://github.com/ITSHahrad/orion-wails.git
   cd orion-wails
````

2. **Install frontend dependencies**

   ```bash
   cd frontend
   npm install
   ```

3. **Run the development environment**

   ```bash
   wails dev
   ```

   This runs the Go backend + React frontend with hot reloading.

---

## 🏗️ Building for Production

To build a production-ready native binary:

```bash
wails build
```

The final app binary will be available in:

```
build/bin/
```

---

## 🧰 Customization Guide

| Section          | File                          | What You Can Do                            |
| ---------------- | ----------------------------- | ------------------------------------------ |
| ⚛️ Components    | `frontend/src`                | Add or update React components             |
| ⚙️ Backend Logic | `backend/app.go`              | Extend or bind new Go functions            |
| 🧩 App Config    | `wails.json`                  | Edit app name, window settings, build info |

---

## 🧯 Troubleshooting

* **Wails dev fails**
  → Ensure Go, Node.js, and Wails CLI are installed and in your PATH
* **Frontend bindings error (e.g. “Could not resolve '../wailsjs/go/main/App'”)**
  → Update imports to match your Go package:
  `../wailsjs/go/backend/App`
* **Build issues**
  → Run `go mod tidy` and `npm install` again to sync dependencies

---

## 🧑‍💻 Author

**ITSH (Shahrad)**
Full-stack developer & system designer
[GitHub](https://github.com/ITSHahrad)

---

## 📜 License

This project is licensed under the **MIT License**.
Feel free to modify and use it for your own projects.

---

> **Orion-Wails** — *Modern desktop apps, made simple.*