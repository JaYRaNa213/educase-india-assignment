# 📘 Educase India – Frontend

A modern **ReactJS frontend** for the **Educase India** project.  
This app is built with **React**, **React Router**, and **TailwindCSS**, providing a clean UI and smooth navigation across multiple pages.

---

## 🚀 Features

- ⚛️ **React 19** with functional components  
- 🎨 **TailwindCSS** for styling  
- 🌐 **React Router DOM v7** for navigation  
- 📱 **Fully responsive** (desktop + mobile)  
- 🔖 **Reusable Navbar component**  

### 🧩 Pages Included
- 🏠 Welcome Page  
- 🔑 Login Page  
- 📝 Signup Page  
- ⚙️ Account Settings Page  

---

## 📂 Project Structure
educase_india/
├── src/
│   ├── components/
│   │   └── Navbar.jsx
│   ├── pages/
│   │   ├── Welcome.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   └── AccountSettings.jsx
│   ├── App.js
│   ├── index.css
│   └── index.js
├── public/
├── package.json
└── README.md


yaml
Copy code

---

## 🛠️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/educase_india.git
cd educase_india
2. Install Dependencies
bash
Copy code
npm install
3. Configure TailwindCSS
In tailwind.config.js:

js
Copy code
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
};
In src/index.css:

css
Copy code
@tailwind base;
@tailwind components;
@tailwind utilities;
4. Run the App
bash
Copy code
npm start
📸 Screenshots
🏠 Welcome Page

🔑 Login Page

📝 Signup Page

⚙️ Account Settings

🧑‍💻 Development Notes
Built with Create React App (CRA)

Uses React Router DOM v7.8 for navigation

All styles managed using TailwindCSS

🤝 Contributing
Contributions are welcome! 🙌

Fork the repo

Create a new branch (feature/your-feature)

Commit your changes

Push and create a Pull Request