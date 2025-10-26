import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";
import ProjectCard from "@/components/ProjectCard";
import {
  Bot,
  MonitorSmartphone,
  Database,
  Cpu,
  Filter,
  Search,
  Code,
  Brain,
  BarChart,
  BookOpen,
} from "lucide-react";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const projects = [
    {
      id: 1,
      title: "Image Search Engine",
      description:
        "Angular web app integrating the Pixabay API for instant, paginated image results. Built with reusable components, RxJS patterns, unit test scaffolding, and CI-friendly configs.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzbByMID5ehNFABdpqUTb69RxNkAc4ME7t8A&s",
      tags: ["Angular", "TypeScript", "SCSS", "REST"],
      code: "https://github.com/Mattzoki/Image-Search-Engine",
      category: "web",
    },
    {
      id: 2,
      title: "Generalisation (NER Thesis Project)",
      description:
        "Investigates the generalisation ability of NER models across domains and augmentation strategies. Includes BERT-based fine-tuning, evaluation on OntoNotes and custom challenge sets, and adversarial augmentation analysis.",
      image:
        "https://media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fs42256-023-00729-y/MediaObjects/42256_2023_729_Fig4_HTML.png",
      tags: ["Python", "BERT", "NLP", "Machine Learning"],
      code: "https://github.com/Mattzoki/Generalisation",
      category: "ai",
    },
    {
      id: 3,
      title: "Named Entity Recognition",
      description:
        "Evaluated ML models on CoNLL2003, optimizing features and vector representations to improve F1-macro performance in NER.",
      image:
        "https://www.shaip.com/wp-content/uploads/2022/02/Blog_Named-Entity-Recognition-%E2%80%93-The-Concept-Types-Applications.jpg",
      tags: ["Python", "NLP", "Machine Learning"],
      code: "https://github.com/Mattzoki/Named-Entity-Recognition",
      category: "ai",
    },
    {
      id: 4,
      title: "Emotion Detection System",
      description:
        "Detects emotions in conversational text using WASSA and tweet datasets, addressing class imbalance and inter-annotator agreement challenges.",
      image:
        "https://cdn-images-1.medium.com/v2/resize:fit:2600/1*kNmSTa-xG_Ed_xmHPWAzeQ.png",
      tags: ["Python", "NLP", "Machine Learning"],
      code: "https://github.com/Mattzoki/Emotion-Detection-System",
      category: "ai",
    },
    {
      id: 5,
      title: "Semantic Role Labelling",
      description:
        "Implements token-level NER pipeline over CoNLL-style data using classical and neural baselines. Includes preprocessing, feature extraction, sequence modeling, and span-level evaluation with ablation and error analysis notebooks.",
      image:
        "https://blog.biostrand.ai/hubfs/From%20words%20to%20meaning%20%20Exploring%20semantic%20analysis%20in%20NLP%20copy.jpg",
      tags: ["Python", "NLP", "Jupyter"],
      code: "https://github.com/Mattzoki/Semantic-Role-Labelling",
      category: "ai",
    },
    {
      id: 6,
      title: "Negation Scope Detection",
      description:
        "Implements negation scope detection using traditional ML and transformer models (BERT/NegBERT). Includes feature engineering, parsing with spaCy, fine-tuning, and error analysis with evaluation metrics.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCi3AizlOZ1U2ckcT4EShHgdyEesj-KRUnow&s",
      tags: ["Python", "NLP", "BERT", "Machine Learning"],
      code: "https://github.com/Mattzoki/Negation-Scope-Detection",
      category: "ai",
    },
    {
      id: 7,
      title: "Machine Translation (en↔hi)",
      description:
        "Experiments with machine translation using a Llama-3 baseline and reproducible evaluation via SacreBLEU on WMT datasets. Includes data preparation, scoring scripts, and error analysis notebooks.",
      image: "https://editor.analyticsvidhya.com/uploads/99303MT.jpg",
      tags: ["Python", "Machine Learning", "NLP", "Translation"],
      code: "https://github.com/Mattzoki/Machine-Translation",
      category: "ai",
    },
    {
      id: 8,
      title: "BMG Financial Platform",
      description:
        "Angular-based SPA for managing payments and financial transactions for BMG artists and composers. Includes reusable components, backend collaboration, mentorship of junior developers, and deployment using Docker and Tomcat.",
      image:
        "https://cdn.prod.website-files.com/5ede8b305ed324245dbaf418/628fabb2d2c105e7e01db8c1_Artwork%20-%20Platform.png",
      tags: ["Angular", "JavaScript", "HTML", "CSS", "Docker"],
      code: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIRgi48i1_5tTj0s8LY17pMqYAucDAhgWsYg&s",
      category: "web",
    },
    {
      id: 9,
      title: "Landscape Mapping Software",
      description:
        "High-performance ReactJS and OpenLayers web applications optimized for responsiveness, cross-browser compatibility, low latency, and heavy data handling. Focused on reusable components and code optimization.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaVOelaTiq5QTduNwo77HfSTQVM4_uVHqlaA&s",
      tags: ["React", "OpenLayers", "JavaScript", "Web Development"],
      code: "https://order.siterecon.ai/",
      category: "web",
    },
    {
      id: 10,
      title: "Navigation System for the Blind",
      description:
        "Arduino-based system using ultrasonic sensors to detect distances and relay information through synthesized voice output in Python. Achieved up to 15 m obstacle detection with 95% accuracy.",
      image: "https://nure.ua/wp-content/uploads/Benchmarking/2.gif",
      tags: ["Arduino", "Python", "IoT"],
      code: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIRgi48i1_5tTj0s8LY17pMqYAucDAhgWsYg&s",
      category: "iot",
    },
    {
      id: 11,
      title: "ETL Pipeline Automation",
      description:
        "C# query automating an ETL process in SSMS, consolidating and formatting outputs, sending daily emails, reducing manual effort by 1.5 hours per week, and mitigating human error.",
      image:
        "https://assets.qlik.com/image/upload/f_auto/q_auto/v1702369725/qlik/glossary/etl/seo-hero-etl-pipeline_ag7zd4.jpg",
      tags: ["C#", "SQL", "ETL", "Automation"],
      code: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIRgi48i1_5tTj0s8LY17pMqYAucDAhgWsYg&s",
      category: "data",
    },
  ];

  const getIcon = (category: string) => {
    switch (category) {
      case "ai":
        return Bot; // AI & ML
      case "web":
        return MonitorSmartphone; // Web Development
      case "nlp":
        return BookOpen; // Natural Language Processing
      case "iot":
        return Cpu; // IoT & Embedded Systems
      case "data":
        return BarChart; // Data & ETL
      default:
        return Code; // All Projects / fallback
    }
  };

  const filteredProjects = projects.filter((project) => {
    const matchesFilter = filter === "all" || project.category === filter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesFilter && matchesSearch;
  });

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "ai", name: "AI & ML" },
    { id: "iot", name: "IoT & Embedded Systems" },
    { id: "data", name: "Data & ETL" },
  ];

  return (
    <Layout>
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-brand-purple/10 text-brand-purple mb-4">
              Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <AnimatedText text="My Projects" once />
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground">
                Explore a collection of my recent work across various
                technologies and domains.
              </p>
            </div>
          </motion.div>

          {/* Filter and Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{
              boxShadow: "0 10px 25px -5px rgba(155, 135, 245, 0.1)",
            }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between glass-panel p-6 rounded-lg">
              {/* Category Filter */}
              <div className="flex items-center">
                <Filter className="mr-2 h-5 w-5 text-muted-foreground" />
                <span className="mr-4 text-sm font-medium">Filter:</span>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <motion.button
                      key={category.id}
                      onClick={() => setFilter(category.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
                        filter === category.id
                          ? "bg-brand-purple text-white"
                          : "bg-secondary hover:bg-secondary/80 text-muted-foreground"
                      }`}
                    >
                      {category.name}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Search */}
              <div className="relative w-full md:w-64">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="w-4 h-4 text-muted-foreground" />
                </div>
                <motion.input
                  type="text"
                  className="w-full py-2 pl-10 pr-4 bg-secondary rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  whileFocus={{
                    boxShadow: "0 0 0 3px rgba(155, 135, 245, 0.3)",
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                  code={project.code}
                  category={project.category}
                  icon={getIcon(project.category)}
                />
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-16 glass-panel rounded-lg"
              >
                <p className="text-xl text-muted-foreground">
                  No projects found matching your criteria.
                </p>
                <motion.button
                  onClick={() => {
                    setFilter("all");
                    setSearchTerm("");
                  }}
                  whileHover={{ scale: 1.05, backgroundColor: "#8B5CF6" }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 inline-flex items-center px-4 py-2 bg-brand-purple text-white rounded-lg text-sm font-medium hover:bg-opacity-90 transition-all"
                >
                  Clear Filters
                </motion.button>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
