import { useState } from "react";
import { motion } from "framer-motion";
import { Code } from "lucide-react";

const SkillsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const skills = [
    {
      name: "JavaScript",
      category: "Frontend",
      color: "#d3c02eff",
      bgColor: "bg-yellow-200",
    },
    {
      name: "Python",
      category: "AI/ML",
      color: "#3776AB",
      bgColor: "bg-blue-200",
    },
    {
      name: "ReactJs",
      category: "Frontend",
      color: "#4fb1ccff",
      bgColor: "bg-cyan-200",
    },
    {
      name: "HTML",
      category: "Frontend",
      color: "#E34F26",
      bgColor: "bg-red-200",
    },
    {
      name: "CSS",
      category: "Frontend",
      color: "#1572B6",
      bgColor: "bg-blue-200",
    },
    {
      name: "BootStrap",
      category: "Frontend",
      color: "#7952B3",
      bgColor: "bg-purple-200",
    },
    {
      name: "Tailwind",
      category: "Frontend",
      color: "#06B6D4",
      bgColor: "bg-cyan-200",
    },
    {
      name: "Node.JS",
      category: "Backend",
      color: "#339933",
      bgColor: "bg-green-200",
    },
    {
      name: "Express.JS",
      category: "Backend",
      color: "#000000",
      bgColor: "bg-gray-200",
    },
    {
      name: "MongoDB",
      category: "Database",
      color: "#47A248",
      bgColor: "bg-green-200",
    },
    {
      name: "MySQL",
      category: "Database",
      color: "#4479A1",
      bgColor: "bg-blue-200",
    },
    {
      name: "GitHub",
      category: "Tool",
      color: "#181717",
      bgColor: "bg-gray-200",
    },
    {
      name: "VSCode",
      category: "Tool",
      color: "#007ACC",
      bgColor: "bg-blue-200",
    },
    { name: "Git", category: "Tool", color: "#F05032", bgColor: "bg-red-200" },
    {
      name: "Pandas",
      category: "AI/ML",
      color: "#150458",
      bgColor: "bg-indigo-200",
    },
    {
      name: "Numpy",
      category: "AI/ML",
      color: "#1087afff",
      bgColor: "bg-blue-900",
    },
    {
      name: "Matplotlib",
      category: "AI/ML",
      color: "#1a90d5ff",
      bgColor: "bg-blue-200",
    },
    {
      name: "Tensorflow",
      category: "AI/ML",
      color: "#FF6F00",
      bgColor: "bg-orange-200",
    },
    {
      name: "C#",
      category: "Language",
      color: "#239120",
      bgColor: "bg-green-200",
    },
    {
      name: "Angular.JS",
      category: "Frontend",
      color: "#ec456cff",
      bgColor: "bg-red-200",
    },
    {
      name: "spaCy",
      category: "AI/ML",
      color: "#307CBA",
      bgColor: "bg-blue-200",
    },
    {
      name: "Docker",
      category: "Tool",
      color: "#2496ED",
      bgColor: "bg-blue-200",
    },
    {
      name: "Tomcat",
      category: "Tool",
      color: "#bea85aff",
      bgColor: "bg-yellow-200",
    },
    {
      name: "Gulp.js",
      category: "Tool",
      color: "#CF4647",
      bgColor: "bg-red-200",
    },
    {
      name: "Google Cloud Platform (GCP)",
      category: "Tool",
      color: "#4285F4",
      bgColor: "bg-blue-200",
    },
    {
      name: "Agile",
      category: "Tool",
      color: "#FF6F00",
      bgColor: "bg-orange-200",
    },
    {
      name: "Arduino",
      category: "Electronics",
      color: "#00979D",
      bgColor: "bg-teal-200",
    },
    {
      name: "Confluence",
      category: "Tool",
      color: "#172B4D",
      bgColor: "bg-blue-200",
    },
    {
      name: "Jira",
      category: "Tool",
      color: "#0052CC",
      bgColor: "bg-blue-200",
    },
    {
      name: "Java",
      category: "Language",
      color: "#dd871fff",
      bgColor: "bg-orange-200",
    },
    {
      name: "MATLAB",
      category: "Language",
      color: "#0076A8",
      bgColor: "bg-blue-200",
    },
    {
      name: "Typescript",
      category: "Language",
      color: "#3178C6",
      bgColor: "bg-blue-200",
    },
    {
      name: "Excel",
      category: "Tool",
      color: "#217346",
      bgColor: "bg-green-200",
    },
    {
      name: "Outlook",
      category: "Tool",
      color: "#0078D4",
      bgColor: "bg-blue-200",
    },
    {
      name: "Tableau",
      category: "Tool",
      color: "#E97627",
      bgColor: "bg-orange-200",
    },
    {
      name: "REST APIs",
      category: "Backend",
      color: "#3d86d0ff",
      bgColor: "bg-blue-200",
    },
    {
      name: "Anaconda",
      category: "AI/ML",
      color: "#44A833",
      bgColor: "bg-green-200",
    },
    {
      name: "Angular Material",
      category: "Frontend",
      color: "#DD0031",
      bgColor: "bg-red-200",
    },
    {
      name: "Babel",
      category: "Frontend",
      color: "#8a7b26ff",
      bgColor: "bg-yellow-200",
    },
    {
      name: "Bash",
      category: "Backend",
      color: "#4EAA25",
      bgColor: "bg-green-200",
    },
    {
      name: "Bitbucket",
      category: "Tool",
      color: "#205081",
      bgColor: "bg-blue-200",
    },
    {
      name: "DBeaver",
      category: "Tool",
      color: "#2d7474ff",
      bgColor: "bg-teal-200",
    },
    {
      name: "Eclipse",
      category: "Tool",
      color: "#2C2255",
      bgColor: "bg-indigo-200",
    },
    {
      name: "ESLint",
      category: "Frontend",
      color: "#4B32C3",
      bgColor: "bg-indigo-200",
    },
    {
      name: "IntelliJ",
      category: "Tool",
      color: "#000000",
      bgColor: "bg-gray-200",
    },
    {
      name: "Jenkins",
      category: "Tool",
      color: "#D24939",
      bgColor: "bg-red-200",
    },
    {
      name: "Jupyter",
      category: "AI/ML",
      color: "#F37626",
      bgColor: "bg-orange-200",
    },
    {
      name: "LaTeX",
      category: "Tool",
      color: "#025b5bff",
      bgColor: "bg-teal-200",
    },
    {
      name: "MaterialUI",
      category: "Frontend",
      color: "#0081CB",
      bgColor: "bg-blue-200",
    },
    {
      name: "Maven",
      category: "Tool",
      color: "#C71A36",
      bgColor: "bg-red-200",
    },
    {
      name: "Mocha",
      category: "AI/ML",
      color: "#8D6748",
      bgColor: "bg-orange-200",
    },
    {
      name: "PostgreSQL",
      category: "Database",
      color: "#336791",
      bgColor: "bg-blue-200",
    },
    {
      name: "Postman",
      category: "Tool",
      color: "#FF6C37",
      bgColor: "bg-orange-200",
    },
    {
      name: "Raspberry Pi",
      category: "Electronics",
      color: "#C51A4A",
      bgColor: "bg-red-200",
    },
    {
      name: "Scikit-learn",
      category: "AI/ML",
      color: "#F7931E",
      bgColor: "bg-orange-200",
    },
    {
      name: "Storybook",
      category: "Frontend",
      color: "#FF4785",
      bgColor: "bg-pink-200",
    },
    {
      name: "Vercel",
      category: "Tool",
      color: "#000000",
      bgColor: "bg-gray-200",
    },
    {
      name: "ViteJS",
      category: "Frontend",
      color: "#646CFF",
      bgColor: "bg-indigo-200",
    },
  ];

  const categories = [
    "All",
    "Frontend",
    "AI/ML",
    "Backend",
    "Databases",
    "Electronics",
    "Tools",
  ];

  const filteredSkills =
    activeFilter === "All"
      ? skills
      : skills.filter((skill) => {
          if (activeFilter === "Frontend")
            return (
              skill.category === "Frontend" || skill.category === "Language"
            );
          if (activeFilter === "AI/ML") return skill.category === "AI/ML";
          if (activeFilter === "Backend") return skill.category === "Backend";
          if (activeFilter === "Databases")
            return skill.category === "Database";
          if (activeFilter === "Tools")
            return skill.category === "Tool" || skill.category === "Framework";
          return skill.category === activeFilter;
        });

  const getSkillIcon = (name: string) => {
    const iconMap: { [key: string]: string } = {
      JavaScript: "devicon-javascript-plain",
      Python: "devicon-python-plain",
      ReactJs: "devicon-react-original",
      HTML: "devicon-html5-plain",
      CSS: "devicon-css3-plain",
      BootStrap: "devicon-bootstrap-plain",
      Tailwind: "devicon-tailwindcss-plain",
      "Node.JS": "devicon-nodejs-plain",
      "Express.JS": "devicon-express-original",
      MongoDB: "devicon-mongodb-plain",
      MySQL: "devicon-mysql-plain",
      GitHub: "devicon-github-original",
      VSCode: "devicon-vscode-plain",
      Git: "devicon-git-plain",
      Pandas: "devicon-pandas-plain",
      Numpy: "devicon-numpy-plain",
      Matplotlib: "devicon-matplotlib-plain",
      Tensorflow: "devicon-tensorflow-original",
      "C#": "devicon-csharp-plain",
      "Angular.JS": "devicon-angularjs-plain",
      spaCy: "devicon-python-plain", // spaCy uses Python icon
      Docker: "devicon-docker-plain",
      Tomcat: "devicon-tomcat-line",
      "Gulp.js": "devicon-gulp-plain",
      "Google Cloud Platform (GCP)": "devicon-googlecloud-plain",
      Agile: "devicon-jira-plain", // Jira icon used for Agile
      Arduino: "devicon-arduino-plain",
      Confluence: "devicon-confluence-plain",
      Jira: "devicon-jira-plain",
      Java: "devicon-java-plain",
      MATLAB: "devicon-matlab-plain",
      Typescript: "devicon-typescript-plain",
      Excel: null,
      Outlook: null,
      Tableau: "devicon-minitab-plain",
      "REST APIs": null,
      Anaconda: "devicon-anaconda-plain",
      "Angular Material": "devicon-angularmaterial-plain",
      Babel: "devicon-babel-plain",
      Bash: "devicon-bash-plain",
      Bitbucket: "devicon-bitbucket-plain",
      DBeaver: "devicon-dbeaver-plain",
      Eclipse: "devicon-eclipse-plain",
      ESLint: "devicon-eslint-plain",
      IntelliJ: "devicon-intellij-plain",
      Jenkins: "devicon-jenkins-plain",
      Jupyter: "devicon-jupyter-plain",
      LaTeX: "devicon-latex-plain",
      MaterialUI: "devicon-materialui-plain",
      Maven: "devicon-maven-plain",
      Mocha: "devicon-mocha-plain",
      PostgreSQL: "devicon-postgresql-plain",
      Postman: "devicon-postman-plain",
      "Raspberry Pi": "devicon-raspberrypi-plain",
      "Scikit-learn": "devicon-scikitlearn-plain",
      Storybook: "devicon-storybook-plain",
      Vercel: "devicon-vercel-plain",
      ViteJS: "devicon-vitejs-plain",
    };

    return iconMap[name];
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      className="glass-panel p-8 rounded-xl backdrop-blur-md border border-white/10"
    >
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-semibold flex items-center text-white">
          <Code className="w-6 h-6 mr-3 text-brand-purple" />
          Technical Skills
        </h3>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-3 mb-8 justify-center">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setActiveFilter(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm border ${
              activeFilter === category
                ? "bg-brand-purple text-white border-brand-purple/50"
                : "bg-gray-800/30 text-gray-300 border-white/10 hover:bg-gray-800/50 hover:border-brand-purple/30"
            }`}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Skills Grid */}
      <motion.div
        layout
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-6"
      >
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
              duration: 0.3,
              delay: index * 0.05,
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
            whileHover={{
              scale: 1.1,
              y: -5,
              transition: { duration: 0.2 },
            }}
            className="flex flex-col items-center group cursor-pointer"
          >
            <motion.div
              className={`relative w-16 h-16 ${skill.bgColor} rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10 group-hover:border-brand-purple/50 transition-all duration-300`}
              whileHover={{
                boxShadow: "0 10px 30px -5px rgba(155, 135, 245, 0.4)",
              }}
            >
              {getSkillIcon(skill.name) ? (
                <i
                  className={`${getSkillIcon(skill.name)} text-3xl`}
                  style={{ color: skill.color }}
                ></i>
              ) : (
                <span
                  className="text-base font-semibold text-center"
                  style={{ color: skill.color }}
                >
                  {skill.name}
                </span>
              )}

              {/* Shine effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            <motion.span
              className="text-xs font-medium mt-3 text-center text-gray-300 group-hover:text-white transition-colors max-w-20"
              whileHover={{ scale: 1.05 }}
            >
              {skill.name}
            </motion.span>
          </motion.div>
        ))}
      </motion.div>

      {filteredSkills.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400">No skills found in this category.</p>
        </div>
      )}
    </motion.div>
  );
};

export default SkillsSection;
