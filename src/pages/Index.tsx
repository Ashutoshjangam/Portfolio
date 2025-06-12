// Update this page (the content is just a fallback if you fail to update the page)

import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import TypeWriter from '@/components/TypeWriter';
import SocialIcons from '@/components/SocialIcons';
import SkillCard from '@/components/SkillCard';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  Code, Database, Terminal, Layers,
  PenTool, BookOpen, FileCode, Settings
} from 'lucide-react';
import Marquee from "react-fast-marquee";
import { title } from 'process';
import { Description } from '@radix-ui/react-toast';

const Index = () => {
  const skills = [
    "MERN Stack Development",
    "Frontend Development",
    "Backend Development",
    "AI & Data Science",
    "Web App Development",
    "Deep Learning",
    "Technical Writing"
  ];

  // Detailed skills with descriptions for the cards
  const skillDetails = [
    {
      title: "Frontend Development",
      description: "Building responsive and intuitive user interfaces with React, Next.js, and modern CSS frameworks.",
      icon: <PenTool size={24} />,
      delay: 100
    },
    {
      title: "Backend Development",
      description: "Creating robust server-side applications with Node.js, Express, and various databases.",
      icon: <Database size={24} />,
      delay: 200
    },
    {
      title: "MERN Stack",
      description: "Full-stack development using MongoDB, Express, React, and Node.js for seamless web applications.",
      icon: <Code size={24} />,
      delay: 300
    },
    {
      title: "AI & Data Science",
      description: "Implementing machine learning algorithms and data analysis for intelligent applications.",
      icon: <FileCode size={24} />,
      delay: 400
    },
    {
      title: "IoT Development",
      description: "Connecting physical devices to the internet and creating smart, automated systems.",
      icon: <Settings size={24} />,
      delay: 500
    },
    {
      title: "Microprocessors",
      description: "Programming and working with microcontrollers and embedded systems for specialized applications.",
      icon: <Terminal size={24} />,
      delay: 600
    },
    {
      title: "Technical Writing",
      description: "Creating clear, concise documentation and articles on complex technical topics.",
      icon: <BookOpen size={24} />,
      delay: 700
    },
    {
      title: "System Architecture",
      description: "Designing scalable and maintainable system architectures for complex applications.",
      icon: <Layers size={24} />,
      delay: 800
    }
  ];

  // Grouped skills by category
  const skillCategories = [
    {
      category: "Web Development",
      skills: [
        {
          title: "React JS",
          description: "Develop scalable single-page applications with React JS, leveraging its component-based architecture.",
          icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="8" fill="#fff" />
              <circle cx="20" cy="20" r="3.5" fill="#61DAFB" />
              <g stroke="#61DAFB" strokeWidth="2" fill="none">
                <ellipse rx="16" ry="6.5" cx="20" cy="20" />
                <ellipse rx="16" ry="6.5" cx="20" cy="20" transform="rotate(60 20 20)" />
                <ellipse rx="16" ry="6.5" cx="20" cy="20" transform="rotate(120 20 20)" />
              </g>
            </svg>
          ),
          delay: 100
        },
        {
          title: "Express.js",
          description: "Build robust and scalable backend applications using Express.js framework.",
          icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="8" fill="#fff" />
              <text x="7" y="28" fontFamily="Arial Black,Arial,sans-serif" fontSize="18" fill="#000">express</text>
            </svg>
          ),
          delay: 200
        },
        {
          title: "PHP & XAMPP",
          description: "Develop dynamic web applications using PHP and manage local development environment with XAMPP.",
          icon: (
            <span style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
              <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="10" fill="#fff" />
                <ellipse cx="24" cy="24" rx="22" ry="12" fill="#777BB4" />
                <text x="8" y="29" fontFamily="Arial Black,Arial,sans-serif" fontSize="14" fill="#fff">PHP</text>
              </svg>
              <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="6" fill="#fff" />
                <rect x="2" y="2" width="28" height="28" rx="6" fill="#FB7A24" />
                <path d="M8 8h16v16H8V8zm2 2v12h12V10H10zm2 2h8v8h-8v-8z" fill="#fff" />
              </svg>
            </span>
          ),
          delay: 300
        },
        {
          title: "CSS",
          description: "Style web applications with CSS, enhancing user experience with responsive and visually appealing designs.",
          icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="8" fill="#fff" />
              <path d="M7 5l3 30 10 3 10-3 3-30H7z" fill="#264DE4" />
              <path d="M20 35V8h13.5l-2.7 24.3L20 35z" fill="#2965F1" />
              <path d="M20 13h7.5l-.3 3H20v3h6.9l-.3 3H20v3h6.6l-.3 3.3L20 32v-3z" fill="#fff" />
            </svg>
          ),
          delay: 400
        },
        {
          title: "JavaScript",
          description: "Build dynamic and interactive web applications using JavaScript, enabling rich user interfaces.",
          icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="8" fill="#fff" />
              <rect width="40" height="40" rx="8" fill="#F7DF1E" />
              <text x="8" y="28" fontFamily="Arial Black,Arial,sans-serif" fontSize="18" fill="#222">JS</text>
            </svg>
          ),
          delay: 500
        },
        {
          title: "Node.js",
          description: "Create robust server-side applications and APIs with Node.js.",
          icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="8" fill="#fff" />
              <polygon points="20,4 36,12 36,28 20,36 4,28 4,12" fill="#3C873A" />
              <text x="10" y="27" fontFamily="Arial Black,Arial,sans-serif" fontSize="14" fill="#fff">Node</text>
            </svg>
          ),
          delay: 600
        },
        {
          title: "SQL",
          description: "Design and manage relational databases using SQL for robust data storage and retrieval.",
          icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="8" fill="#fff" />
              <ellipse cx="20" cy="13" rx="13" ry="6" fill="#00758F" />
              <rect x="7" y="13" width="26" height="14" rx="7" fill="#00758F" />
              <text x="10" y="30" fontFamily="Arial Black,Arial,sans-serif" fontSize="14" fill="#fff">SQL</text>
            </svg>
          ),
          delay: 700
        },
        {
          title: "Bootstrap",
          description: "Build responsive, mobile-first sites with Bootstrap's powerful CSS framework.",
          icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="8" fill="#fff" />
              <rect x="6" y="6" width="28" height="28" rx="7" fill="#7952B3" />
              <text x="13" y="30" fontFamily="Arial Black,Arial,sans-serif" fontSize="18" fill="#fff">B</text>
            </svg>
          ),
          delay: 800
        },
        {
          title: "Django",
          description: "Develop secure and scalable web applications using Django's robust Python framework.",
          icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="8" fill="#fff" />
              <text x="10" y="28" fontFamily="Arial Black,Arial,sans-serif" fontSize="18" fill="#092E20">Django</text>
            </svg>
          ),
          delay: 900
        },
        {
          title: "Flask",
          description: "Build lightweight web applications and APIs with Flask's flexible Python microframework.",
          icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="8" fill="#fff" />
              <path d="M10 30 Q20 10 30 30" stroke="#000" strokeWidth="2" fill="none" />
              <ellipse cx="20" cy="28" rx="8" ry="3" fill="#000" />
            </svg>
          ),
          delay: 1000
        },
      ]
    },
    {
      category: "AI & Data Science",
      skills: [
        {
          title: "Gen AI",
          description: "Harness generative AI models for content creation, automation, and innovation.",
          icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="8" fill="#fff" />
              <circle cx="20" cy="20" r="12" fill="#8E44AD" />
              <path d="M20 10v20M10 20h20" stroke="#fff" strokeWidth="2" />
              <circle cx="20" cy="20" r="4" fill="#fff" />
            </svg>
          ),
          delay: 100
        },
        {
          title: "Deep Learning",
          description: "Build and train deep neural networks for advanced AI applications.",
          icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="8" fill="#fff" />
              <ellipse cx="20" cy="20" rx="12" ry="8" fill="#2ECC71" />
              <path d="M12 20c2-6 14-6 16 0" stroke="#fff" strokeWidth="2" />
              <circle cx="20" cy="20" r="3" fill="#fff" />
            </svg>
          ),
          delay: 200
        },
        {
          title: "AI",
          description: "Develop intelligent systems and solutions using artificial intelligence techniques.",
          icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="8" fill="#fff" />
              <rect x="10" y="10" width="20" height="20" rx="6" fill="#3498DB" />
              <text x="14" y="28" fontFamily="Arial Black,Arial,sans-serif" fontSize="14" fill="#fff">AI</text>
            </svg>
          ),
          delay: 300
        },
        {
          title: "Chatbot Development",
          description: "Design and deploy conversational AI chatbots for automation and support.",
          icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="8" fill="#fff" />
              <rect x="8" y="12" width="24" height="16" rx="8" fill="#F39C12" />
              <circle cx="16" cy="20" r="2" fill="#fff" />
              <circle cx="24" cy="20" r="2" fill="#fff" />
              <rect x="18" y="24" width="4" height="2" rx="1" fill="#fff" />
            </svg>
          ),
          delay: 400
        },
        {
          title: "Computer Vision",
          description: "Implement computer vision techniques for image and video analysis.",
          icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="8" fill="#fff" />
              <ellipse cx="20" cy="20" rx="10" ry="6" fill="#E67E22" />
              <circle cx="20" cy="20" r="3" fill="#fff" />
              <circle cx="20" cy="20" r="1.5" fill="#E67E22" />
            </svg>
          ),
          delay: 500
        },
        {
          title: "Machine Learning",
          description: "Implement ML algorithms and data analysis for intelligent applications.",
          icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="8" fill="#fff" />
              <rect x="10" y="10" width="20" height="20" rx="6" fill="#16A085" />
              <path d="M14 26l4-8 4 8" stroke="#fff" strokeWidth="2" />
              <circle cx="18" cy="22" r="1.5" fill="#fff" />
              <circle cx="22" cy="22" r="1.5" fill="#fff" />
            </svg>
          ),
          delay: 600
        },
        {
          title: "Data Visualization",
          description: "Present data insights using modern visualization libraries.",
          icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="8" fill="#fff" />
              <rect x="10" y="24" width="4" height="6" rx="2" fill="#27AE60" />
              <rect x="18" y="18" width="4" height="12" rx="2" fill="#27AE60" />
              <rect x="26" y="12" width="4" height="18" rx="2" fill="#27AE60" />
            </svg>
          ),
          delay: 700
        },
        {
          title: "Python",
          description: "Develop AI and data science solutions using Python and its libraries.",
          icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="8" fill="#fff" />
              <rect x="10" y="10" width="20" height="20" rx="6" fill="#FFD43B" />
              <path d="M18 18h4v-2a2 2 0 0 0-2-2h-2v2h2v2z" fill="#306998" />
              <path d="M22 22h-4v2a2 2 0 0 0 2 2h2v-2h-2v-2z" fill="#306998" />
              <circle cx="16" cy="16" r="1" fill="#306998" />
              <circle cx="24" cy="24" r="1" fill="#306998" />
            </svg>
          ),
          delay: 800
        },
      ]
    },
    {
      category: "Embedded Systems & IoT",
      skills: [
        {
          title: "Raspberry Pi",
          description: "Develop IoT solutions with Raspberry Pi, integrating sensors and actuators for smart applications.",
          icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="8" fill="#fff" />
              <circle cx="20" cy="20" r="12" fill="#A22846" />
              <circle cx="16" cy="18" r="2" fill="#fff" />
              <circle cx="24" cy="18" r="2" fill="#fff" />
              <ellipse cx="20" cy="24" rx="4" ry="2" fill="#fff" />
            </svg>
          ),
          delay: 100
        },
        {
          title: "C",
          description: "Develop firmware for embedded systems using Embedded C, ensuring efficient and reliable code.",
          icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="8" fill="#fff" />
              <circle cx="20" cy="20" r="12" fill="#00599C" />
              <text x="13" y="27" fontFamily="Arial Black,Arial,sans-serif" fontSize="18" fill="#fff">C</text>
            </svg>
          ),
          delay: 200
        },
        {
          title: "Arduino",
          description: "Build interactive hardware projects and prototypes using Arduino microcontrollers.",
          icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="8" fill="#fff" />
              <rect x="10" y="16" width="20" height="8" rx="4" fill="#00979D" />
              <circle cx="16" cy="20" r="2" fill="#fff" />
              <circle cx="24" cy="20" r="2" fill="#fff" />
              <rect x="18" y="18" width="4" height="4" rx="2" fill="#00979D" />
            </svg>
          ),
          delay: 300
        },
        {
          title: "C++",
          description: "Develop high-performance applications and firmware using C++ for embedded systems.",
          icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="8" fill="#fff" />
              <polygon points="20,8 32,16 32,32 8,32 8,16" fill="#00599C" />
              <text x="13" y="28" fontFamily="Arial Black,Arial,sans-serif" fontSize="16" fill="#fff">C++</text>
            </svg>
          ),
          delay: 400
        }
      ]
    },
    {
      category: "Technology",
      skills: [
        {
          title: "Cloud Computing and Deployment",
          description: "Deploy, manage, and scale applications using modern cloud platforms.",
          icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="8" fill="#fff" />
              <ellipse cx="20" cy="24" rx="10" ry="6" fill="#3498DB" />
              <ellipse cx="14" cy="22" rx="4" ry="3" fill="#85C1E9" />
              <ellipse cx="26" cy="22" rx="4" ry="3" fill="#85C1E9" />
            </svg>
          ),
          delay: 100
        },
        {
          title: "Ubuntu OS",
          description: "Work efficiently with Ubuntu, a popular open-source Linux operating system.",
          icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="8" fill="#fff" />
              <circle cx="20" cy="20" r="12" fill="#E95420" />
              <circle cx="20" cy="20" r="3" fill="#fff" />
              <circle cx="28" cy="20" r="2" fill="#fff" />
              <circle cx="12" cy="20" r="2" fill="#fff" />
            </svg>
          ),
          delay: 200
        },
        {
          title: "FastAPI",
          description: "Develop high-performance APIs with FastAPI, leveraging Python's async capabilities.",
          icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="8" fill="#fff" />
              <circle cx="20" cy="20" r="12" fill="#009688" />
              <path d="M20 12v16M12 20h16" stroke="#fff" strokeWidth="2" />
            </svg>
          ),
          delay: 300
        },
      ]
    },
  ];

  // Project categories
  const projectCategories = [
    {
      category: "Web Apps",
      projects: [
        {
          title: "Nagarsulacarride Website",
          description: "It features booking via Google Forms, mobile-friendly design, and is hosted on GoDaddy Domain.",
          tags: ["HTML5", "CSS", "JavaScript", "AWS", "Google Sheets"],
          delay: 100,
          image: "/image/Screenshot 2025-06-04 181159.png",
          projectUrl: "https://nagarsulacarride.com/"
        },
        {
          title: "Weather App",
          description: "It shows the weather of the city you search for.",
          tags: ["HTML5", "CSS", "OpenWeather API", "JavaScript"],
          delay: 200,
          image: "/image/Screenshot 2025-06-05 130051.png",
          projectUrl: "https://github.com/Ashutoshjangam/weather-app.git"
        },
        {
          title: "NEWS APP",
          description: "News app using newsapi",
          tags: ["React", "CSS", "NEWS API", "JavaScript"],
          delay: 300,
          image: "/image/Screenshot 2025-06-05 210231.png",
          projectUrl: "https://news-api-project-gray.vercel.app/"
        },
        {
          title: "TODO APP",
          description: "Todo-list app using api",
          tags: ["React", "CSS", "API", "JavaScript"],
          delay: 400,
          image: "/image/Screenshot 2025-06-05 223619.png",
          projectUrl: "https://github.com/Ashutoshjangam/todo_list_by_api-.git"
        },
        {
          title: "Nodejs-blog",
          description: "Blog app using nodejs, pagenation, Admin panel, CURD Operation",
          tags: ["Nodejs", "MongoDB", "Express", "EJS"],
          delay: 500,
          image: "/image/Screenshot 2025-01-02 171944.png",
          projectUrl: "https://github.com/Ashutoshjangam/Nodejs-blog.git"
        },
        {
          title: "Cars Showroom",
          description: "Cars Showroom using xampp Apche server",
          tags: ["PHP", "APPACHE", "SQL"],
          delay: 600,
          image: "/image/Screenshot 2025-06-06 154932.png",
          projectUrl: ""
        },
      ]
    },
    {
      category: "AI&DS Projects",
      projects: [
        {
          title: "ANN-Chatbot",
          description: "A simple and stylish chatbot web interface built using Flask, HTML, CSS, and JavaScript. This project demonstrates how to serve a chatbot that can return information (e.g., about Artificial Neural Networks) stored in a JSON file.",
          tags: ["Python", "Pytroch", "Flask", "NLP"],
          delay: 100,
          image: "/image/Screenshot 2025-04-13 005318.png",
          projectUrl: "https://github.com/Ashutoshjangam/ANN_chatbot.git"
        },
        {
          title: "Hand Detection Based Volume Control System",
          description: "An AI-powered system that uses hand gesture detection via a webcam to control system volume in real-time.",
          tags: ["Python", "OpenCV"],
          delay: 200,
          image: "/image/Screenshot 2025-06-06 155859.png",
          projectUrl: "https://github.com/Ashutoshjangam/All-about-AI.git"
        },
        {
          title: "Road Lane Line Detection System",
          description: "A computer vision-based system that detects and highlights lane lines on roads in real-time using OpenCV.",
          tags: ["Python", "OpenCV", "Camera Feed / Video Input"],
          delay: 300,
          image: "/image/Beige Minimalist Mood Photo Collage.png",
          projectUrl: "https://github.com/Ashutoshjangam/intership-.git"
        },
        {
          title: "Plant Leaf Disease Detection Using CNN",
          description: "An AI-based system that detects and classifies plant leaf diseases using a Convolutional Neural Network (CNN) model.",
          tags: ["Python", "TensorFlow / Keras", "Dataset:image",],
          delay: 400,
          image: "/image/Screenshot 2025-06-06 183637.png",
          projectUrl: "https://github.com/Ashutoshjangam/new.git"
        },
        {
          title: "Summer Heat Wave Mobile Alert System",
          description: "A mobile-based alert system that uses predictive models to warn users about upcoming heat waves and extreme temperatures.",
          tags: ["Python", "OpenWheather API", "Twilio API",],
          delay: 500,
          image: "/image/Screenshot 2025-06-06 184832.png",
          projectUrl: "https://github.com/Ashutoshjangam/taask-2-.git"
        },
        {
          title: "IMDb Movie Review Sentiment Analysis",
          description: "A natural language processing project that classifies IMDb movie reviews as positive or negative using machine learning.",
          tags: ["Python", "Natural Language Toolkit (NLTK) ", "IMDb Dataset",],
          delay: 600,
          image: "/image/Screenshot 2025-06-06 191011.png",
          projectUrl: ""
        },
      ]
    },
    {
      category: "Academic Projects",
      projects: [
        {
          title: "Deaf-Mute Communication Robot Hand",
          description: "A robotic hand system that interprets hand signs from deaf-mute individuals and converts them into spoken words using speech synthesis.",
          tags: ["Raspberry Pi", "Sensor"],
          delay: 100,
          image: "/image/PBL photo.jpg"
        },
      ]
    },
  ];

  // Certification categories
  const certificationCategories = [
    {
      category: "Web Development",
      certifications: [
        {
          title: "Web Development",
          organization: "GDG",
          year: "2024",
          delay: 100,
          image: "/image/Screenshot 2025-06-12 133239.png"
        },
        {
          title: "Web Development",
          organization: "DevTown",
          year: "2024",
          delay: 100,
          image: "/image/Screenshot 2025-06-12 140428.png"
        },
        //   {
        //     title: "Advanced JavaScript",
        //     organization: "Issuing Organization",
        //     year: "2023",
        //     delay: 200,
        //     image: "/certificates/js.png"
        //   },
      ]
    },
    {
      category: "AI & Data Science",
      certifications: [
        {
          title: "AI For Everyone",
          organization: "DeepLearing.AI",
          year: "2024",
          delay: 100,
          image: "/image/Screenshot 2025-06-12 134546.png"
        },
        {
          title: "Certified AI Specialist",
          organization: "Salesforce",
          year: "2024",
          delay: 100,
          image: "/image/Screenshot 2025-06-12 135620.png"
        },
        {
          title: "Certified AI Associate",
          organization: "Salesforce",
          year: "2024",
          delay: 100,
          image: "/image/Screenshot 2025-06-12 140037.png"
        },
      ]
    },
  ];

  // Update document title
  useEffect(() => {
    document.title = "Ashutosh Jangam | Portfolio";

    // Add intersection observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
          } else {
            // Optional: remove the class when out of view
            // entry.target.classList.remove('animate-fade-in');
            // entry.target.classList.add('opacity-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all timeline elements
    document.querySelectorAll('.timeline-item').forEach((item) => {
      observer.observe(item);
    });

    // Observe About section animation
    const aboutSection = document.querySelector('.about-animate');
    if (aboutSection) observer.observe(aboutSection);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="min-h-screen pt-28 pb-20 flex items-center">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row lg:items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, It's <span className="text-portfolioPurple">Ashutosh S. Jangam</span>
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              I'm a <TypeWriter strings={skills} className="text-portfolioPurple" />
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl">
              Driven by a passion for AI and Data Science, I craft dynamic, responsive websites that merge innovation with functionality. My portfolio reflects a strong focus on creative problem-solving and technical execution. By blending design thinking with engineering expertise, I create compelling digital experiences that stand out.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBnNfLhsXsPwrqFDKcrglGWmmhNCJCTHkkqKgjPVqCtVhWrLrvzgRWKSNDbSFMtKplfRFlh">
                <SocialIcons /></a>

              <a href="public\ASU_Resume_Template.pdf" download>
                <Button className="bg-portfolioPurple hover:bg-portfolioPurple/80 text-white font-bold">
                  Download CV
                </Button>
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-portfolioPurple/20 overflow-hidden border-4 border-portfolioPurple/40">
                <img
                  src="image/Screenshot 2025-06-12 153311.png"
                  alt="Ashutosh Jangam"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center font-bold mb-12">
            My <span className="text-portfolioPurple">Education</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            {/* Timeline Container */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-portfolioPurple/50"></div>

              {/* Timeline Items */}
              <div className="timeline-item opacity-0 translate-y-8 transition-all duration-1000 mb-16 md:mb-0 relative md:flex">
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-4 h-4 rounded-full bg-portfolioPurple z-10"></div>
                <div className="md:w-1/2 md:pr-8 md:text-right">
                  <div className={cn(
                    "bg-black/50 border border-portfolioPurple/30 rounded-lg p-6",
                    "md:ml-auto md:mr-8 hover:border-portfolioPurple transition-colors"
                  )}>
                    <div className="mb-1 text-portfolioPurple text-sm">2022 - 2026</div>
                    <h3 className="text-xl font-semibold text-portfolioPurple">Bachelor of Engineering</h3>
                    <p className="text-gray-400">Artificial Intelligence and Data Science</p>
                    <p className="text-gray-300 mt-2">Late Sau. Kantabai Bhavarlalji Jain
                      COLLEGE OF ENGINEERING, Chandwad, Nashik</p>
                    <p className="text-gray-400 mt-1 text-sm">
                      Currently pursuing a Bachelor's Degree in AI&DS.
                    </p>
                    <a href="https://snjb.org/engineering/Home#">
                      <p className="text-purple-400">Institute Website</p></a>
                  </div>
                </div>
                <div className="md:w-1/2"></div>
              </div>

              <div className="timeline-item opacity-0 translate-y-8 transition-all duration-1000 mb-16 md:mb-0 relative md:flex mt-16">
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-4 h-4 rounded-full bg-portfolioPurple z-10"></div>
                <div className="md:w-1/2"></div>
                <div className="md:w-1/2 md:pl-8">
                  <div className={cn(
                    "bg-black/50 border border-portfolioPurple/30 rounded-lg p-6",
                    "md:mr-auto md:ml-8 hover:border-portfolioPurple transition-colors"
                  )}>
                    <div className="mb-1 text-portfolioPurple text-sm">2021 - 2019</div>
                    <h3 className="text-xl font-semibold text-portfolioPurple">Higher Secondary Education</h3>
                    <p className="text-gray-400">Science & Mathematics</p>
                    <p className="text-gray-300 mt-2">Swami Muktanand Vidyalaya jr college Yeola,Nashik</p>
                    <p className="text-gray-400 mt-1 text-sm">
                      Excelled in mathematics and physics, laying the foundation for engineering studies.
                    </p>
                  </div>
                </div>
              </div>

              <div className="timeline-item opacity-0 translate-y-8 transition-all duration-1000 mb-16 md:mb-0 relative md:flex mt-16">
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-4 h-4 rounded-full bg-portfolioPurple z-10"></div>
                <div className="md:w-1/2 md:pr-8 md:text-right">
                  <div className={cn(
                    "bg-black/50 border border-portfolioPurple/30 rounded-lg p-6",
                    "md:ml-auto md:mr-8 hover:border-portfolioPurple transition-colors"
                  )}>
                    <div className="mb-1 text-portfolioPurple text-sm">2014 - 2019</div>
                    <h3 className="text-xl font-semibold text-portfolioPurple">Secondary Education</h3>
                    <p className="text-gray-400">General Education</p>
                    <p className="text-gray-300 mt-2">Swami Muktanand Vidyalaya (English Medium) Yeola Secondary School Nashik</p>
                    <p className="text-gray-400 mt-1 text-sm">
                      Developed strong fundamentals in science, mathematics, and computer science.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center font-bold mb-12">
            My <span className="text-portfolioPurple">Skills</span>
          </h2>

          <div className="space-y-16">
            {skillCategories.map((cat, idx) => (
              <div key={cat.category}>
                <h3 className="text-2xl font-bold text-portfolioPurple mb-8 text-center lg:text-left">{cat.category}</h3>
                <div className="relative">
                  <div className="absolute inset-0 bg-portfolioPurple/5 rounded-3xl blur-3xl pointer-events-none"></div>
                  <Marquee
                    gradient={false}
                    speed={40}
                    pauseOnHover={true}
                    direction="left"
                    className="py-4"
                  >
                    <div className="flex gap-6 px-4">
                      {cat.skills.map((skill, index) => (
                        <div key={index} className="min-w-[300px]">
                          <SkillCard
                            title={skill.title}
                            description={skill.description}
                            icon={skill.icon}
                            delay={skill.delay}
                          />
                        </div>
                      ))}
                    </div>
                  </Marquee>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center font-bold mb-12">
            My <span className="text-portfolioPurple">Projects</span>
          </h2>

          <div className="space-y-16">
            {projectCategories.map((cat) => (
              <div key={cat.category}>
                <h3 className="text-2xl font-bold text-portfolioPurple mb-8 text-center lg:text-left">{cat.category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
                  <div className="absolute inset-0 bg-portfolioPurple/5 rounded-3xl blur-3xl pointer-events-none"></div>
                  {cat.projects.map((project, idx) => (
                    <div
                      key={idx}
                      className="bg-black/50 border border-portfolioPurple/30 rounded-lg overflow-hidden hover:border-portfolioPurple transition-colors relative z-10"
                      style={{ animationDelay: `${project.delay}ms` }}
                    >
                      <div className="h-48 bg-gray-800 relative">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.src = '/placeholder.svg';
                            console.error(`Failed to load image: ${project.image}`);
                          }}
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-gray-300 mb-4">{project.description}</p>
                        <div className="flex space-x-2 flex-wrap mb-4">
                          {project.tags.map((tag, i) => (
                            <span key={i} className="px-2 py-1 text-xs bg-portfolioPurple/20 text-portfolioPurple rounded">{tag}</span>
                          ))}
                        </div>
                        <a
                          href={project.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block w-full"
                        >
                          <Button className="w-full bg-portfolioPurple hover:bg-portfolioPurple/80 text-white font-bold">
                            Visit Project
                          </Button>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certification" className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center font-bold mb-12">
            My <span className="text-portfolioPurple">Certifications</span>
          </h2>

          <div className="space-y-16">
            {certificationCategories.map((cat) => (
              <div key={cat.category}>
                <h3 className="text-2xl font-bold text-portfolioPurple mb-8 text-center lg:text-left">{cat.category}</h3>
                <div className="relative">
                  <div className="absolute inset-0 bg-portfolioPurple/5 rounded-3xl blur-3xl pointer-events-none"></div>
                  <Marquee
                    gradient={false}
                    speed={40}
                    pauseOnHover={true}
                    direction="left"
                    className="py-4"
                  >
                    <div className="flex gap-6 px-4">
                      {cat.certifications.map((cert, idx) => (
                        <SkillCard
                          key={idx}
                          title={cert.title}
                          description={`${cert.organization} • ${cert.year}`}
                          delay={cert.delay}
                          image={cert.image}
                          imageSize="large"
                        />
                      ))}
                    </div>
                  </Marquee>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center font-bold mb-12">
            About <span className="text-portfolioPurple">Me</span>
          </h2>

          <div className="max-w-3xl mx-auto bg-black/50 border border-portfolioPurple/30 rounded-lg p-8 flex flex-col md:flex-row items-center gap-8 about-animate opacity-0 translate-y-8 transition-all duration-1000">
            {/* Left: Image */}
            <div className="flex-shrink-0">
              <img
                src="/picofme.png"
                alt="Ashutosh Jangam"
                className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-2xl border-4 border-portfolioPurple/40 shadow-lg"
              />
            </div>
            {/* Right: About Text */}
            <div>
              <p className="text-gray-300 mb-4">
                I'm Ashutosh Jangam, a passionate and driven person with a keen interest in cutting-edge technologies; mainly, Artificial Intelligence, Machine Learning, and Web Development. I enjoy tackling real-world problems with technology and making an impact with every solution I build. Over the years, I've steadily developed relevant experience both from internships, hackathons, and personal projects ranging from AI system development and chatbot design, to audio and web apps, to CRM systems.
              </p>
              <p className="text-gray-300 mb-4">
                My journey into web development began during my undergraduate studies, and since then, I've been constantly improving my skills and staying updated with the latest technologies in this ever-evolving field.
              </p>
              <p className="text-gray-300">
                Beyond coding, I'm interested in artificial intelligence, data science, and IoT, always looking for ways to integrate these technologies into practical applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center font-bold mb-12">
            Contact <span className="text-portfolioPurple">Me</span>
          </h2>

          <div className="max-w-3xl mx-auto bg-black/50 border border-portfolioPurple/30 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-portfolioPurple/20 flex items-center justify-center text-portfolioPurple mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Phone</p>
                      <p className="text-gray-200">+91 84858 84699</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-portfolioPurple/20 flex items-center justify-center text-portfolioPurple mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <p className="text-gray-200">ashutoshjangam2k@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-portfolioPurple/20 flex items-center justify-center text-portfolioPurple mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Location</p>
                      <p className="text-gray-200">Yeola, Nashik, Maharashtra, India</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <SocialIcons />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Send Message</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-black/30 border border-portfolioPurple/30 rounded px-4 py-3 text-white focus:outline-none focus:border-portfolioPurple"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full bg-black/30 border border-portfolioPurple/30 rounded px-4 py-3 text-white focus:outline-none focus:border-portfolioPurple"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      className="w-full bg-black/30 border border-portfolioPurple/30 rounded px-4 py-3 text-white focus:outline-none focus:border-portfolioPurple"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-portfolioPurple hover:bg-portfolioPurple/80 text-white font-bold">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-black/50 border-t border-portfolioPurple/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Ashutosh Jangam. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
