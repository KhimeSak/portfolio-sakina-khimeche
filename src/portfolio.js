import generaliLogo from "./assets/images/generali.png";
import sonatrachLogo from "./assets/images/sonatrach.png";
import rouenLogo from "./assets/images/rouen.png";


export const illustration = {
  animated: true
};

export const splashScreen = {
  enabled: false,
  duration: 1000
};

export const greeting = {
  username: "Sakina Khimeche",
  title: "Bonjour, je suis Sakina",
  subTitle:
    "Diplômée en Master Data, avec une expérience concrète en alternance chez Generali. Je combine Data Analyst, Data Engineer et Data Scientist pour exploiter, transformer et valoriser les données.",
  display: true
};

export const socialMediaLinks = {
  github: "https://github.com/KhimeSak",
  linkedin: "https://www.linkedin.com/in/khimesak/",
  gmail: "sakinakhimeche9@gmail.com",
  display: true
};

export const skillsSection = {
  title: "Compétences",
  subTitle:
    "Analyse, ingénierie et science des données réunies dans une approche complète.",
  skills: [
    " Analyse de données avec Python, SQL et Power BI",
    " Conception de pipelines ETL/ELT avec Airflow, Snowflake et Python",
    " Data Governance, Data Quality, RGPD, RBAC et Data Masking",
    " Machine Learning avec Scikit-learn et traitement de données volumineuses avec PySpark"
  ],
  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Snowflake",
      fontAwesomeClassname: "fas fa-snowflake"
    },
    {
      skillName: "Power BI",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "Airflow",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "PySpark",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Streamlit",
      fontAwesomeClassname: "fas fa-laptop-code"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    }
  ],
  display: true
};

export const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Data Analysis / BI",
      progressPercentage: "85%"
    },
    {
      Stack: "Data Engineering",
      progressPercentage: "78%"
    },
    {
      Stack: "Data Quality / Governance",
      progressPercentage: "82%"
    },
    {
      Stack: "Data Science / Machine Learning",
      progressPercentage: "70%"
    }
  ],
  display: true
};

export const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Master Data / Intelligence Artificielle",
      subHeader: "Formation spécialisée en Data Science, Data Engineering et IA",
      duration: "2023 – 2025",
      desc:
        "Formation orientée exploitation des données, machine learning, data engineering, visualisation et gestion de projets data.",
      descBullets: [
        "Python, SQL, Machine Learning, Deep Learning",
        "Data Engineering, pipelines, bases de données",
        "Business Intelligence et visualisation de données"
      ]
    }
  ]
};

export const workExperiences = {
  display: true,
  experience: [
    {
      role: "Data Engineer / Data Quality / Data Governance",
      company: "Generali France",
      companylogo: generaliLogo,
      date: "2024 – 2025",
      desc:
        "Participation à des projets Data autour de la qualité des données, de la gouvernance, du Data Masking, de Snowflake et de la valorisation métier.",
      descBullets: [
        "Data Quality : définition de règles de complétude, cohérence et unicité sur les données métier.",
        "Développement de contrôles automatisés avec Python, Pandas, SQL, Snowflake et PostgreSQL.",
        "Création de dashboards Power BI pour suivre les KPI de qualité, les doublons et les anomalies.",
        "Data Masking Snowflake : tags, politiques de masquage dynamique, RBAC et conformité RGPD.",
        "Pipelines ELT avec Airflow pour ingestion et transformation de données issues de Zeenea.",
        "Développement d’applications Streamlit pour le suivi du Data Masking et la géolocalisation de médecins.",
        "Expérimentation LLM pour aider à la classification des données sensibles."
      ]
    },
    {
      role: "Data Engineer / Analyst",
      company: "UFR Sciences et Techniques — Rouen",
      companylogo: rouenLogo,
      date: "2022",
      desc:
        "Développement d'une application complète de gestion de données avec architecture moderne et optimisation de base de données.",
      descBullets: [
        "Développement d'une application de gestion de données (Java MVC / DAO).",
        "Modélisation PostgreSQL et structuration des données.",
        "Mise en place de flux ETL Talend pour transformation et nettoyage des données.",
        "Automatisation des contrôles et génération d'alertes métiers."
      ]
    },
    {
      role: "Data Scientist",
      company: "SONATRACH",
      companylogo: sonatrachLogo,
      date: "2020",
      desc:
        "Développement de solutions analytiques pour optimiser les processus industriels et détecter les anomalies en données temps réel.",
      descBullets: [
        "Analyse et préparation de données industrielles (nettoyage, feature engineering).",
        "Développement de modèles de Machine Learning pour détection d'anomalies.",
        "Évaluation des performances (ROC, précision, recall) et restitution aux équipes métier."
      ]
    }
  ]
};

export const openSource = {
  showGithubProfile: false,
  display: false
};

