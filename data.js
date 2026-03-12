/**
 * ============================================================
 *  PORTFOLIO DATA — Edit this file to update your portfolio!
 * ============================================================
 */

const portfolioData = {

    /* ── Personal Info ─────────────────────────────────────── */
    name: "Mahir Tajwar Rahman",
    taglines: [
        "CSE Student @ BRAC University",
        "NLP, Computer Vision & LLM Researcher",
        "Student Tutor @ BRAC University",
        "MERN Stack Developer",
        "ML Enthusiast",
    ],
    bio: `I'm a Computer Science & Engineering student at BRAC University with a
passion for Natural Language Processing, Computer Vision and Large Language Models. Alongside
my studies, I work as a Student Tutor at BRAC University, helping peers navigate complex CS concepts.
I love building things — from full-stack web apps using the MERN stack to
machine learning pipelines that push the boundaries of what language models
can do.`,
    email: "tajwarrahmanmahir@gmail.com",
    location: "Dhaka, Bangladesh",
    resumeLink: "cv.pdf",                         // ← link to your resume PDF

    /* ── Social Links ──────────────────────────────────────── */
    social: {
        github: "https://github.com/mahirTaj",
        linkedin: "https://www.linkedin.com/in/mahir-tajwar-rahman-5396b31a7/",
        email: "mailto:tajwarrahmanmahir@gmail.com",
        twitter: "",
        scholar: "",
    },

    /* ── Skills ─────────────────────────────────────────────── */
    skills: [
        {
            category: "AI & Research",
            items: ["NLP", "LLMs", "Transformers", "BanglaBERT", "ViT", "Computer Vision", "PyTorch", "Hugging Face", "Machine Learning"],
        },
        {
            category: "Web Development",
            items: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs", "TypeScript", "HTML/CSS", "JavaScript", "PHP"],
        },
        {
            category: "Languages & Tools",
            items: ["Python", "Java", "C", "Assembly (8086)", "Git", "Linux", "Jupyter Notebook", "OpenGL"],
        },
    ],

    /* ── Research ───────────────────────────────────────────── */
    research: [
        {
            title: "Multimodal Hate Speech Detection from Bangla Social Media Posts",
            description:
                "Ongoing undergraduate thesis focusing on detecting hate speech in Bangla content by leveraging both text and visual modalities. Exploring deep learning architectures to capture nuanced hate speech effectively.",
            tags: ["NLP", "Computer Vision", "Multimodal Learning", "Bangla Language", "PyTorch"],
            link: "#", // Placeholder for publication or report
            featured: true,
        },
    ],

    /* ── Projects ───────────────────────────────────────────── */
    projects: [
        {
            title: "BashaLagbe — Flat & Room Rental Marketplace",
            description:
                "A full-stack real estate marketplace for Bangladesh, connecting landlords and tenants directly while eliminating intermediaries. Features advanced search, interactive maps, trend analytics, and an admin dashboard.",
            tags: ["React.js", "Node.js", "Express", "MongoDB", "Figma"],
            github: "https://github.com/mahirTaj/BashaLagbe---Flat-Room-Rental-Marketplace",
            demo: "",
            featured: true,
        },
        {
            title: "NeuraRig — AI-Powered PC E-Commerce",
            description:
                "An AI-powered e-commerce platform for computers and accessories, featuring a smart PC Builder tool, chatbot assistant, secure checkout, and a full admin dashboard.",
            tags: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "AI Chatbot"],
            github: "https://github.com/mahirTaj/NeuraRig",
            demo: "",
            featured: true,
        },
        {
            title: "Token-Level NER with RNN/LSTM/BiLSTM",
            description:
                "Implementation and evaluation of RNN, LSTM, GRU, and BiLSTM models for Named Entity Recognition on news data. Explores deep learning architectures for sequence labeling tasks.",
            tags: ["Python", "TensorFlow", "LSTM", "BiLSTM", "NLP", "NER"],
            github: "https://github.com/mahirTaj/Token-Level-Multi-Class-Classification-for-NER",
            demo: "",
            featured: true,
        },
        {
            title: "Life Expectancy Prediction",
            description:
                "Machine learning project predicting life expectancy using the WHO dataset. Compares Linear Regression, Decision Trees, Naive Bayes, and Neural Networks with full EDA.",
            tags: ["Python", "Scikit-learn", "Neural Networks", "Machine Learning", "Jupyter"],
            github: "https://github.com/mahirTaj/Life-Expectancy-Prediction",
            demo: "",
            featured: false,
        },
        {
            title: "Liver Cirrhosis Status Prediction",
            description:
                "Predictive modeling project for liver cirrhosis status classification using machine learning, with extensive data preprocessing and feature engineering on clinical datasets.",
            tags: ["Python", "Jupyter Notebook", "Machine Learning", "Healthcare AI"],
            github: "https://github.com/mahirTaj/Liver-Cirrhosis-Status-Prediction",
            demo: "",
            featured: false,
        },
        {
            title: "VSFS Metadata Journaling",
            description:
                "Crash-consistent metadata journaling implementation for the Very Simple File System (VSFS) with write-ahead logging and atomic transaction support for data integrity.",
            tags: ["C", "Operating Systems", "File Systems", "Write-Ahead Log"],
            github: "https://github.com/mahirTaj/VSFS-Metadata-Journaling",
            demo: "",
            featured: false,
        },
        {
            title: "Virtual Tennis Game — OpenGL",
            description:
                "A 3D virtual tennis game built with OpenGL and Python, featuring real-time rendering, collision physics, and interactive gameplay mechanics.",
            tags: ["Python", "OpenGL", "3D Graphics", "Game Development"],
            github: "https://github.com/mahirTaj/Virtual-Tennis-Game-OpenGL",
            demo: "",
            featured: false,
        },
        {
            title: "8086 Assembly Inventory & Sales System",
            description:
                "A lightweight 8086 assembly system for managing inventory, tracking sales logs, issuing stock alerts, handling restocking, and supporting transaction undo operations.",
            tags: ["Assembly (8086)", "Low-Level Programming", "Systems"],
            github: "https://github.com/mahirTaj/8086-Assembly-Inventory-Sales-Management-System",
            demo: "",
            featured: false,
        },
        {
            title: "BetterReads — Book Review Social Platform",
            description:
                "A social media platform for book enthusiasts to review, rate, and discuss books. Built with PHP and features user profiles, friend activity, and book cataloguing.",
            tags: ["PHP", "MySQL", "Web Development", "Social Platform"],
            github: "https://github.com/mahirTaj/BetterReads-Book-Review-Social-Media-Platform",
            demo: "",
            featured: false,
        },
    ],

    /* ── Experience ─────────────────────────────────────────── */
    experience: [
        {
            role: "Student Tutor",
            org: "BRAC University",
            orgLink: "https://www.bracu.ac.bd/",
            period: "2024 – Present",
            type: "Part-time",
            description:
                "Assist undergraduate students in understanding core Computer Science concepts across courses such as Data Structures, Algorithms, and Programming fundamentals. Conduct tutoring sessions and provide academic support.",
            highlights: ["Mentoring", "Academic Support", "Computer Science"],
        },
        {
            role: "BSc in Computer Science & Engineering",
            org: "BRAC University",
            orgLink: "https://www.bracu.ac.bd/",
            period: "2022 – Present",
            type: "Education",
            description:
                "Pursuing a BSc in Computer Science & Engineering at BRAC University, with a focus on Artificial Intelligence, Natural Language Processing, and Software Engineering. Active in research and academic tutoring.",
            highlights: ["CSE", "AI", "NLP", "Software Engineering"],
        },
        {
            role: "Higher Secondary Certificate (HSC)",
            org: "Adamjee Cantonment College",
            orgLink: "",
            period: "2019 – 2021",
            type: "Education",
            description:
                "Completed HSC in Science from Adamjee Cantonment College, one of the leading colleges in Bangladesh.",
            highlights: ["Science", "HSC"],
        },
        {
            role: "Secondary School Certificate (SSC)",
            org: "Adamjee Cantonment Public School",
            orgLink: "",
            period: "2016 – 2019",
            type: "Education",
            description:
                "Completed SSC in Science from Adamjee Cantonment Public School, one of the leading schools in Bangladesh.",
            highlights: ["Science", "SSC"],
        },
    ],
};
