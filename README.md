# Mehul Thakor — Developer Portfolio

A responsive modern-dark portfolio built with **Node.js, Express.js and EJS**.

## Features
- Responsive modern dark UI
- About, skills, projects and education sections
- Contact form that opens the visitor's default email app
- Mobile navigation
- Portfolio content maintained in `app.js`

## Requirements
- Node.js 18 or newer
- npm

## Setup

1. Extract the project ZIP.
2. Open the project folder in VS Code.
3. Open the VS Code terminal.
4. Install dependencies:

```bash
npm install
```

5. Start the server:

```bash
npm start
```

6. Open this URL in your browser:

```text
http://localhost:3000
```

For automatic restart while developing:

```bash
npm run dev
```

## Customize
Open `app.js` and update the `portfolio` object:
- name, role, email, phone and location
- about text
- education
- skills
- projects

Add your real GitHub, LinkedIn and live project URLs when available. Do not publish placeholder or incorrect links.

## Project structure

```text
mehul-portfolio/
├── app.js
├── package.json
├── README.md
├── views/
│   ├── index.ejs
│   └── partials/
│       ├── header.ejs
│       └── footer.ejs
└── public/
    ├── css/
    │   └── style.css
    └── js/
        └── main.js
```
