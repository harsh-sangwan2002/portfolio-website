import {
  web,
  backend,
  creator,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
} from "../assets";
import fiverr from '../assets/fiverr.webp';
import disney from '../assets/disney.jpeg';
import edgeledger from '../assets/edge-ledger.webp';
import movix from '../assets/movix.webp';
import fileSystem from '../assets/fileSystem.png';
import tata from '../assets/company/tata-power.jpg';
import vedaz from '../assets/company/vedaz.png';
import srijan from '../assets/company/srijan.png';
import rakatu from '../assets/company/rakatu.jpeg';
import indiabuys from '../assets/company/indiabuys.jpeg'
import youtube from '../assets/company/youtube.jpg'
import ae from '../assets/company/ae.jpeg';

export const navLinks = [
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
  {
    title: "Frontend Developer",
    icon: web,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Authority Entrepreneurs",
    icon: ae,
    iconBg: "#383E56",
    date: "July 2025 - Oct 2025",
    points: [
      "Spearheaded and customised marketing websites and sales funnels using Go-High-Level, boosting lead generation by 30% and increasing conversion rates by 20%.",
      "Enhanced user engagement by refactoring the front-end code-base with React, which led to a 15% decrease in bounce rate and improved the average session duration by 3 minutes.",
      "Collaborated with designers and backend teams tointegrate Node APIs, improving funnel performance and driving a 15% increase in user engagement through iterative testing.",
    ],
  },
  {
    title: "SDE-1",
    company_name: "India Buys",
    icon: indiabuys,
    iconBg: "#383E56",
    date: "Apr 2025 - Jun 2025",
    points: [
      "Developed and maintained 6+ full-stack features in a scalable React + Redux application, reducing page load time by 30% through optimized component rendering and efficient API integration.",
      "Built and implemented a robust webhook processing system using Node.js, Express, and MongoDB, improving the success rate of event delivery by 92% with retry logic, event filtering, and secure signature verification",
      "Delivered a cross-platform mobile app in React Native used by 5K+ active users, reducing development time by 40% through reusable UI components and shared business logic with the web codebase.",
    ],
  },
  {
    title: "Junior Implementation Engineer",
    company_name: "Rakatu",
    icon: rakatu,
    iconBg: "#383E56",
    date: "Nov 2024 - Present",
    points: [
      "Built and deployed a full-stack application using React, Node.js, Express, and MongoDB, improving data retrieval speed by 40% and reducing server response time by 25% through improved API design.",
      "Developed and optimized RESTful APIs using Spring Boot, implementing caching and pagination to enhance backend eﬃciency and reduce average API latency by 30%.",
      "Designed and integrated Java microservices architecture with inter-service communication via REST and RabbitMQ, achieving 20% faster request handling and ensuring seamless data consistency across distributed systems.",
    ],
  },
  {
    title: "Content Creator",
    company_name: "Self-employed (YouTube Channel)",
    icon: youtube,
    iconBg: "#383E56",
    date: "Jun 2024 - Present",
    points: [
      "Independently created and published 100+ educational and motivational videos focused on coding, software development, and mindset, building an engaged and loyal subscriber base.",
      "Managed complete content creation pipeline — from scripting to editing — using Adobe Premiere Pro and Final Cut Pro, ensuring high-quality, consistent educational and inspirational content.",
      "Implemented SEO strategies with optimized titles, tags, thumbnails, and descriptions, increasing visibility, search rankings, and boosting average watch time by over 40%.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Vedaz.io",
    icon: vedaz,
    iconBg: "#383E56",
    date: "Dec 2024 - Jan 2025",
    points: [
      "Migrated an existing website to Remix, enhancing performance and scalability, while developing responsive and user - friendly web and mobile applications using Remix and Tailwind CSS.",
      "Authored clean, efficient, and maintainable code by adhering to industry best practices, resulting in improved code quality and reduced technical debt.",
      "Collaborated with frontend and backend developers to seamlessly integrate server-side logic with Remix, improving overall application functionality and user experience.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Srijan Spectrums Pvt Ltd",
    icon: srijan,
    iconBg: "#383E56",
    date: "Jan 2024 - Feb 2024",
    points: [
      "Developed full-stack web applications utilizing React, Node.js, Express.js, Java, and Spring Boot for scalable solutions.",
      "Designed and implemented user-friendly interfaces with React while ensuring robust backend functionality using Java and Spring Boot.",
      "Collaborated on integrating APIs and optimizing application performance to enhance usability and system efficiency effectively.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Tata Power DDL",
    icon: tata,
    iconBg: "#383E56",
    date: "Aug 2022 - Oct 2022",
    points: [
      "Engineered a comprehensive web application for Tata Power DDL employees, streamlining internal processes, and reducing average task completion time by 20%.",
      "Constructed robust back-end functionality using ASP.NET and C# with JavaScript and Bootstrap for responsive front-end design.",
      "Incorporated secure user authentication using Firebase, reducing unauthorized access incidents by 30%.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Harsh is a smart, talented, and hardworking individual with a passion for learning and innovation. His positive attitude, humility, and strong teamwork make him a reliable and inspiring contributor to any project.",
    name: "Vinay Dabas",
    designation: "Senior Solution Architect",
    company: "Ping Identity",
    image: "https://www.kuppingercole.com/pics/croppedImg_202101291704.jpg",
  },
  {
    testimonial:
      "Harsh is a dedicated and talented software engineer with deep expertise in programming languages. He consistently builds scalable, enterprise-level applications with clean, maintainable code, making him a key contributor to long-term project success.",
    name: "Arvind Sangwan",
    designation: "Software Engineer",
    company: "CMPA",
    image: "https://media.licdn.com/dms/image/D5603AQGcVDwJnjNUoQ/profile-displayphoto-shrink_200_200/0/1673044415007?e=2147483647&v=beta&t=YiULChXOOnoQkyniByZwwnyF_y8xpmu25w-jNZPbfxg",
  },
  {
    testimonial:
      "Harsh is a talented and versatile professional with strong technical expertise and analytical skills. He excels both independently and in teams, consistently delivering high-quality work. His dedication, attention to detail, and insightful contributions make him a valuable asset. I highly recommend Harsh and wish him continued success in his journey.",
    name: "Omesh",
    designation: "Junior Implementation Engineer",
    company: "Rakatu",
    image: "https://media.licdn.com/dms/image/v2/D5603AQGSFs94VDoMYQ/profile-displayphoto-shrink_800_800/B56ZSeJAqDHQAc-/0/1737819952142?e=1757548800&v=beta&t=sYTrNaDazEV_XHdMzH4iftwXtSLRTz2wJzmSX_bpRnI",
  },
  {
    testimonial:
      "I worked with Harsh for 3 months during college projects and was consistently impressed by his frontend skills. His strong grasp of HTML, CSS, JavaScript, and React makes him truly exceptional.",
    name: "Lakshay Gautam",
    designation: "Software Engineer",
    company: "Hindustan Times",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQGp3Gma33wl8w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1673025579838?e=1757548800&v=beta&t=gCd_k_mOVo-RwELLMUN19bkSs40e8Z21pqup7yR4Yho",
  },

];

const projects = [
  {
    name: "Disney+ Clone",
    description:
      "Engineered a Full-stack web application, improving load speed by 40% and achieving a 0.01 CLS score for enhanced user experience. Shaped an engaging and responsive user interface using Styled-Components.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "styled-components",
        color: "pink-text-gradient",
      },

    ],
    image: disney,
    source_code_link: "https://github.com/harsh-sangwan2002/disney-clone",
  },
  {
    name: "Fiverr",
    description:
      "Designed a Full-stack web application, optimizing page load times to achieve an average First Contentful Paint (FCP) of less than 500 milliseconds for enhanced user experience. Achieved an average RESTful API response time of 50 milliseconds using Node.js and Express.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
    ],
    image: fiverr,
    source_code_link: "https://github.com/harsh-sangwan2002/fiverr",
  },
  {
    name: "File System Organizer",
    description:
      "Engineered a command line tool using Node.js and JavaScript to streamline file organization, improving workflow efficiency. Achieved a weekly time savings of 3 hours per user through automated file management, boosting overall productivity by 20%.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
    ],
    image: fileSystem,
    source_code_link: "https://github.com/harsh-sangwan2002/File-System-Organizer",
  },
];

