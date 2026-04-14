require("dotenv").config();
const mongoose = require("mongoose");
const Skill = require("./models/Skill");
const Project = require("./models/Project");

const skills = [
  {
    name: "React.js",
    icon: "devicon-react-original colored",
    category: "Frontend",
  },
  {
    name: "JavaScript",
    icon: "devicon-javascript-plain colored",
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    icon: "devicon-tailwindcss-plain colored",
    category: "Frontend",
  },
  {
    name: "TypeScript",
    icon: "devicon-typescript-plain colored",
    category: "Frontend",
  },
  {
    name: "Node.js",
    icon: "devicon-nodejs-plain colored",
    category: "Backend",
  },
  { name: "Express.js", icon: "devicon-express-original", category: "Backend" },
  { name: "Next.js", icon: "devicon-nextjs-plain", category: "Backend" },
  {
    name: "REST API",
    icon: "devicon-openapi-plain colored",
    category: "Backend",
  },
  {
    name: "MongoDB",
    icon: "devicon-mongodb-plain colored",
    category: "Database",
  },
  { name: "MySQL", icon: "devicon-mysql-plain colored", category: "Database" },
  { name: "Git", icon: "devicon-git-plain colored", category: "Tools" },
  { name: "GitHub", icon: "devicon-github-original", category: "Tools" },
  { name: "Vercel", icon: "devicon-vercel-original", category: "Tools" },
  { name: "Postman", icon: "devicon-postman-plain colored", category: "Tools" },
  {
    name: "Agile",
    icon: "devicon-jira-plain colored",
    category: "Methodologies",
  },
  { name: "Scrum", icon: "SCR", category: "Methodologies" },
  { name: "Kotlin", icon: "devicon-kotlin-plain colored", category: "Other" },
  { name: "Flutter", icon: "devicon-flutter-plain colored", category: "Other" },
  {
    name: "Android Studio",
    icon: "devicon-androidstudio-plain colored",
    category: "Other",
  },
  { name: "Tableau", icon: "Tb", category: "Other" },
  { name: "Cisco Packet Tracer", icon: "CPT", category: "Other" },
];

const projects = [
  {
    title: "Gantavia",
    description:
      "A full-stack travel companion web app for destination exploration, trip planning, and booking management. Features real-time weather API, Google Maps integration, and JWT authentication.",
    techStack: ["React.js", "Node.js", "Express", "MongoDB", "JWT", "Tailwind"],
    liveUrl: "",
    githubUrl: "https://github.com/Yachna17/gantavia",
    featured: true,
    order: 0,
  },
  {
    title: "YASDEV",
    description:
      "Frontend developer role. Built and maintained responsive components using TypeScript and Next.js for a professional web presence.",
    techStack: ["TypeScript", "Next.js", "Tailwind CSS"],
    liveUrl: "https://www.yasdev.com",
    githubUrl: "",
    featured: false,
    order: 1,
  },
  {
    title: "Portfolio v1",
    description:
      "Previous personal portfolio. Responsive design with contact form, deployed with custom domain on Vercel.",
    techStack: ["React.js", "JavaScript", "CSS"],
    liveUrl: "https://yachna.cv",
    githubUrl: "",
    featured: false,
    order: 2,
  },
];

const seed = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Connected to MongoDB");

  await Skill.deleteMany({});
  await Project.deleteMany({});
  console.log("Cleared existing data");

  await Skill.insertMany(skills);
  console.log(`Seeded ${skills.length} skills`);

  await Project.insertMany(projects);
  console.log(`Seeded ${projects.length} projects`);

  await mongoose.disconnect();
  console.log("Done");
};

seed().catch(console.error);
