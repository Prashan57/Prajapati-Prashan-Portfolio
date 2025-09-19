"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { experience } from "@/constants/site";
import { Card } from "@/components/ui/card";

export function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Work Experience
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            My professional journey, showcasing growth, achievements, and the
            diverse projects I've contributed to.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute bottom-0 left-8 top-0 w-0.5 bg-gradient-to-b from-primary via-purple-600 to-secondary md:left-1/2 md:-translate-x-1/2 md:transform" />

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 z-10 h-4 w-4 rounded-full border-4 border-background bg-primary md:left-1/2 md:-translate-x-1/2" />

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <Card className="bg-background/50 p-6 backdrop-blur-sm">
                    <div className="mb-4 flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-primary">
                          {exp.position}
                        </h3>
                        <p className="text-lg font-semibold text-foreground">
                          {exp.company}
                        </p>
                      </div>
                      <span className="rounded-full bg-secondary px-3 py-1 text-sm text-muted-foreground">
                        {exp.duration}
                      </span>
                    </div>

                    <p className="mb-4 leading-relaxed text-muted-foreground">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20"
        >
          <h3 className="mb-12 text-center text-2xl font-bold">Education</h3>
          <div className="grid gap-8 md:grid-cols-1">
            {[
              {
                degree: "Bachelor of Science in Computer Science and Information Technology",
                school: "Tribhuvan University",
                year: "2023",
                description:
                  "Graduated with honors, focusing on software engineering and web + app development.",
              },
              // {
              //   degree: "Full-Stack Web Development",
              //   school: "Coding Bootcamp",
              //   year: "2019",
              //   description:
              //     "Intensive program covering modern web technologies and best practices.",
              // },
            ].map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              >
                <Card className="h-full bg-background/50 p-6 backdrop-blur-sm">
                  <div className="mb-4 flex items-start justify-between">
                    <div>
                      <h4 className="text-lg font-bold">{edu.degree}</h4>
                      <p className="text-muted-foreground">{edu.school}</p>
                    </div>
                    <span className="rounded-full bg-secondary px-3 py-1 text-sm text-muted-foreground">
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {edu.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-20"
        >
          <h3 className="mb-12 text-center text-2xl font-bold">
            Certifications
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                name: "Red Hat Enterprise Linux",
                issuer: "CAS Total Solution",
                year: "2024",
                icon: "💻",
              }, {
                name: "SQL Developer",
                issuer: "CAS Total Solution",
                year: "2024",
                icon: "⛃",
              },
            
            ].map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-background/50 p-6 text-center backdrop-blur-sm">
                  <div className="mb-4 text-4xl">{cert.icon}</div>
                  <h4 className="mb-2 font-semibold">{cert.name}</h4>
                  <p className="mb-2 text-sm text-muted-foreground">
                    {cert.issuer}
                  </p>
                  <span className="rounded bg-secondary px-2 py-1 text-xs text-muted-foreground">
                    {cert.year}
                  </span>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
