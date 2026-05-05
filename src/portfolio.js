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
  subtitle: "Projets Data Engineering et Data Science",
  display: true,
  projects: [
    {
      projectName: "Pipeline ETL en Python",
      projectDesc:
        "Pipeline complet d'extraction, transformation et chargement de données avec une architecture modulaire.",
      descBullets: [
        "Extraction de données depuis fichiers CSV et Excel.",
        "Nettoyage : gestion des valeurs manquantes et suppression des doublons.",
        "Transformation avec Pandas : jointures, agrégations et calcul d’indicateurs.",
        "Structuration du code en modules (cleaning, processing, transformation).",
        "Export des données en Parquet pour optimisation des performances.",
        "Mise en place de logs pour le suivi des traitements."
      ],
      footerLink: [
        { name: "Python" },
        { name: "Pandas" },
        { name: "ETL" },
        { name: "Parquet" }
      ]
    },
    {
      projectName: "Data Pipeline avec dbt et Snowflake",
      projectDesc:
        "Pipeline ELT pour transformer des données brutes en données analytiques dans Snowflake.",
      descBullets: [
        "Structuration en couches : staging, intermediate, marts.",
        "Transformation des données avec dbt (modèles SQL, macros).",
        "Implémentation de calculs métiers (chiffre d’affaires, performance produits).",
        "Organisation d’un workflow data versionné et reproductible."
      ],
      footerLink: [
        { name: "dbt" },
        { name: "Snowflake" },
        { name: "SQL" },
        { name: "ELT" }
      ]
    },
    {
      projectName: "Traitement de données avec PySpark",
      projectDesc:
        "Pipeline de traitement de données volumineuses en environnement distribué.",
      descBullets: [
        "Nettoyage et transformation de données avec PySpark.",
        "Jointures et agrégations distribuées.",
        "Manipulation de datasets volumineux (CSV, Parquet).",
        "Optimisation des performances via le calcul distribué."
      ],
      footerLink: [
        { name: "PySpark" },
        { name: "Big Data" },
        { name: "Parquet" }
      ]
    },
    {
      projectName: "Prévision de séries temporelles",
      projectDesc:
        "Modélisation de données temporelles pour analyser et prévoir des tendances.",
      descBullets: [
        "Analyse des tendances et saisonnalités.",
        "Préparation des données temporelles et feature engineering.",
        "Implémentation de modèles ARIMA et régression.",
        "Évaluation et comparaison des performances."
      ],
      footerLink: [
        { name: "Python" },
        { name: "Time Series" },
        { name: "ARIMA" }
      ]
    },
    {
      projectName: "Détection de fake news (NLP)",
      projectDesc:
        "Modèle de classification de textes pour détecter les informations trompeuses ou non fiables.",
      descBullets: [
        "Prétraitement des données textuelles (nettoyage, tokenisation).",
        "Vectorisation avec TF-IDF.",
        "Entraînement de modèles de classification.",
        "Évaluation des performances (précision, recall, F1-score)."
      ],
      footerLink: [
        { name: "Python" },
        { name: "NLP" },
        { name: "Machine Learning" }
      ]
    },
    {
      projectName: "Classification de messages spam",
      projectDesc:
        "Modèle de classification de SMS pour détecter les messages frauduleux et indésirables.",
      descBullets: [
        "Prétraitement des messages (nettoyage, tokenisation).",
        "Vectorisation avec TF-IDF.",
        "Entraînement de modèles de classification (Naive Bayes, Logistic Regression).",
        "Évaluation des performances et analyse des erreurs."
      ],
      footerLink: [
        { name: "Python" },
        { name: "NLP" },
        { name: "TF-IDF" }
      ]
    },
    {
      projectName: "Classification de texte avec BERT",
      projectDesc:
        "Projet NLP de classification de texte basé sur les Transformers.",
      descBullets: [
        "Prétraitement des données textuelles.",
        "Fine-tuning du modèle BERT.",
        "Comparaison avec RNN et LSTM.",
        "Évaluation et optimisation."
      ],
      footerLink: [
        { name: "NLP" },
        { name: "BERT" },
        { name: "Transformers" }
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