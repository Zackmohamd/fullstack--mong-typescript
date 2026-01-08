# 📝 My Todo App

A modern, full-stack **Todo Application** built with **Next.js 16**, **TypeScript**, **Tailwind CSS**, and **MongoDB**.  
The app supports CRUD operations, dark mode with persistence, and a clean, responsive user interface.

---

## 🚀 Features

- ✅ Create, Read, Update, Delete (CRUD) Todos
- 🌙 Dark Mode with localStorage persistence
- 🎨 Modern UI using Tailwind CSS
- 📱 Fully responsive design
- 🔄 Real-time UI refresh with Next.js App Router
- ☑️ Checkbox with completed (strike-through) style
- 🗄 MongoDB integration using Mongoose
- 🔐 Environment variables support

---

## 🛠 Tech Stack

### Frontend
- Next.js 16 (App Router)
- React
- TypeScript
- Tailwind CSS

### Backend
- Next.js API Routes
- MongoDB
- Mongoose

---

## 📂 Project Structure

```bash
my-app/
├── app/
│   ├── api/
│   │   └── todo/
│   │       ├── route.ts
│   │       └── [id]/route.ts
│   ├── __components/
│   │   ├── todo/
│   │   │   ├── TodoForm.tsx
│   │   │   ├── TodoList.tsx
│   │   │   ├── DoneTodo.tsx
│   │   │   └── DeleteTodo.tsx
│   │   └── DarkModeToggle.tsx
│   ├── lib/
│   │   └── db.ts
│   ├── models/
│   │   └── todoModels.ts
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── .env.local
├── tailwind.config.ts
├── postcss.config.js
└── README.md

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://Zackmohamd/my-app.git
cd my-app