const featuredProjects = [
  {
    title: "Dsiney+ Clone",
    company_name: "React.js, Node.js, Express, Styled-Components",
    icon: disney,
    iconBg: "#383E56",
    date: "Oct 2024 - Nov 2024",
    points: [
      "Engineered a full-stack web application with Firebase authentication, managing profiles & ensuring seamless streaming and enhanced user experience.",
      "Developed UI interfaces integrated with Firebase for secure user authentication and real-time database functionality, reducing load time by 40% with code-splitting and lazy-loading, and achieving a 0.01 CLS score.",
      "Implemented security measures against vulnerabilities like XSS, CSRF, and SQL injection.",
    ],
  },
  {
    title: "Movix App",
    company_name: "React.js, SCSS, Firebase, RestAPI",
    icon: movix,
    iconBg: "#383E56",
    date: "Sept 2023 - Oct 2023",
    points: [
      "Designed a full-stack Movix App, leveraging TMDB API for seamless movie data integration and enriched user experience.",
      "Crafted a modern and responsive interface with ReactJS, JSX, and SCSS, simplifying movie exploration and selection.",
      "Implemented Firebase for secure user authentication and hosting, providing a seamless and reliable platform.", ,
    ],
  },
  {
    title: "File System Organizer",
    company_name: "Node.js, JavaScript",
    icon: fileSystem,
    iconBg: "#383E56",
    date: "Aug 2023 - Sept 2023",
    points: [
      "Engineered Node.js CLI simplifies organization, offering time-saving solutions for file clutter.",
      "Node.js tool organizes files, intelligently categorizing clutter into structured folders.",
      "JavaScript streamlines file sorting, creating a neatly organized directory for users.",
      "Users save 3 hours weekly through the tool's efficient file management capabilities.",
    ],
  },
  {
    title: "Edge Ledger Website",
    company_name: "HTML, CSS, JavaScript, Lightbox",
    icon: edgeledger,
    iconBg: "#383E56",
    date: "Jan 2022 - Feb 2022",
    points: [
      "Designed a modern, responsive interface, delivering a smooth and visually appealing user experience for seamless navigation.",
      "Built interactive features using HTML5, CSS3, and JavaScript, optimizing functionality and user engagement.",
      "Integrated Lightbox for enhanced media display, creating an intuitive platform for showcasing visual content effectively."
    ],
  },
];

export { services, technologies, experiences, testimonials, projects, featuredProjects };
