# Aideas Project

A student-centric educational platform designed for interactive course management and learning.

## 🚀 Features

- **Student Dashboard**: A comprehensive overview of student activities and progress.
- **Course Catalog**: Dynamic course listings powered by `RawData.json`.
- **Interactive Sessions**: Dedicated pages for course sessions and learning.
- **Secure Authentication**: Integrated student login functionality.

## 🛠️ Tech Stack

- **Framework**: React 19 (Vite)
- **Routing**: React Router DOM v7
- **Styling**: Vanilla CSS
- **Data Management**: JSON-based mock data (`RawData.json`)

## 📁 Project Structure

```text
frontend/app/src/
├── auth/          # Authentication components (Login)
├── components/    # Common UI components (StudentNavbar)
├── student/       # Student pages (Dashboard, Courses, Sessions)
├── App.jsx        # Root application and routing
├── main.jsx       # Entry point
└── RawData.json   # Course data repository
```

## ⚙️ Setup and Installation

1. **Navigate to the application folder**:
   ```bash
   cd frontend/app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

## 📝 Scripts

- `npm run dev`: Starts the Vite development server.
