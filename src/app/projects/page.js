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
    <div className="container mx-auto px-4 py-20">
      <div className="text-center mb-20">
        <h1 className="text-5xl font-bold mb-6 text-yellow-500">
          My Projects
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Here are some of my recent projects that showcase my skills in full-stack development,
          UI/UX design, and problem-solving abilities.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="group relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl border border-gray-100 dark:border-gray-700"
          >
            {/* Gradient Border Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
            
            {/* Content Container */}
            <div className="relative bg-white dark:bg-gray-800 rounded-3xl">
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Tech Stack Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex flex-wrap gap-3 justify-center">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech.name}
                        className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full text-base font-medium flex items-center gap-2 shadow-lg"
                      >
                        <span>{tech.icon}</span>
                        <span>{tech.name}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                    {project.title}
                  </h2>
                  <span className="text-base text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-4 py-1 rounded-full">
                    {project.date}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg line-clamp-3">
                  {project.description}
                </p>
                
                {/* Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-xl text-center font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transform hover:-translate-y-0.5 text-lg"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                    Live Demo
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-xl text-center font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-gray-500/10 hover:shadow-xl hover:shadow-gray-500/20 transform hover:-translate-y-0.5 text-lg"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
