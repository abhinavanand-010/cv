import {
  BarepapersLogo,
  ConsultlyLogo,
  JarockiMeLogo,
  Minimal,
  MonitoLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Abhinav Anand",
  initials: "Abhinav",
  location: "Hubli, Karnataka, India",
  locationLink: "https://www.google.com/maps/place/Hubli",
  about:
    "Turning ideas into reality through code. Crafting clean, efficient, and user-friendly experiences.",
  summary:
    "A Computer Science student with expertise data structures and algorithms, and in full-stack development using React, Java, and Spring Boot. I have strong analytical skills and leadership experience in organizing coding events, and passionate about creating innovative tech solutions.",
  avatarUrl: "https://avatars.githubusercontent.com/u/140901572?v=4",
  personalWebsiteUrl: "",
  cvLink:"https://drive.google.com/your-cv-link",
  contact: {
    email: "abhinavavi0123@gmail.com",
    tel: "+916204891383",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/abhinavanand-010/",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/abhinav-anand-987450234/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "KLE Technological University",
      degree: "Bachelor's Degree in Computer Science and Engineering",
      start: "2021",
      end: "2025",
    },
    {
      school: "Delhi Public School Ranchi",
      degree: "Senior Secondary School",
      start: "2018",
      end: "2020",
    },
  ],
  
  skills: [
    "Algorithms",
    "Data Structures",
    "JavaScript",
    "React.js",
    "Node.js",
    "Linux",
    "Operating Systems",
    "Computer Networking",
    "Cloud Computing(Beginner)",
  ],
  projects: [
    {
      title: "Bone Fracture Detection",
      techStack: [
        "Python",
        "Machine Learning",
        "MobileNetV3",
        "ResNet50",
      ],
      description: "Detecting bone fractures from X-ray images using MobileNetV3 and comparative study ResNet50.",
      logo: ConsultlyLogo,
      link: {
        label: "github.com", 
        href: "https://github.com/abhinavanand-010/bone-fracture-detection-ML/",
      },
    },
    {
      title: "Block Vaccinator",
      techStack: ["React.js", "Javascript", "Tailwind CSS", "go-ethereum", "Solidity"],
      description:
        "A blockchain based project for immutable storage of vaccination data on distributed blocks.",
      logo: MonitoLogo,
      link: {
        label: "github.com",
        href: "https://github.com/abhinavanand-010/Vaccine-Blockchain/",
      },
    },
    {
      title: "Ecofinder",
      techStack: ["React.js", "Javascript", "Tailwind CSS", "Java", "Spring Boot"],
      description:
        "Locating facilities for e-waste, providing tracking through maps, and email service with java backend.",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://github.com/abhinavanand-010/e-waste-java-spring-final/",
      },
    },
    {
      title: "PuzzLabyrinth",
      techStack: ["Learning Project", "C++", "OOP"],
      description:
        "A fun project created for learning and applying all concepts of Object Oriented Programming.",
      logo: Minimal,
      link: {
        label: "github.com",
        href: "https://github.com/abhinavanand-010/PuzzLabyrinth/",
      },
    },
    {
      title: "BookIT",
      techStack: ["React.js", "Javascript", "Node.js", "Stripe", "Microsoft Azure"],
      description:
        "A simple book e-commerce with payment integration deployed on Microsoft Azure.",
      logo: BarepapersLogo,
      link: {
        label: "github.com",
        href: "https://github.com/abhinavanand-010/",
      },
    },
  ],
} as const;
