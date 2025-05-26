# 💜 SheHub

SheHub is a community-driven initiative created by and for women who have completed a tech bootcamp or training program.  
Its goal is to highlight female tech talent, support job placement, and build a collaborative and empowering network within the tech industry.

This repository contains the main SheHub website, developed with React + Vite, designed as a landing page for the project.  
It includes information, resources, and contact forms for potential collaborators, partner companies, and new participants.

> ✨ The project started with a **vibe coding** approach, generating parts of the code through AI prompts.  
> Later on, everything was **customized, reviewed, and manually adapted** to fit the real needs of the SheHub team.

## 📁 Table of Contents

- [💜 SheHub](#-shehub)
  - [📁 Table of Contents](#-table-of-contents)
  - [💼 Tech Stack](#-tech-stack)
  - [🛠️ Getting Started / Prerequisites](#️-getting-started--prerequisites)
  - [⚙️ Installation](#️-installation)
  - [🔐 Environment Variables](#-environment-variables)
  - [💻 Run the Development Server](#-run-the-development-server)
  - [📂 Project Structure](#-project-structure)
  - [🌐 Language Support](#-language-support)

## 💼 Tech Stack

- React 18
- Vite
- Tailwind CSS
- React Router DOM
- shadcn/ui
- TypeScript
- Firebase
- Lucide-react
- Radix UI

## 🛠️ Getting Started / Prerequisites

Make sure you have the following installed:

- **Node.js** ≥ 18.x (tested with 22.14.0)
- **npm** ≥ 9.x

## ⚙️ Installation

```bash
git clone https://github.com/SheHub-es/shehub-vibecoding.git
cd shehub-vibecoding
npm install
```

## 🔐 Environment Variables

Environment configuration is managed through `.env` files.

1. Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

2. Fill in your Firebase credentials:

```env
# Firebase config (development environment)

VITE_FIREBASE_API_KEY=YOUR_API_KEY_HERE
VITE_FIREBASE_AUTH_DOMAIN=YOUR_PROJECT.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET=YOUR_PROJECT.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=YOUR_SENDER_ID
VITE_FIREBASE_APP_ID=YOUR_APP_ID
VITE_FIREBASE_MEASUREMENT_ID=YOUR_MEASUREMENT_ID
VITE_RECAPTCHA_SITE_KEY=TU_SITE_KEY
```

These are loaded in the `firebase.js` file using `import.meta.env`.

## 💻 Run the Development Server

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

## 📂 Project Structure

```bash
vibecoding-homepage/
├── public/
├── src/
│ ├── api/
│ ├── components/
│ ├── contexts/
│ ├── hooks/
│ ├── lib/
│ ├── pages/
│ └── translations/
├── App.tsx
├── index.css
├── main.tsx
├── .env.local
├── .env.example
├── index.html
├── tailwind.config.ts
├── vite.config.ts
├── vercel.json 
├── tsconfig.json 
├── README.md
```

## 🌐 Language Support

- This project uses a custom translation system built with React Context and `localStorage`.  
- Translations are managed manually through a `translations.ts` file with support for multiple languages (`es`, `en`, `ca`).

---
Made with 💜 by the SheHub team.