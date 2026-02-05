
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "CodeWithPair",
      description: "Real-time pair coding platform with WebSocket-based collaboration supporting multiple users in a single session. Features live code synchronization and in-room chat.",
      technologies: ["React.js", "Node.js", "WebSocket", "Monaco Editor"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
      github: "https://github.com/Sajalrastogi191/CodeWithPair",
      demo: "#"
    },
    {
      id: 2,
      title: "SplitTheExpenses",
      description: "Full-stack mobile app for managing shared expenses with React Native. Features real-time expense tracking and seamless group management.",
      technologies: ["React Native", "Expo", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      github: "https://github.com/Sajalrastogi191/SplitTheExpenses",
      demo: "#"
    },
    {
      id: 3,
      title: "ExamPaper-Container",
      description: "A comprehensive platform for browsing and uploading university exam papers with secure file uploads and dynamic filtering.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      github: "https://github.com/Sajalrastogi191/exam-repo",
      demo: "#"
    },
    {
      id: 4,
      title: "Chess - Multiplayer Web App",
      description: "Real-time multiplayer chess game featuring custom frontend design and WebSocket integration for live gameplay.",
      technologies: ["JavaScript", "WebSocket", "CSS", "HTML"],
      image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=600&h=400&fit=crop",
      github: "https://github.com/Sajalrastogi191/chess",
      demo: "#"
    },
    {
      id: 5,
      title: "Attendance-Manager",
      description: "React Native app for attendance and timetable management. Streamlines tracking for students and staff.",
      technologies: ["React Native", "Expo", "JavaScript"],
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
      github: "https://github.com/Sajalrastogi191/Attendance-Manager",
      demo: "#"
    },
    {
      id: 6,
      title: "Wireless Image Transmission via NRF Module",
      description: "Securely transmit images using NRF modules for real-time surveillance and monitoring applications.",
      technologies: ["Python", "Arduino Uno", "nRF24"],
      image: "https://static.wixstatic.com/media/99ba69_9538f51eec224f4caa9871889e6e59bf~mv2.jpg/v1/fill/w_560,h_412,al_c,lg_1,q_80,enc_avif,quality_auto/99ba69_9538f51eec224f4caa9871889e6e59bf~mv2.jpg",
      github: "https://github.com/Sajalrastogi191/nRF24_Image_Transmission",
      demo: "#"
    }
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
          My Portfolio
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105"
              style={{
                animationDelay: `${index * 200}ms`
              }}
            >
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-600 dark:hover:bg-blue-700 hover:text-white"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    View on GitHub
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
