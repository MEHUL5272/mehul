const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

const portfolio = {
  name: "Mehul Thakor",
  role: "Full Stack Developer",
  tagline: "I build clean, responsive and user-focused web experiences.",
  email: "thakormehul84666@gmail.com",
  phone: "9265153035",
  location: "Ahmedabad, Gujarat, India",
  about: "I am a BCA Dual student at GLS University and currently pursuing Full Stack Development training at Red & White Multimedia Education. I enjoy building practical web applications and learning technologies that turn ideas into useful digital products.",
  education: [
    {
      course: "BCA Dual (BCA + MCA)",
      institute: "GLS University",
      detail: "Semester 5 · Currently pursuing"
    },
    {
      course: "Full Stack Development Training",
      institute: "Red & White Multimedia Education",
      detail: "Currently pursuing"
    },
    {
      course: "Higher Secondary (12th)",
      institute: "Saraswati Vidhya Sankul, Borar · GHSEB",
      detail: "2022 · 55%"
    },
    {
      course: "Secondary (10th)",
      institute: "Saraswati Vidhya Sankul, Borar · GHSEB",
      detail: "2020 · 45%"
    }
  ],
  skills: [
    { name: "HTML", level: "Frontend" },
    { name: "CSS", level: "Frontend" },
    { name: "JavaScript", level: "Frontend" },
    { name: "React", level: "Frontend" },
    { name: "Node.js", level: "Backend" },
    { name: "Express.js", level: "Backend" },
    { name: "PHP", level: "Backend" },
    { name: "MongoDB", level: "Database" },
    { name: "Git", level: "Tools" },
    { name: "GitHub", level: "Tools" },
    { name: "VS Code", level: "Tools" }
  ],
  projects: [
    {
      number: "01",
      name: "Shree Shyam Coffee",
      type: "Full Stack E-commerce",
      description: "A coffee business website concept with product categories, product management, user accounts, cart and admin functionality.",
      stack: ["Node.js", "Express.js", "EJS", "MongoDB"]
    },
    {
      number: "02",
      name: "Vehicle Management System",
      type: "Flutter Application",
      description: "A vehicle record management app concept for managing vehicles, documents, expiry reminders, service records and vehicle history.",
      stack: ["Flutter", "Dart"]
    },
    {
      number: "03",
      name: "CartZone",
      type: "React E-commerce",
      description: "An e-commerce frontend project focused on product browsing and shopping cart interactions.",
      stack: ["React", "JavaScript", "CSS"]
    },
    {
      number: "04",
      name: "Blog Management System",
      type: "CRUD Application",
      description: "A blog application concept for creating, viewing, updating and deleting posts.",
      stack: ["Web Development", "CRUD"]
    }
  ]
};

app.get("/", (req, res) => {
  res.render("index", { portfolio, sent: req.query.sent === "1" });
});

app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.redirect("/#contact");
  }

  const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  res.redirect(`mailto:${portfolio.email}?subject=${subject}&body=${body}`);
});

app.listen(PORT, () => {
  console.log(`Portfolio is running at http://localhost:${PORT}`);
});
