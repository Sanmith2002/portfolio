
import React, { useEffect, useRef } from "react";

const skillCategories = [
  {
    name: "Languages",
    skills: [
      { name: "Java", level: 90 },
      { name: "Kotlin", level: 85 },
      { name: "JavaScript", level: 88 },
      { name: "Python", level: 82 },
      { name: "HTML/CSS", level: 90 },
    ],
  },
  {
    name: "Full-Stack Development",
    skills: [
      { name: "MERN Stack", level: 88 },
      { name: "MongoDB", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "React.js", level: 90 },
      { name: "Node.js", level: 85 },
    ],
  },
  {
    name: "Frontend Technologies",
    skills: [
      { name: "Bootstrap", level: 92 },
      { name: "Tailwind CSS", level: 88 },
      { name: "React.js", level: 90 },
    ],
  },
  {
    name: "Databases",
    skills: [
      { name: "MySQL", level: 90 },
      { name: "MongoDB", level: 85 },
    ],
  },
  {
    name: "Tools & Platforms",
    skills: [
      { name: "Git", level: 95 },
      { name: "GitHub", level: 95 },
      { name: "Figma", level: 85 },
    ],
  },
];

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            entry.target.classList.remove("opacity-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        sectionObserver.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const skillObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bars = entry.target.querySelectorAll(".skill-bar-fill");
            bars.forEach((bar, i) => {
              setTimeout(() => {
                bar.classList.add("animate-skill-fill");
              }, i * 100);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    skillsRef.current.forEach((el) => {
      if (el) skillObserver.observe(el);
    });

    return () => {
      skillsRef.current.forEach((el) => {
        if (el) skillObserver.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-secondary/50">
      <div ref={sectionRef} className="section-container">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.name}
              ref={(el) => {
                if (el) skillsRef.current[categoryIndex] = el;
              }}
              className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-6 text-wood">{category.name}</h3>
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-bar-fill"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-card p-8 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-6 text-wood">Professional Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Project Leadership", "Critical Thinking", "Team Collaboration", "Technical Innovation", "Agile & Time Management", "Full-Stack Development", "Ownership & Accountability"].map((skill) => (
              <div key={skill} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mb-4 group-hover:bg-wood/20 transition-colors duration-300">
                  <div className="w-16 h-16 rounded-full bg-wood/20 flex items-center justify-center group-hover:bg-wood/30 transition-colors duration-300">
                    <div className="w-12 h-12 rounded-full bg-wood flex items-center justify-center text-white font-bold">
                      {skill.charAt(0)}
                    </div>
                  </div>
                </div>
                <span className="font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
