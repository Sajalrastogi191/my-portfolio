
const About = () => {
  const skills = [
    "HTML & CSS",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "SQL",
    "C++",
    "C",
    "DSA"
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
          About Me
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Educational Background
            </h3>
            
            <div className="space-y-4">
              <div className="p-6 bg-blue-50 dark:bg-blue-900/30 rounded-lg border-l-4 border-blue-600 dark:border-blue-500">
                <h4 className="font-semibold text-gray-900 dark:text-white">B.Tech Information Technology</h4>
                <p className="text-gray-600 dark:text-gray-300">IIIT Una • 2024-2027</p>
                <p className="text-blue-600 dark:text-blue-400 font-semibold">CGPA: 9.23</p>
              </div>
              
              <div className="p-6 bg-green-50 dark:bg-green-900/30 rounded-lg border-l-4 border-green-600 dark:border-green-500">
                <h4 className="font-semibold text-gray-900 dark:text-white">12th Grade</h4>
                <p className="text-gray-600 dark:text-gray-300">Jainarayan Saraswati Vidya Mandir Inter College, Bareilly</p>
                <p className="text-green-600 dark:text-green-400 font-semibold">90.2% • District Rank 4th</p>
              </div>
            </div>

            <div className="p-6 bg-purple-50 dark:bg-purple-900/30 rounded-lg border-l-4 border-purple-600 dark:border-purple-500">
              <h4 className="font-semibold text-gray-900 dark:text-white">DSA Certification</h4>
              <p className="text-gray-600 dark:text-gray-300">Certified in Data Structures and Algorithms</p>
              <p className="text-purple-600 dark:text-purple-400 font-semibold">Problem-solving expertise validated</p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Technical Skills
            </h3>
            
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill, index) => (
                <div
                  key={skill}
                  className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 text-center font-medium text-gray-700 dark:text-gray-300 hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-md"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Specialization</h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Passionate about building efficient and scalable web applications using the MERN stack. 
                Strong foundation in backend API development and algorithmic problem-solving.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
