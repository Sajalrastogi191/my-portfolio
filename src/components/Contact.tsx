import { Mail, Phone, Linkedin, Github } from "lucide-react"; // Added Linkedin and Github icons
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "8791075317",
      href: "tel:8791075317"
    },
    {
      icon: Mail,
      label: "Email",
      value: "rastogisajal1915@gmail.com",
      href: "mailto:rastogisajal1915@gmail.com"
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sajal-rastogi-a5617b293",
      icon: Linkedin,
      bgColor: "bg-blue-700",
      hoverBgColor: "hover:bg-blue-600"
    },
    {
      name: "GitHub",
      url: "https://github.com/Sajalrastogi191",
      icon: Github,
      bgColor: "bg-gray-800",
      hoverBgColor: "hover:bg-gray-700"
    }
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-8">
          Let's Work Together
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, interesting projects, or potential collaborations.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {contactInfo.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              className="bg-white/10 backdrop-blur-md p-6 rounded-xl hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105 text-left group"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-3 rounded-lg group-hover:bg-blue-500 transition-colors duration-300">
                  <contact.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {contact.label}
                  </h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {contact.value}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Social links styled like contact cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-2xl mx-auto">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-white/10 backdrop-blur-md p-6 rounded-xl transition-all duration-300 hover:transform hover:scale-105 text-left group ${link.hoverBgColor}`}
            >
              <div className="flex items-center space-x-4">
                <div className={`${link.bgColor} p-3 rounded-lg group-hover:opacity-90 transition duration-300`}>
                  <link.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {link.name}
                  </h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300 underline">
                    Visit my {link.name}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-gray-400 text-center">
            © 2025 Sajal Rastogi. Building the future, one line of code at a time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
