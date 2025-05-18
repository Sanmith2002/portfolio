
import React from "react";
import { GitHub, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-display font-bold">
              <span className="text-wood">Dinura</span> Sanmith
            </a>
            <p className="text-muted-foreground mt-2 text-balance">
              Data Science & Full-Stack Developer
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center space-y-6 md:space-y-0 md:space-x-16">
            <div>
              <h3 className="font-semibold mb-3">Quick Links</h3>
              <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                <a href="#home" className="text-muted-foreground hover:text-wood transition-colors">Home</a>
                <a href="#about" className="text-muted-foreground hover:text-wood transition-colors">About</a>
                <a href="#skills" className="text-muted-foreground hover:text-wood transition-colors">Skills</a>
                <a href="#experience" className="text-muted-foreground hover:text-wood transition-colors">Experience</a>
                <a href="#education" className="text-muted-foreground hover:text-wood transition-colors">Education</a>
                <a href="#projects" className="text-muted-foreground hover:text-wood transition-colors">Projects</a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Connect</h3>
              <div className="flex space-x-4">
                <a 
                  href="mailto:dinurasanmith2002@outlook.com" 
                  className="w-10 h-10 rounded-full bg-wood/10 flex items-center justify-center text-wood hover:bg-wood hover:text-white transition-colors"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
                <a 
                  href="https://github.com/GitHub" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-wood/10 flex items-center justify-center text-wood hover:bg-wood hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <GitHub size={18} />
                </a>
                <a 
                  href="https://linkedin.com/in/LinkedIn" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-wood/10 flex items-center justify-center text-wood hover:bg-wood hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {currentYear} Dinura Sanmith. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
