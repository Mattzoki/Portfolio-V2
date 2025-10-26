import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";
import PrintableResume from "@/components/PrintableResume";
import SkillsSection from "@/components/SkillsSection";
import {
  Briefcase,
  GraduationCap,
  Code,
  Award,
  CheckCircle2,
  Brain,
  Cpu,
  Database,
  Globe,
  GitBranch,
  Palette,
  Wrench,
  Target,
  Bot,
  LaptopMinimal,
  BookOpen,
} from "lucide-react";

const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState("skills");

  const education = [
    {
      institution: "Vrije Universiteit Amsterdam (VU Amsterdam)",
      degree: "Master of Arts (M.A.)",
      field: "Linguistics: Text Mining (Language & AI)",
      duration: "2024 - 2025",
      location: "Amsterdam, Netherlands",
      gpa: "7.1",
    },
    {
      institution: "SRM University",
      degree: "Bachelor of Technology (B.Tech)",
      field: "Electrical, Electronics and Communication Engineering",
      duration: "2015 - 2019",
      location: "Chennai, India",
      gpa: "6.87",
    },
  ];

  const experience = [
    {
      position: "NLP Researcher",
      company: "Self Research",
      duration: "August 2024 - Present",
      description:
        "Working on applied NLP and text mining projects integrating transformer-based models with full-stack systems.",
      responsibilities: [
        "Designed and fine-tuned BERT and XLM-R models for Named Entity Recognition and text classification tasks",
        "Built NLP data pipelines using spaCy and HuggingFace for linguistic analysis and dataset preparation",
        "Developed full-stack web tools integrating AI models into production environments",
        "Conducted error analysis and model evaluation to improve generalisation across datasets",
        "Collaborated with researchers to document experiments and report model robustness findings",
      ],
    },
    {
      position: "Senior Frontend Developer",
      company: "SiteRecon",
      duration: "September 2022 - August 2023",
      description:
        "Led frontend development for high-performance mapping and analytics applications using React and OpenLayers.",
      responsibilities: [
        "Built scalable UI components and improved load performance for large data visualisations",
        "Optimised page rendering and reduced code redundancy by 30%",
        "Developed reusable components via private npm packages and improved code maintainability",
        "Ensured cross-browser responsiveness and accessibility for complex interactive features",
      ],
    },
    {
      position: "Senior UI Developer",
      company: "Infosys",
      duration: "January 2022 - November 2022",
      description:
        "Managed a frontend team while delivering enterprise-grade Angular applications for financial clients.",
      responsibilities: [
        "Led a team of five developers to deliver client-focused web solutions",
        "Developed and deployed scalable Angular applications using Docker and Tomcat",
        "Automated peer-review processes with Gulp, Jasmine, and Karma testing suites",
        "Maintained documentation on Confluence and coordinated project tasks via Jira",
      ],
    },
    {
      position: "System Engineer",
      company: "Infosys",
      duration: "January 2020 - December 2021",
      description:
        "Developed and optimized financial web applications using Angular, improving performance and usability.",
      responsibilities: [
        "Built and deployed SPA applications using Angular, Bootstrap, and Angular Material",
        "Created reusable frontend modules, reducing development time by 50 hours per module",
        "Collaborated with backend teams to streamline API integrations and data flow",
        "Implemented ETL automation in C# to reduce manual reporting workload by 1.5 hours weekly",
      ],
    },
    {
      position: "Embedded Systems Intern",
      company: "Keltron Advanced Studies",
      duration: "June 2018  ",
      description:
        "Developed a Python–Arduino prototype for obstacle detection and voice-assisted navigation.",
      responsibilities: [
        "Built an ultrasonic navigation system for the visually impaired with 95% accuracy at 15m range",
        "Integrated Python-based speech feedback with sensor data for real-time obstacle detection",
      ],
    },
    {
      position: "Team Leader, International Relations",
      company: "AIESEC in Chennai",
      duration: "June 2016 - June 2017",
      description:
        "Led international exchange operations, sales, and partnerships across multiple regions.",
      responsibilities: [
        "Established exchange partnerships with 8 countries, improving departmental profit by 15%",
        "Managed and trained a sales team, achieving 92% satisfaction ratings among participants",
        "Optimized workflow and reduced departmental expenses by 20% through data analysis",
      ],
    },
  ];

  const projects = [
    {
      title: "Generalisation (NER Thesis Project)",
      description:
        "Explores generalisation and robustness of Named Entity Recognition models across domain shifts and augmentation strategies using transformer architectures.",
      technologies: [
        "Python",
        "BERT",
        "NLP",
        "Machine Learning",
        "HuggingFace",
      ],
      duration: "02/2024 - Present",
      type: "Master’s Thesis",
      accomplishments: [
        "Fine-tuned and evaluated BERT-based models on CoNLL and OntoNotes datasets",
        "Designed challenge sets to test model robustness under domain and adversarial shifts",
        "Performed cross-domain evaluation and error analysis to study linguistic generalisation",
      ],
    },
    {
      title: "Named Entity Recognition",
      description:
        "Developed and evaluated models for Named Entity Recognition using classical and transformer-based approaches.",
      technologies: ["Python", "NLP", "Machine Learning", "Scikit-learn"],
      duration: "10/2023 - 12/2023",
      type: "Research Project",
      accomplishments: [
        "Optimised feature engineering and vectorisation for improved F1-macro performance",
        "Benchmarked traditional ML models against transformer-based baselines",
        "Performed comparative analysis using CoNLL2003 dataset",
      ],
    },
    {
      title: "Emotion Detection System",
      description:
        "Built a sentiment and emotion classification system for conversational data to detect emotional states in text.",
      technologies: ["Python", "NLP", "Machine Learning", "Pandas"],
      duration: "09/2023 - 10/2023",
      type: "Research Project",
      accomplishments: [
        "Trained emotion classification models using WASSA and tweet datasets",
        "Addressed class imbalance through sampling and augmentation strategies",
        "Evaluated inter-annotator agreement to enhance dataset consistency",
      ],
    },
    {
      title: "Semantic Role Labelling",
      description:
        "Implemented a token-level NER pipeline for semantic role identification using CoNLL-style datasets.",
      technologies: ["Python", "NLP", "Jupyter", "Sequence Modeling"],
      duration: "07/2023 - 08/2023",
      type: "Academic Project",
      accomplishments: [
        "Developed preprocessing and feature extraction workflows for sequence tagging",
        "Built span-level evaluation and ablation studies for model comparison",
        "Created error analysis notebooks for token misclassification patterns",
      ],
    },
    {
      title: "Negation Scope Detection",
      description:
        "Investigated negation detection in biomedical and general text using classical ML and transformer architectures.",
      technologies: ["Python", "BERT", "spaCy", "Machine Learning"],
      duration: "05/2023 - 06/2023",
      type: "Research Project",
      accomplishments: [
        "Implemented NegBERT and custom ML pipelines for negation scope detection",
        "Performed feature engineering with dependency parsing and contextual embeddings",
        "Conducted extensive error and performance evaluation using F1 and recall metrics",
      ],
    },
    {
      title: "Machine Translation (en↔hi)",
      description:
        "Developed a bilingual translation model and evaluation pipeline for English–Hindi translation using transformer models.",
      technologies: ["Python", "Machine Learning", "NLP", "Llama", "SacreBLEU"],
      duration: "03/2023 - 05/2023",
      type: "Independent Project",
      accomplishments: [
        "Trained a Llama-3 based model for bidirectional translation on WMT datasets",
        "Implemented evaluation with SacreBLEU and custom error analysis scripts",
        "Automated data preparation and tokenization workflows for reproducibility",
      ],
    },
    {
      title: "Image Search Engine",
      description:
        "Developed an Angular web app integrating the Pixabay API for dynamic image retrieval.",
      technologies: ["Angular", "TypeScript", "SCSS", "REST API"],
      duration: "08/2023 - 09/2023",
      type: "Personal Project",
      accomplishments: [
        "Implemented paginated search and dynamic filtering with RxJS patterns",
        "Created modular reusable components for scalable frontend design",
        "Integrated CI-friendly configurations and test scaffolding",
      ],
    },
    {
      title: "BMG Financial Platform",
      description:
        "Developed an Angular-based SPA for managing payments and royalties for artists and composers.",
      technologies: ["Angular", "JavaScript", "HTML", "CSS", "Docker"],
      duration: "10/2022 - 08/2023",
      type: "Professional Project",
      accomplishments: [
        "Built and deployed enterprise-grade SPA applications for financial workflows",
        "Collaborated with backend teams to ensure seamless API integration",
        "Mentored junior developers and implemented reusable design patterns",
      ],
    },
    {
      title: "Landscape Mapping Software",
      description:
        "High-performance ReactJS and OpenLayers platform for automated landscape measurement and visualization.",
      technologies: ["React", "OpenLayers", "JavaScript", "Web Development"],
      duration: "09/2022 - 07/2023",
      type: "Professional Project",
      accomplishments: [
        "Built scalable UI components with advanced geospatial rendering",
        "Optimized data handling for large coordinate sets with minimal latency",
        "Improved application performance and cross-browser responsiveness",
      ],
    },
    {
      title: "Navigation System for the Blind",
      description:
        "Created an assistive navigation system integrating ultrasonic sensors and Python-based audio feedback.",
      technologies: ["Arduino", "Python", "IoT", "Embedded Systems"],
      duration: "06/2018 - 07/2018",
      type: "Undergraduate Project",
      accomplishments: [
        "Achieved 95% accuracy in obstacle detection within a 15-meter range",
        "Integrated speech synthesis with real-time ultrasonic data",
        "Prototyped a wearable mobility support system for the visually impaired",
      ],
    },
    {
      title: "ETL Pipeline Automation",
      description:
        "Automated ETL processes in SSMS using a C# query-based workflow for daily reporting.",
      technologies: ["C#", "SQL", "ETL", "Automation"],
      duration: "05/2021 - 06/2021",
      type: "Professional Project",
      accomplishments: [
        "Automated data extraction and email reporting pipelines in SSMS",
        "Reduced manual reporting effort by 1.5 hours per week",
        "Minimized human error through automated validation checks",
      ],
    },
  ];

  const certifications = [
    {
      name: "Agile Certified Practitioner",
      issuer: "Infosys Ltd",
      date: "June 2020",
      skills: "Agile Methodologies, Scrum, Project Management",
    },
    {
      name: "Privacy by Design Python",
      issuer: "Infosys Ltd",
      date: "December 2020",
      skills: "Data Privacy, Secure Programming, Python Development",
    },
    {
      name: "Miracles of Human Language: An Introduction to Linguistics",
      issuer: "Leiden University (Coursera)",
      date: "April 2, 2024",
      skills: "Linguistic Theory, Syntax, Phonetics, Semantics",
      credential: "6N7ZNCUN6E8J",
    },
    {
      name: "Cloud Computing on Google Cloud Platform",
      issuer: "Infosys Ltd",
      date: "June 2020",
      skills: "Cloud Deployment, GCP Services, Virtualization",
    },
    {
      name: "Six Sigma Green Belt",
      issuer: "KPMG India",
      date: "August 2019",
      skills: "Process Optimization, Quality Management, Data Analytics",
      credential: "PU082019141",
    },
  ];

  const softSkills = [
    {
      skill: "Resilience",
      description: "Persistent under challenging and uncertain conditions",
    },
    {
      skill: "Team Collaboration",
      description: "Cooperative and goal-oriented team participation",
    },
    {
      skill: "Adaptability",
      description: "Quick learning of new frameworks and research methods",
    },
    {
      skill: "Leadership",
      description: "Encourages initiative and collaboration within teams",
    },
    {
      skill: "Communication",
      description: "Clear articulation of ideas and technical concepts",
    },
    {
      skill: "Problem Solving",
      description: "Analytical approach to complex technical challenges",
    },
  ];

  const resumeHighlights = [
    {
      title: "NLP Researcher",
      description:
        "Experienced in natural language processing, text mining, and transformer-based models such as BERT and RNNs for applied linguistic research.",
      icon: <BookOpen className="h-8 w-8 text-brand-purple" />,
    },
    {
      title: "AI & ML Engineer",
      description:
        "Proficient in developing, fine-tuning, and evaluating machine learning models with expertise in Python, spaCy, and Hugging Face ecosystems.",
      icon: <Brain className="h-8 w-8 text-brand-purple" />,
    },
    {
      title: "Full-Stack Developer",
      description:
        "Former Senior Frontend Developer skilled in Angular, React, and Node.js, with experience in building scalable, production-ready web applications.",
      icon: <Code className="h-8 w-8 text-brand-purple" />,
    },
    {
      title: "Data-Driven Problem Solver",
      description:
        "Combines analytical thinking with ML and software engineering to design intelligent, data-oriented solutions for real-world challenges.",
      icon: <Database className="h-8 w-8 text-brand-purple" />,
    },
  ];

  const tabContent = {
    skills: (
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {resumeHighlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-panel p-6 rounded-lg flex items-start backdrop-blur-md border border-white/10"
            >
              <div className="mr-4 bg-brand-purple/10 p-3 rounded-full">
                {highlight.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1 text-white">
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground">{highlight.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <SkillsSection />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="glass-panel p-6 rounded-lg backdrop-blur-md border border-white/10"
        >
          <h3 className="text-xl font-semibold mb-6 text-white">Soft Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {softSkills.map((item, index) => (
              <div key={index} className="bg-secondary/50 p-4 rounded-lg">
                <h4 className="font-medium text-lg mb-1">{item.skill}</h4>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    ),
    education: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        {education.map((edu, index) => (
          <motion.div
            key={edu.institution}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass-panel p-6 rounded-lg"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
              <div className="flex-1">
                <div className="flex items-start">
                  <div className="bg-brand-purple/10 p-2 rounded-full mr-4 hidden md:block">
                    <GraduationCap className="h-6 w-6 text-brand-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <div className="text-lg mt-1">{edu.institution}</div>
                    <div className="text-muted-foreground mt-1">
                      {edu.field}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start md:items-end text-right">
                <div className="px-3 py-1 rounded-full text-sm bg-brand-purple/10 text-brand-purple">
                  {edu.gpa}
                </div>
                <div className="text-sm text-muted-foreground mt-2">
                  {edu.duration}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {edu.location}
                </div>
              </div>
            </div>
            <div className="mt-4 pl-4 border-l-2 border-brand-purple/30">
              <h4 className="font-medium mb-2">Key Courses:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {edu.institution.includes("Vrije") ? (
                  <>
                    <li className="text-sm flex items-center">
                      <span className="h-1.5 w-1.5 bg-brand-purple rounded-full mr-2"></span>
                      Human Language Technology
                    </li>
                    <li className="text-sm flex items-center">
                      <span className="h-1.5 w-1.5 bg-brand-purple rounded-full mr-2"></span>
                      Machine Learning
                    </li>
                    <li className="text-sm flex items-center">
                      <span className="h-1.5 w-1.5 bg-brand-purple rounded-full mr-2"></span>
                      Language as Data
                    </li>
                    <li className="text-sm flex items-center">
                      <span className="h-1.5 w-1.5 bg-brand-purple rounded-full mr-2"></span>
                      Linguistic Research
                    </li>
                    <li className="text-sm flex items-center">
                      <span className="h-1.5 w-1.5 bg-brand-purple rounded-full mr-2"></span>
                      Advanced NLP
                    </li>
                    <li className="text-sm flex items-center">
                      <span className="h-1.5 w-1.5 bg-brand-purple rounded-full mr-2"></span>
                      Applied Text Mining
                    </li>
                  </>
                ) : (
                  <>
                    <li className="text-sm flex items-center">
                      <span className="h-1.5 w-1.5 bg-brand-purple rounded-full mr-2"></span>
                      Electrical Circuits & Systems
                    </li>
                    <li className="text-sm flex items-center">
                      <span className="h-1.5 w-1.5 bg-brand-purple rounded-full mr-2"></span>
                      Signal Processing
                    </li>
                    <li className="text-sm flex items-center">
                      <span className="h-1.5 w-1.5 bg-brand-purple rounded-full mr-2"></span>
                      Communication Networks
                    </li>
                    <li className="text-sm flex items-center">
                      <span className="h-1.5 w-1.5 bg-brand-purple rounded-full mr-2"></span>
                      Embedded Systems & Arduino
                    </li>
                    <li className="text-sm flex items-center">
                      <span className="h-1.5 w-1.5 bg-brand-purple rounded-full mr-2"></span>
                      Control Systems
                    </li>
                    <li className="text-sm flex items-center">
                      <span className="h-1.5 w-1.5 bg-brand-purple rounded-full mr-2"></span>
                      Digital Electronics
                    </li>
                  </>
                )}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    ),
    experience: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        {experience.map((exp, index) => (
          <motion.div
            key={exp.position}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass-panel p-6 rounded-lg"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
              <div className="flex-1">
                <div className="flex items-start">
                  <div className="bg-brand-purple/10 p-2 rounded-full mr-4 hidden md:block">
                    <Briefcase className="h-6 w-6 text-brand-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{exp.position}</h3>
                    <div className="text-lg mt-1">{exp.company}</div>
                  </div>
                </div>
              </div>
              <div className="text-sm text-muted-foreground md:text-right">
                {exp.duration}
              </div>
            </div>
            <p className="text-muted-foreground mb-4 pl-0 md:pl-12">
              {exp.description}
            </p>
            <div className="pl-0 md:pl-12">
              <h4 className="font-medium mb-2">Key Responsibilities:</h4>
              <ul className="space-y-2">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-brand-purple mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    ),
    projects: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass-panel p-6 rounded-lg"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-xs py-1 px-3 bg-brand-purple/10 text-brand-purple rounded-full">
                  {project.type}
                </span>
                <span className="text-xs text-muted-foreground">
                  {project.duration}
                </span>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">{project.description}</p>

            <div className="mb-4">
              <h4 className="font-medium mb-2">Key Accomplishments:</h4>
              <ul className="space-y-2">
                {project.accomplishments.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-brand-purple mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs py-1 px-3 bg-secondary rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    ),
    certifications: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass-panel p-6 rounded-lg"
          >
            <div className="flex items-start">
              <div className="bg-brand-purple/10 p-2 rounded-full mr-4 flex-shrink-0">
                <Award className="h-5 w-5 text-brand-purple" />
              </div>
              <div>
                <h3 className="font-semibold">{cert.name}</h3>
                <div className="text-sm text-muted-foreground mb-2">
                  {cert.issuer} • {cert.date}
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {cert.skills.split(", ").map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2 py-1 bg-secondary inline-block rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                {cert.credential && (
                  <div className="text-xs text-muted-foreground">
                    Credential ID: {cert.credential}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    ),
  };

  return (
    <Layout>
      <section className="pt-32 pb-16 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-brand-purple/10 text-brand-purple mb-4 backdrop-blur-sm border border-brand-purple/20">
              Resume
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              <AnimatedText text="Professional Experience" once />
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground">
                I'm an NLP researcher and full-stack developer with a background
                in web engineering, artificial intelligence, and machine
                learning. My focus is on building intelligent, data-driven
                systems that bridge research and practical application to solve
                real-world challenges.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center mb-12"
          >
            <PrintableResume />
          </motion.div>

          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-4">
              {[
                {
                  id: "skills",
                  icon: <Code className="h-5 w-5" />,
                  label: "Skills",
                },
                {
                  id: "education",
                  icon: <GraduationCap className="h-5 w-5" />,
                  label: "Education",
                },
                {
                  id: "experience",
                  icon: <Briefcase className="h-5 w-5" />,
                  label: "Experience",
                },
                {
                  id: "projects",
                  icon: <LaptopMinimal className="h-5 w-5" />,
                  label: "Projects",
                },
                {
                  id: "certifications",
                  icon: <Award className="h-5 w-5" />,
                  label: "Certifications",
                },
              ].map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors backdrop-blur-sm border ${
                    activeTab === tab.id
                      ? "bg-brand-purple text-white border-brand-purple/50"
                      : "bg-secondary/20 text-muted-foreground hover:bg-secondary/40 border-white/10"
                  }`}
                >
                  {tab.icon}
                  <span className="ml-2">{tab.label}</span>
                </motion.button>
              ))}
            </div>
          </div>

          <div className="min-h-[400px]">
            {tabContent[activeTab as keyof typeof tabContent]}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resume;
