import React from "react";

export const data: InfoConfig = {
  name: "Nithin Kamal",
  title: "Machine Learning Engineer, Software Engineer, Full Stack Developer",
  linkedin: "https://www.linkedin.com/in/nithin-kamal-dev777/",
  github: "https://github.com/nithin-kamal",
  mail: "mailto:nithin.kamal.dev@outlook.com",
  sections: ["about", "skills", "timeline", "projects"],
  sectionTitles: ["ABOUT", "SKILLS", "EXPERIENCE", "PROJECTS"],
  about: {
    title:
      "AI/ML Engineer | Full Stack Developer, RWTH Aachen University '23, MSc in Robotics ",
    description: `With over 5 years of industry experience, I possess a proven track record as a full-stack developer, software engineer, and machine learning engineer. My interests encompass Generative AI, computer vision, and web development. I am passionate about computer science, diligently keeping abreast of the latest research and popular frameworks in the tech industry.
     `,
  },
  education: [
    "RWTH Aachen University, MSc in Robotics, 2023",
    "University of Kerala, B.Tech in Electronics & Communication, 2017",
    "TensorFlow Professional Developer Certificate, 2023",
  ],
  banner: ["RWTH.png", "BMW.png", "Fraunhofer-IKS.png"],
  skills: [
    {
      title: "Languages",
      logo: "/code.png",
      items: ["Python", "TypeScript", "JavaScript", "C++", "Bash", "SQL"],
      boldIdx: 2,
      description: (
        <React.Fragment>
          {`In the past `}
          <b>7 years</b>
          {` I've accumulated extensive experience with Python and JavaScript through personal projects, professional work, research, and classwork. I've successfully leveraged my expertise in Python, TypeScript, C++, Bash, and SQL to develop and deploy applications across diverse industries.`}
        </React.Fragment>
      ),
    },
    {
      title: "Artificial Intelligence & Machine Learning",
      logo: "/ai.png",
      smallTitle: "AI & ML",
      items: [
        "Computer Vision",
        "Deep Learning",
        "Generative AI",
        "PyTorch",
        "Tensorflow",
        "Large Language Models (LLM)",
        "Natural Language Processing",
        "OpenCV",
        "Pandas",
        "Numpy",
        "Keras",
        "SciKit-Learn",
        "Jupyter",
        "Data Analysis",
        "Numerical Optimization",
        "3D Images",
        "LangChain",
        "JAX",
      ],
      boldIdx: 5,
      description: (
        <>
          {
            "I possess significant research experience in Computer Vision and machine learning, gained through coursework and roles at "
          }
          <b>BMW Group</b>
          {" and "}
          <b>Fraunhofer IKS</b>
          {". In the last "}
          <b> 3 years</b>
          {
            ", I have undertaken numerous personal projects in Generative AI, Computer Vision, and natural language processing, providing me with a rich experience in popular ML frameworks and the latest algorithms."
          }
        </>
      ),
    },
    {
      title: "Web Development",
      logo: "/web.jpg",
      items: [
        "React",
        "Next.js",
        "Node.js",
        "Tailwind CSS",
        "Data Visualization",
        "REST API",
        "GraphQL",
        "Express.js",
        "HTML",
        "CSS",
        "Flask",
        "ES6",
        "Server Side Rendering",
      ],
      boldIdx: 5,
      description: (
        <>
          {"With nearly "}
          <b>5 years</b>
          {
            " of industry experience as a full-stack developer, I have successfully developed and shipped over 12 products. My proficiency extends to modern web development tools and frameworks, and I boast a proven track record of consistently delivering exceptional work."
          }
        </>
      ),
    },
    {
      title: "DevOps & Cloud",
      logo: "/cloud.jpg",
      items: [
        "Git",
        "Docker",
        "AWS",
        "CI/CD",
        "Windows",
        "Linux",
        "Microsoft Azure",
        "MQTT",
        "GitLab",
        "Vercel",
        "Jenkins",
      ],
      boldIdx: 3,
      description:
        "I possess significant experience in the end-to-end development and deployment of web applications and AI/ML models, spanning both professional work and personal projects, including the creation of my own portfolio website. This involves expertise in CI/CD, containerization, and cloud deployment. Additionally, I have professional experience in utilizing AWS services such as S3, EC2, Lambda, and Microsoft Azure.",
    },
    {
      title: "Databases",
      logo: "/db.jpg",
      items: [
        "PostGreSQL",
        "MongoDB",
        "MySQL",
        "InfluxDB",
        "QuasarDB",
        "SQLite",
      ],
      boldIdx: 2,
      description:
        "I am well-versed in SQL and NoSQL databases, utilising PostgreSQL, MySQL, SQLite, and MongoDB in personal and professional projects over the last 7 years. Furthermore, I have hands-on experience with time series databases, handling massive amounts of data during my tenure at Kimball Electronics and Indurad GmbH.",
    },
    {
      title: "Methodology",
      logo: "/agile.jpg",
      items: [
        "Agile",
        "Test Driven Development",
        "Scrum",
        "Kanban",
        "Pair Programming",
        "Code Review",
      ],
      boldIdx: 2,
      description:
        "I possess substantial experience in agile methodologies, including Scrum and Kanban, focusing on test-driven development (TDD). Additionally, I am well-versed in Pair programming and actively engage in code reviews to ensure high-quality development practices.",
    },
    {
      title: "Others",
      logo: "/others.jpg",
      items: [
        "ROS (Robot Operating System)",
        "Data Structures and Algorithms",
        "Design Patterns",
        "JIRA",
        "Shell Script",
        "Gazebo",
        "LateX",
        "Microsoft Office",
        "Object Oriented Programming",
        "Functional Programming",
        "PyQt",
      ],
      boldIdx: 3,
      description:
        "As part of my coursework and my role at BMW, I have actively contributed to projects involving automation and robotic operating systems. Additionally, I have solid foundations in programming, encompassing data structures, algorithms, and design patterns.",
    },
  ],
  timeline: [
    {
      title: "Software Engineer (Student) - Self Adaptive Systems",
      logo: "/fraunhoferLogo.png",
      company: "Fraunhofer IKS",
      location: "Munich, Germany",
      date: "July, 2023 - Jan, 2024",
      description:
        "I contributed to a project focused on developing automated trains, where my responsibilities included crafting collaborative user interfaces for system design and definition. I conducted research to define the components within autonomous systems and their dynamic environments.",
    },
    {
      title: "Master's Thesis - Machine Learning Engineer",
      logo: "/BMW.png",
      company: "BMW Group",
      location: "Munich, Germany",
      date: "Oct, 2022 - July, 2023",
      description:
        " In my master's thesis research, I conducted extensive investigations into state-of-the-art vision-based anomaly detection algorithms. Following this, I developed and implemented a machine-learning pipeline for the vision module of an automated quality assurance robot. The employed approach was novel, leading to a noteworthy 30% improvement in robustness for industrial anomaly detection.",
    },
    {
      title: "Intern - Robotic Software Engineer",
      logo: "/BMW.png",
      company: "BMW Group",
      location: "Munich, Germany",
      date: "April, 2022 - Oct, 2022",
      description:
        "During my internship at BMW Group's Digitization and Proof of Concepts department, I handled various responsibilities, including developing graphical user interfaces, integrating new sensors, and enforcing safety limits to control and monitor an automated quality assurance robot. Additionally, I completed the end-to-end development of a scalable web app designed for remote monitoring and configuration of the robot.",
    },
    {
      title: "Software Developer (Student) - Full Stack Developer",
      logo: "/indurad_logo.png",
      company: "Indurad GmbH",
      location: "Aachen, Germany",
      date: "April, 2021 - May, 2022",
      description:
        "In this role, I developed interactive and scalable web applications and visualisations across multiple products. Additionally, I actively contributed to optimising the performance and enhancing the user experience of these products.",
    },
    {
      title: "Software Engineer - Full Stack Developer",
      logo: "/kimball.png",
      company: "Kimball Electronics",
      location: "Trivandrum, India",
      date: "Nov, 2019 - May, 2020",
      description:
        "My responsibilities included full-stack development and shipping of a scalable web application. Additionally, I researched and developed scripts to automate aspects of the production pipeline and performed server configurations.",
    },
    {
      title: "Consultant - Full Stack Developer",
      logo: "/shunyeka.png",
      company: "Shunyeka Systems Pvt Ltd.",
      location: "Bangalore, India",
      date: "Aug, 2019 - Oct, 2019",
      description:
        "I held primary responsibility for UI migration and the seamless integration of AWS services and Stripe payments.",
    },
    {
      title: "Software Engineer - Full Stack Developer",
      logo: "/vectorflow_logo.jpg",
      company: "VectorFlow Labs Pvt Ltd.",
      location: "Bangalore, India",
      date: "Oct, 2018 - Oct, 2019",
      description:
        "I actively contributed to product planning and design, playing a pivotal role as a full-stack developer. I was instrumental in developing a responsive web application featuring interactive visualisations, a chatbot, and real-time social platform notifications.",
    },
  ],
};

export type SkillType = {
  title: string;
  logo: string;
  items: string[];
  boldIdx: number;
  description: React.ReactNode | string;
  smallTitle?: string;
};

export type TimelineType = {
  title: string;
  logo: string;
  company: string;
  location: string;
  date: string;
  description: string;
};

export interface InfoConfig {
  name: string;
  title: string;
  linkedin: string;
  github: string;
  mail: string;
  sections: string[];
  sectionTitles: string[];
  about: {
    title: string;
    description: string;
  };
  education: string[];
  banner: string[];
  skills: SkillType[];
  timeline: TimelineType[];
}
