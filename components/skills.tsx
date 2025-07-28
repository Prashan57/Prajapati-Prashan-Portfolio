"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skills } from "@/constants/site";
import { Card } from "@/components/ui/card";

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Skills & Expertise
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            A comprehensive overview of my technical skills and proficiency
            levels across various technologies and tools.
          </p>
        </motion.div>

        <div className="space-y-12">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <h3 className="gradient-text mb-8 text-center text-2xl font-bold">
                {category.category}
              </h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {category.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.2 + skillIndex * 0.1,
                    }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="h-full bg-background/50 p-6 backdrop-blur-sm">
                      <div className="mb-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                            <span className="text-lg font-bold text-primary">
                              {skill.icon.toUpperCase()}
                            </span>
                          </div>
                          <div>
                            <h4 className="font-semibold">{skill.name}</h4>
                            <span className="text-sm text-muted-foreground">
                              {skill.level}% proficiency
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="mb-2 h-2 w-full rounded-full bg-secondary">
                        <motion.div
                          className="h-2 rounded-full bg-gradient-to-r from-primary to-purple-600"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{
                            duration: 1,
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                          }}
                        />
                      </div>

                      {/* Skill Level Indicator */}
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Beginner</span>
                        <span>Intermediate</span>
                        <span>Advanced</span>
                        <span>Expert</span>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20"
        >
          <h3 className="mb-8 text-center text-2xl font-bold">
            Additional Skills
          </h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
            {[
              "Git",
              "Docker",
              "AWS",
              "CI/CD",
              "REST APIs",
              "GraphQL",
              "Jest",
              "Cypress",
              "Storybook",
              "Webpack",
              "Vite",
              "ESLint",
              "Prettier",
              "Husky",
              "TypeScript",
              "JavaScript",
              "HTML",
              "CSS",
              "SASS",
              "Tailwind",
              "Bootstrap",
              "Material-UI",
              "Ant Design",
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="bg-background/50 p-4 text-center backdrop-blur-sm">
                  <span className="text-sm font-medium">{skill}</span>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-20"
        >
          <Card className="border-primary/20 bg-gradient-to-r from-primary/10 to-purple-600/10 p-8">
            <div className="text-center">
              <h3 className="mb-4 text-2xl font-bold">Currently Learning</h3>
              <p className="mb-6 text-muted-foreground">
                I'm always expanding my skill set to stay current with the
                latest technologies and best practices.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { name: "Rust", level: "Beginner" },
                  { name: "WebAssembly", level: "Exploring" },
                  { name: "Machine Learning", level: "Learning" },
                  { name: "Blockchain", level: "Researching" },
                ].map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                    className="rounded-full border border-primary/20 bg-background/50 px-4 py-2"
                  >
                    <span className="text-sm font-medium">{item.name}</span>
                    <span className="ml-2 text-xs text-muted-foreground">
                      ({item.level})
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
