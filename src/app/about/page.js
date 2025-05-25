export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700 backdrop-blur-sm">
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">About Me</h1>
        
        <div className="space-y-6">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            About Me 👋
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            I&apos;m a passionate Full Stack Developer 🚀 and Competitive Programmer 💻 with a strong foundation in web technologies and problem-solving. My journey in software development has equipped me with expertise in building modern web applications and solving complex algorithmic challenges.
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            With a keen eye for detail and a commitment to writing clean, efficient code ✨, I strive to create scalable solutions that deliver exceptional user experiences. I am constantly learning and exploring new technologies to stay at the forefront of web development 🌟.
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            When I&apos;m not coding, you can find me participating in competitive programming contests 🏆, contributing to open-source projects 🌐, or exploring new tech trends 📱. I believe in the power of technology to solve real-world problems and am always excited to take on new challenges 🎯.
          </p>
        </div>

        <div className="space-y-8">
          <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-80"></div>

          <div>
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Education</h2>
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Harcourt Butler Technical University</h3>
              <p className="text-gray-600 dark:text-gray-400">Bachelor of Technology in Computer Science and Engineering • Oct 2022 - June 2026</p>
              <p className="text-gray-600 dark:text-gray-400">CGPA: 8.4</p>
            </div>
          </div>

          <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-80"></div>

          <div>
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Position of Responsibility</h2>
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Web Development Lead</h3>
              <p className="text-gray-600 dark:text-gray-400">Literary Sub Council, HBTU • Jan 2025 • Kanpur, India</p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600 dark:text-gray-400">
                <li>Optimized website structure by implementing reusable objects, improving code efficiency by 40%.</li>
                <li>Applied Agile methodology and version control (GitHub) for smooth collaboration and deployment.</li>
                <li>Enhanced user engagement by 25% through interactive UI components, including a dynamic carousel feature.</li>
              </ul>
            </div>
          </div>

          <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-80"></div>

          <div>
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Technical Skills</h2>
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li><span className="font-semibold text-gray-800 dark:text-gray-200">Languages:</span> C 🟢, C++ 🔷, HTML5 🌐, CSS3 🎨, JavaScript 📜</li>
                <li><span className="font-semibold text-gray-800 dark:text-gray-200">Frontend:</span> React.js ⚛️, Tailwind CSS 🎨, Zustand 🐻</li>
                <li><span className="font-semibold text-gray-800 dark:text-gray-200">Backend:</span> Node.js 🟢, Express.js 🚂, Socket.IO 🔌</li>
                <li><span className="font-semibold text-gray-800 dark:text-gray-200">Database:</span> MongoDB 🍃</li>
                <li><span className="font-semibold text-gray-800 dark:text-gray-200">Tools:</span> Git 🐙, GitHub 📦, Postman 📬, VS Code 💻</li>
                <li><span className="font-semibold text-gray-800 dark:text-gray-200">Core Courses:</span> Data Structures and Algorithms 📊, Object-Oriented Programming 🎯, Operating Systems 💾, Database Management Systems 🗄️</li>
              </ul>
            </div>
          </div>

          <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-80"></div>

          <div>
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Achievements</h2>
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li>�� Qualified for ICPC&apos;24 Regionals out of 2835 participating teams.</li>
                <li>⭐ Ranked in the Top 2.25% globally on LeetCode (Max Rating: 2047).</li>
                <li>🌟 Achieved Expert rating on Codeforces (Max Rating: 1659).</li>
                <li>🎯 Secured Global Rank 5 in CodeChef (Max Rating: 1988).</li>
                <li>💪 Cleared over 2000 problems across multiple coding platforms.</li>
                <li>🏅 Won various online and on-site programming competitions.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
