import Image from 'next/image';

const projects = [
  {
    title: 'SwiftTalk',
    description: 'A full-stack real-time chat application with JWT-based authentication, RESTful APIs, and real-time messaging using Socket.IO and Zustand. Enhanced user experience and reduced message latency by 30%.',
    image: '/project1.png',
    techStack: [
      { name: 'React.js', icon: '⚛️' },
      { name: 'Node.js', icon: '🟢' },
      { name: 'Express.js', icon: '🚂' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'Tailwind', icon: '🎨' },
      { name: 'Socket.IO', icon: '🔌' }
    ],
    link: 'https://github.com/Shubhamt45054/SwiftTalk',
    live: 'https://swifttalk-42li.onrender.com/',
    date: 'Feb 2025 - Mar 2025'
  },
  {
    title: 'ClipBuzz',
    description: 'A scalable video hosting and blogging platform supporting 10+ concurrent users, with RESTful APIs, JWT authentication, and optimized CRUD operations. Reduced backend response time by 30%.',
    image: '/project2.png',
    techStack: [
      { name: 'React.js', icon: '⚛️' },
      { name: 'Node.js', icon: '🟢' },
      { name: 'Express.js', icon: '🚂' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'JavaScript', icon: '📜' },
      { name: 'Tailwind', icon: '🎨' }
    ],
    link: 'https://github.com/Shubhamt45054/ClipBuzz-Backend',
    live: 'https://clip-buzz-frontend-nkvx.vercel.app/',
    date: 'Sept 2024 - Nov 2024'
  },
  {
    title: 'Market Mate',
    description: 'A responsive e-commerce platform with real-time product cart management and order summary updates. Improved frontend performance by 20%.',
    image: '/project3.png',
    techStack: [
      { name: 'React.js', icon: '⚛️' },
      { name: 'Tailwind', icon: '🎨' },
      { name: 'HTML', icon: '🌐' },
      { name: 'CSS', icon: '🎨' }
    ],
    link: 'https://github.com/Shubhamt45054/Market_Mate',
    live: 'https://market-mate.pages.dev/',
    date: 'June 2024 - July 2024'
  },
  {
    title: 'CryptKey',
    description: "A secure password management system with encryption and key generation capabilities.",
    image: '/project4.png',
    techStack: [
      { name: 'HTML', icon: '🌐' },
      { name: 'CSS', icon: '🎨' },
      { name: 'JavaScript', icon: '📜' }
    ],
    link: 'https://github.com/Shubhamt45054/CryptKey',
    live: 'https://cryptkey.vercel.app/',
    date: 'March 2024 - April 2024'
  },
  {
    title: 'My Portfolio',
    description: 'A responsive portfolio website showcasing my projects and skills. Features detailed project information, achievements, and technologies used. Includes responsive layout for optimal viewing across all devices.',
    image: '/project5.png',
    techStack: [
      { name: 'HTML', icon: '🌐' },
      { name: 'CSS', icon: '🎨' }
    ],
    link: 'https://github.com/Shubhamt45054/My-Portfolio',
    live: 'https://shubhamt45054.github.io/My-Portfolio/',
    date: 'Jan 2024'
  },
  {
    title: 'Discord Clone',
    description: 'A responsive Discord landing page clone built with HTML, featuring the main hero section, features showcase, and download section. Implemented smooth animations and interactive UI elements for an engaging user experience.',
    image: '/project6.png',
    techStack: [
      { name: 'HTML', icon: '🌐' }
    ],
    link: 'https://github.com/Shubhamt45054/Discord_Clone',
    live: 'https://shubhamt45054.github.io/Discord_Clone/',
    date: 'Dec 2024 - Jan 2025'
  }
];

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 text-primary">My Projects</h1>
        <p className="text-secondary max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills in full-stack development,
          UI/UX design, and problem-solving abilities.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="group bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-200 dark:border-gray-700"
          >
            <div className="relative h-56 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-2xl font-bold text-primary">{project.title}</h2>
                <span className="text-sm text-secondary">{project.date}</span>
              </div>
              
              <p className="text-secondary mb-4 line-clamp-3">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech) => (
                  <span
                    key={tech.name}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1"
                  >
                    <span>{tech.icon}</span>
                    <span>{tech.name}</span>
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-center font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-blue-500/20"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  Live Demo
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-100 text-blue-700 px-4 py-2 rounded-lg text-center font-medium hover:bg-blue-200 transition-colors flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-blue-500/20"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
