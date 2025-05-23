
const Services = () => {
  const services = [
    {
      title: "Frontend Development",
      description: "Responsive and interactive user interfaces using React.js, HTML5, CSS3, and modern JavaScript frameworks.",
      features: ["React.js Applications", "Responsive Design", "Modern UI/UX", "Performance Optimization"]
    },
    {
      title: "Backend API Development",
      description: "Robust server-side applications and RESTful APIs using Node.js, Express.js, and efficient database integration.",
      features: ["REST API Design", "Database Integration", "Authentication Systems", "Server Optimization"]
    },
    {
      title: "Full-Stack Solutions",
      description: "End-to-end web applications using the MERN stack, from concept to deployment with scalable architecture.",
      features: ["MERN Stack Development", "Database Design", "Deployment Solutions", "Scalable Architecture"]
    },
    {
      title: "Problem Solving & DSA",
      description: "Algorithm optimization and data structure implementation for efficient and high-performance applications.",
      features: ["Algorithm Design", "Code Optimization", "Performance Analysis", "Technical Consulting"]
    }
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
          Services I Offer
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 border border-gray-100 dark:border-gray-700"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-700 dark:text-gray-300">
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-500 rounded-full mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to start your project?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss how I can help bring your ideas to life with modern web technologies and best practices.
            </p>
            <button
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-blue-600 dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
