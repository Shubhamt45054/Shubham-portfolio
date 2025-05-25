import Image from 'next/image';

export default function Home() {
  const techStack = [
    { name: 'React.js', icon: '⚛️', gradient: 'from-blue-500 to-cyan-400' },
    { name: 'Next.js', icon: '▲', gradient: 'from-purple-500 to-pink-500' },
    { name: 'JavaScript', icon: '📜', gradient: 'from-yellow-400 to-orange-500' },
    { name: 'Tailwind CSS', icon: '🎨', gradient: 'from-cyan-500 to-blue-500' },
    { name: 'Node.js', icon: '🟢', gradient: 'from-green-500 to-emerald-400' },
    { name: 'Express.js', icon: '🚂', gradient: 'from-gray-600 to-gray-400' },
    { name: 'MongoDB', icon: '🍃', gradient: 'from-green-600 to-green-400' },
    { name: 'Zustand', icon: '🦦', gradient: 'from-purple-600 to-pink-400' },
    { name: 'Socket.IO', icon: '🔌', gradient: 'from-blue-600 to-indigo-500' },
    { name: 'HTML5', icon: '🌐', gradient: 'from-orange-500 to-red-500' },
    { name: 'CSS3', icon: '🎨', gradient: 'from-blue-500 to-indigo-500' },
    { name: 'C', icon: '💻', gradient: 'from-blue-600 to-blue-400' },
    { name: 'C++', icon: '💻', gradient: 'from-blue-700 to-blue-500' },
    { name: 'Git', icon: '🔧', gradient: 'from-orange-600 to-red-500' },
    { name: 'GitHub', icon: '🐙', gradient: 'from-gray-700 to-gray-500' },
    { name: 'Postman', icon: '📮', gradient: 'from-orange-500 to-orange-300' },
    { name: 'VS Code', icon: '📝', gradient: 'from-blue-500 to-blue-300' },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center justify-center gap-16">
        <div className="relative group">
          {/* Outer glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition duration-300"></div>
          
          {/* Image container */}
          <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-2xl border-4 border-blue-500/50 dark:border-purple-500/50 transform transition duration-300 group-hover:scale-105">
            <Image
              src="/shubham_tyagi.png"
              alt="Profile Picture"
              fill
              className="object-cover"
              priority
            />
            
            {/* Inner gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-purple-500 rounded-full animate-pulse delay-150"></div>
        </div>

        <div className="text-center md:text-left max-w-2xl bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700 backdrop-blur-sm">
          <h1 className="text-4xl font-bold mb-4">
            Hi, I&apos;m <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">Shubham Tyagi</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Full Stack Developer & Competitive Programmer<br/>
            <span className="text-base text-gray-500 dark:text-gray-400">Passionate about building modern web applications and solving complex algorithmic challenges. Experienced in developing scalable solutions using cutting-edge technologies.</span>
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-6">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className={`bg-gradient-to-r ${tech.gradient} text-white px-4 py-2 rounded-full flex items-center gap-2 shadow hover:shadow-lg transition-all duration-300 hover:scale-105`}
              >
                <span>{tech.icon}</span>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full my-8 opacity-80"></div>
    </div>
  );
}
