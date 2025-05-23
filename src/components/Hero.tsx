import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero = ({ scrollToSection }: HeroProps) => {
  // Corrected direct link for Google Drive image
  const profileImageUrl = "https://drive.google.com/uc?export=view&id=1J-3YmOd4WjxLuLcbbT1f0O6r7nNr1uLa";
  
  // Resume download link
  const resumeUrl = "https://drive.google.com/file/d/1vpijOjHMeadZVkS3HSE-_kIcNYhWmeds/view?usp=drivesdk";

  return (
    <div className="container mx-auto px-6 pt-32 pb-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
                  Sajal Rastogi
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 leading-relaxed">
                I'm a full-stack developer and IT student passionate about crafting scalable web solutions and solving complex algorithmic challenges.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("portfolio")}
                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 px-8 py-3 rounded-lg transition-all duration-300"
              >
                Get In Touch
              </Button>
              
              <Button
                variant="outline"
                onClick={() => window.open(resumeUrl, "_blank")}
                className="border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 px-8 py-3 rounded-lg transition-all duration-300"
              >
                Resume
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">9.23</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">CGPA</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">3+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">DSA</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Certified</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 dark:from-blue-600 dark:to-purple-600 p-1 animate-scale-in">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 p-2">
                  <Avatar className="w-full h-full">
                    <AvatarImage 
                      src="https://media.licdn.com/dms/image/v2/D5603AQFIJ0vCS7H69A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730188211429?e=1753315200&v=beta&t=Cd9gJa9SfjlK2NWCkCRtpC9O6FzdYho6IFliGWLSHZY"
                      alt="Sajal Rastogi" 
                      className="w-full h-full object-cover rounded-full" 
                    />
                    <AvatarFallback className="text-5xl">SR</AvatarFallback>
                  </Avatar>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-blue-600 dark:bg-blue-700 text-white p-4 rounded-full shadow-lg animate-fade-in">
                <div className="text-sm font-semibold">Full Stack</div>
                <div className="text-xs">Developer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
