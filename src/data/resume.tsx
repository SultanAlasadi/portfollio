import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "Sultan Alasadi",
  initials: "SA",
  url: "https://stm.com",
  location: "Turkey - Istanbul",
  locationLink: "https://www.google.com/maps/place/Istanbul",
  description:
    "Frontend Developer with a passion for creating seamless user experiences. I turn coffee into code and ideas into responsive web applications.",

  summary:
    "I'm Sultan, a dynamic Frontend Developer with a knack for crafting beautiful, functional websites. Armed with a degree in Computer Engineering and a toolkit filled with Next.js, React, and a suite of modern web technologies, I've been on a mission to elevate user experiences across the digital landscape. From my time at BluLogix where I wrangled APIs and built dynamic interfaces, to my role at VEGA SDS where I ensured pixel-perfect responsiveness across devices, I've honed my skills in turning complex problems into elegant solutions. When I'm not pushing pixels or debugging code, you can find me exploring the latest web technologies or collaborating on innovative projects. My goal? To create web experiences that not only meet user needs but exceed their expectations. Let's build something amazing together!",
  avatarUrl: "/me.png",
  skills: [
    "React.js",
    "Next.js",
    "JavaScript",
    "HTML",
    "CSS",
    "Bootstrap",
    "Tailwind CSS",
    "JavaScript",
    "Redux",
    "Redux-Toolkit",
    "React Router",
    "React-hook-Form",
    "Git",
    "GitHub",
    "Material UI",
    "REST API integration",
    "Axios",
    "Appwrite",
    "JIRA",
    "Figma",
    "Responsive Design",
    "Cross-browser Compatibility",
    "Web Performance Optimization",
    "Agile Methodology",
  ],
  softSkills: [
    "Problem-solving",
    "Critical Thinking",
    "Time Management",
    "Teamwork",
    "Communication",
    "Adaptability",
    "Creativity",
    "Fast Learner",
    "Self-Motivated",
    "Detail-Oriented",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "#", icon: NotebookIcon, label: "Blog" },
    { href: "#", icon: CodeIcon, label: "Projects" },
    { href: "#", icon: PencilLine, label: "Notes" },
  ],
  contact: {
    email: "sultanalasadi7@gmail.com",
    tel: "+905526047783",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/SultanAlasadi",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sultan-al-asadi-38367a221/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "#",
        icon: Icons.x,

        navbar: false,
      },
      whatsapp: {
        name: "WhatsApp",
        url: "https://wa.me/905526047783",
        icon: Icons.whatsapp,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "#",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "sultanalasadi7@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "BluLogix",
      href: "#",
      badges: [],
      location: "Istanbul, Turkey",
      title: "Front-end Developer",
      logoUrl: "/blulogix.png",
      start: "Jan 2024",
      end: "Jun 2024",
      description:
        "Developed dynamic web applications and interfaces using React. Handled API integration for seamless data flow. Used Git for code management and JIRA for task management and time tracking.",
    },
    {
      company: "VEGA SDS",
      href: "#",
      badges: [],
      location: "Istanbul, Turkey",
      title: "Front-end Developer",
      logoUrl: "/vegasds.png",
      start: "Jan 2023",
      end: "Jan 2024",
      description:
        "Created and maintained responsive, dynamic websites. Utilized HTML, CSS, Bootstrap, and JavaScript to design and develop user-friendly web interfaces. Managed code repositories using Git and ensured websites were fully responsive and optimized for various devices and browsers.",
    },
  ],
  education: [
    {
      school: "İstanbul Nisantasi University",
      href: "https://www.nisantasi.edu.tr/",
      degree: "Bachelor of Computer Science",
      logoUrl: "/nisantasi.jpeg",
      start: "2020",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "E-commerce-2024",
      href: "https://shopcoovibe.vercel.app/",
      dates: "2024",
      active: true,
      description:
        "A comprehensive e-commerce platform built with React.js, CSS Bootstrap, MUI, and various other libraries and tools. Implemented user authentication, routing, form management, API integration, and dynamic content.",
      technologies: [
        "React.js",
        "CSS Bootstrap",
        "MUI",
        "Auth Kit",
        "React Router",
        "React Hook Form",
        "Axios",
        "React Slick",
      ],
      links: [
        {
          type: "Website",
          href: "https://shopcoovibe.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/shop.png",
      video: "",
    },
    {
      title: "fecund",
      href: "https://fecund-jap.com/",
      dates: "2024",
      active: true,
      description:
        "An e-commerce platform for selling phone accessories, built with HTML, CSS, JavaScript, Bootstrap, Swiper.js, and more. Features include API integration, and dynamic content.",

      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Swiper.js"],
      links: [
        {
          type: "Website",
          href: "https://fecund-jap.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/fecund.png",
      video: "",
    },

    {
      title: "GPT-3 Landing Page",
      href: "https://gpt3-stm.netlify.app/",
      dates: " 2023",
      active: true,
      description:
        "Developed a landing page for an AI Customer Support Chatbot, utilizing the latest GPT models to automatically respond to customer support tickets. Built with React, Tailwind CSS, and JavaScript for a modern and responsive design.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      links: [
        {
          type: "Website",
          href: "https://gpt3-stm.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/chat.png",
      video: "",
    },
    {
      title: "Groco Store",
      href: "https://63c07647197af872b5d61273--charming-donut-3c499b.netlify.app/",
      dates: " 2023",
      active: true,
      description:
        "Developed a responsive e-commerce website for a grocery store, featuring product listings and a blog page. Built with HTML, CSS, Bootstrap, and Swiper.js to ensure a modern and user-friendly interface.",
      technologies: ["HTML", "CSS", "Bootstrap", "Swiper.js"],
      links: [
        {
          type: "Website",
          href: "https://63c07647197af872b5d61273--charming-donut-3c499b.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/store.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Game Development Camp",
      by: "BILIŞIM VADISI TEKNOPARK YÖNETICI A.Ş",
      credential: "33075465352099",
      dates: "September 30 /2022",
      location: "Istanbul, Turkey",
      description:
        "Joined a game development camp where we created a mobile app that uses augmented reality to deliver interactive bedtime stories.",

      image: "/bili.png",
      mlh: "",
      links: [],
    },
    {
      title: "Face Recognition",
      dates: "2022",
      location: "Istanbul, Turkey",
      description:
        "Developed a face recognition application that identifies faces from images using Python, OpenCV, TensorFlow, NumPy, and pandas for data analysis.",
      image: "/face.jpg",
      mlh: "",
      links: [],
    },
  ],
} as const;
