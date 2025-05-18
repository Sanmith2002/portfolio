
import React, { useEffect, useRef } from "react";
import { GitHub, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16 md:pt-0"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-wood/10 animate-spin-slow blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-wood/5 animate-spin-slow blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 md:gap-16 items-center z-10">
        <div ref={containerRef} className="space-y-6">
          <p className="text-xl text-wood animate-fade-in-up animate-delay-100 animate-fill-both animate-once">
            Hello, I'm
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold animate-fade-in-up animate-delay-200 animate-fill-both animate-once">
            Dinura Sanmith
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground animate-fade-in-up animate-delay-300 animate-fill-both animate-once">
            Data Science & Full-Stack Developer
          </h2>
          <p className="text-lg text-balance animate-fade-in-up animate-delay-400 animate-fill-both animate-once">
            Motivated IT undergraduate with expertise in data science, full-stack development, 
            and IT coordination. Passionate about creating innovative solutions.
          </p>
          <div className="flex space-x-4 pt-2 animate-fade-in-up animate-delay-500 animate-fill-both animate-once">
            <a href="mailto:dinurasanmith2002@outlook.com" aria-label="Email">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full hover:bg-wood hover:text-white duration-300"
              >
                <Mail size={20} />
              </Button>
            </a>
            <a href="https://github.com/GitHub" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full hover:bg-wood hover:text-white duration-300"
              >
                <GitHub size={20} />
              </Button>
            </a>
            <a href="https://linkedin.com/in/LinkedIn" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full hover:bg-wood hover:text-white duration-300"
              >
                <Linkedin size={20} />
              </Button>
            </a>
          </div>
          <div className="pt-4 animate-fade-in-up animate-delay-500 animate-fill-both animate-once">
            <Button
              className="bg-wood hover:bg-wood-dark text-white rounded-full px-8 py-6 mr-4"
              asChild
            >
              <a href="#contact">Contact Me</a>
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-8 py-6 border-wood text-wood hover:bg-wood/10"
              asChild
            >
              <a href="#projects">My Projects</a>
            </Button>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="relative">
            <div className="absolute inset-0 w-full h-full bg-wood rounded-full blur-3xl opacity-20"></div>
            <div className="relative aspect-square overflow-hidden rounded-2xl border-4 border-wood shadow-xl animate-float">
              <img
                src="/lovable-uploads/70e166e7-26f1-4427-b8d8-ccf1d63c780d.png"
                alt="Dinura Sanmith"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm mb-2">Scroll Down</span>
        <div className="w-6 h-9 border-2 border-foreground rounded-full flex justify-center">
          <div className="w-1 h-2 bg-foreground rounded-full mt-2 animate-float"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
