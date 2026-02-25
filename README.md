# 🕹️ Cohort6 Capstone — Funko Pop Tracker

![React](https://img.shields.io/badge/React-Frontend-61DAFB?style=for-the-badge&logo=react&logoColor=white)  
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?style=for-the-badge&logo=javascript&logoColor=black)  
![json-server](https://img.shields.io/badge/json--server-MockAPI-FF6E40?style=for-the-badge)  
![npm](https://img.shields.io/badge/npm-Dependencies-CB3837?style=for-the-badge&logo=npm&logoColor=white)  
![GitHub](https://img.shields.io/badge/GitHub-%23181717?style=for-the-badge&logo=github&logoColor=white)

---

## 📌 Project Overview

**Funko Pop Tracker 🎎** is a web application built to help collectors **track, organize, and manage their Funko Pop collections**.

This project was developed as part of my Cohort6 capstone and demonstrates:

* A **React frontend** for dynamic, responsive UI
* A **mock backend API** using `json-server` for handling data
* Full CRUD functionality for managing your collection
* Login and registration flow using the mock API
* Clean project structure suitable for scaling and further development

---

## 🏗️ Architecture

React Frontend (`src/`)  
    ↓  
Mock API Backend (`funko-pop-tracker-api/`)  
    ↓  
Database (`database.json`)

* Frontend and backend communicate via RESTful API calls
* Data is stored and manipulated through the backend (`json-server`)

---

## 🚀 Core Features

* 🆕 Add new Funko Pop figures to your collection
* 🔍 View your collection at a glance
* ✏️ Edit figure details
* 🗑️ Remove items from the collection
* 💾 Persistent data storage via `json-server` mock API
* 🔐 Simple login & registration flow

---

## 📂 Project Structure

### Frontend (`src/`)

* Components and pages for displaying Funko Pops 🎎
* API service for communicating with backend
* CSS/Styling for a clean, responsive UI

### Backend (`funko-pop-tracker-api/`)

* `json-server` serving `database.json`  
* Endpoints for Create, Read, Update, Delete operations (`/users`, `/pops`)  
* Handles mock data storage and retrieval  

---

## 🛠️ Tech Stack

### Frontend

* React (Create React App)  
* JavaScript (ES6+)  
* CSS  

### Backend

* json-server (mock REST API)  

### Tools

* Git / GitHub  
* Visual Studio Code / IDE  
* npm / Node.js  

---

## ⚙️ Getting Started

1. Clone the repository:

```bash
git clone https://github.com/bgizzle78/cohort6-capstone.git
cd funko-pop-tracker

### 2️⃣ Install Frontend and Backend Dependencies

```bash
# Frontend
cd src
npm install
```
```bash
# Backend
cd ../funko-pop-tracker-api
npm install

### 3️⃣ Start Both Frontend and Backend

```bash
# Backend first (mock API)
npx json-server -p 8088 -w database.json
```
```bash
# In a new terminal, start frontend
cd ../src
npm start

### 4️⃣ 
 http://localhost:3000
 will open in your browser.
Login/register and test all CRUD functionality.

---

## 🎯 What This Project Demonstrates

* React component-based architecture
* Dynamic state management
* Full CRUD operations with a backend API
* RESTful API communication
* Separation of frontend and backend concerns
* Project organization and scalability

---

## 🔮 Future Enhancements

* 🔐 User authentication & login
* 📊 Analytics (most collected series, total collection value)
* ☁️ Cloud deployment for persistence
* 📱 Fully responsive, mobile-first design

---

## 👨‍💻 Author

**Brandon Gray**
Full Stack Developer