export const bigProjects = {
  title: "Projets & Réalisations",
  subtitle: "Mes principaux projets professionnels et académiques en Data",
  display: true,
  projects: [
    {
      projectName: "Data Masking — Generali France",
      projectDesc:
        "Solution complète de protection des données sensibles en environnement Snowflake, avec application Streamlit et logique de gouvernance RGPD.",
      descBullets: [
        "Ingestion de métadonnées Zeenea avec Airflow.",
        "Classification des données sensibles via Data Catalog.",
        "Utilisation des tags Snowflake et des politiques de masquage dynamique.",
        "Gestion des accès avec RBAC.",
        "Développement d’une application Streamlit pour sélectionner, valider et suivre les colonnes sensibles.",
        "Expérimentation LLM pour détecter les données sensibles."
      ],
      footerLink: [
        { name: "Python" },
        { name: "Snowflake" },
        { name: "Airflow" },
        { name: "Streamlit" },
        { name: "RGPD" }
      ]
    },
    {
      projectName: "Data Quality — Generali France",
      projectDesc:
        "Mise en place d’une démarche complète de Data Quality avec contrôles automatisés et dashboards de suivi.",
      descBullets: [
        "Formalisation des règles de complétude, cohérence et unicité.",
        "Contrôles automatisés avec Python, Pandas et SQL.",
        "Détection des doublons et incohérences sur données SIRET.",
        "Dashboards Power BI pour le suivi des KPI qualité.",
        "Analyse d’anomalies sur données volumineuses avec PySpark."
      ],
      footerLink: [
        { name: "Python" },
        { name: "Pandas" },
        { name: "SQL" },
        { name: "Power BI" },
        { name: "PySpark" }
      ]
    },
    {
      projectName: "Zeenea vers Snowflake — Pipeline Data",
      projectDesc:
        "Pipeline ELT permettant d’exploiter les métadonnées du Data Catalog Zeenea dans Snowflake.",
      descBullets: [
        "Extraction de fichiers JSON / VARIANT.",
        "Transformation des données avec Python et Snowpark.",
        "Chargement dans Snowflake.",
        "Contrôles de cohérence et traçabilité."
      ],
      footerLink: [
        { name: "Airflow" },
        { name: "Snowflake" },
        { name: "Snowpark" },
        { name: "Python" }
      ]
    },
    {
      projectName: "Géolocalisation Médecins — Generali",
      projectDesc:
        "Application Streamlit de géolocalisation et visualisation cartographique des médecins.",
      descBullets: [
        "Chargement et nettoyage de données médecins.",
        "Géocodage des adresses.",
        "Visualisation cartographique avec carte interactive.",
        "Respect des contraintes RGPD."
      ],
      footerLink: [
        { name: "Python" },
        { name: "Streamlit" },
        { name: "Plotly" },
        { name: "RGPD" }
      ]
    },
    {
      projectName: "Matrice Compétences — Académie Generali",
      projectDesc:
        "Matrice de suivi des compétences pour optimiser les parcours de formation internes.",
      descBullets: [
        "Mapping profils collaborateurs / besoins en formation.",
        "Structuration des données pour analyser les écarts de compétences.",
        "Aide au pilotage RH et formation."
      ],
      footerLink: [
        { name: "Data Analysis" },
        { name: "Formation" },
        { name: "RH" }
      ]
    },
    {
      projectName: "Détection d’Anomalies — Sonatrach",
      projectDesc:
        "Projet Machine Learning sur données industrielles pour détecter des comportements anormaux.",
      descBullets: [
        "Nettoyage et préparation de données industrielles.",
        "Feature engineering.",
        "Modélisation avec Scikit-learn.",
        "Évaluation avec précision, recall et ROC."
      ],
      footerLink: [
        { name: "Python" },
        { name: "Machine Learning" },
        { name: "Scikit-learn" }
      ]
    }
  ]
};

export const achievementSection = {
  title: "Certifications & Réalisations",
  subtitle: "Formations, certifications et réalisations professionnelles",
  achievementsCards: [],
  display: false
};

export const blogSection = {
  title: "Blogs",
  subtitle: "Articles et publications",
  displayMediumBlogs: false,
  blogs: [],
  display: false
};

export const talkSection = {
  title: "Talks",
  subtitle: "Interventions et présentations",
  talks: [],
  display: false
};

export const podcastSection = {
  title: "Podcast",
  subtitle: "Podcasts et interventions audio",
  podcast: [],
  display: false
};

export const resumeSection = {
  title: "CV",
  subtitle: "Téléchargez mon CV",
  display: false
};

export const contactInfo = {
  title: "Contact 📞",
  subtitle: "Disponible pour opportunités Data Analyst, Data Engineer ou Data Governance",
  number: "+33 6 35 22 03 81",
  email_address: "sakinakhimeche9@gmail.com",
  display: true
};

export const twitterDetails = {
  userName: "",
  display: false
};

export const isHireable = true;

export default {
  illustration,
  splashScreen,
  greeting,
  socialMediaLinks,
  skillsSection,
  techStack,
  educationInfo,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  resumeSection,
  contactInfo,
  twitterDetails,
  isHireable
};