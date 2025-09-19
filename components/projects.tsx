"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { projects } from "@/constants/site";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@/components/ui/icon";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) =>
          filter === "featured" ? project.featured : true
        );

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "featured", label: "Featured" },
  ];

  return (
    <section id="projects" className="bg-secondary/20 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            A showcase of my recent work, demonstrating my skills in full-stack
            development, UI/UX design, and problem-solving.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 flex justify-center gap-4"
        >
          {filters.map((filterOption) => (
            <Button
              key={filterOption.id}
              variant={filter === filterOption.id ? "default" : "outline"}
              onClick={() => setFilter(filterOption.id)}
              className="transition-all duration-200"
            >
              {filterOption.label}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full overflow-hidden bg-background/50 backdrop-blur-sm">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-purple-600/20">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl font-bold text-white/80">
                        {project.title.charAt(0)}
                      </span>
                    </div>

                    {/* Overlay with links */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => window.open(project.live, "_blank")}
                        className="flex items-center gap-2"
                      >
                        <Icon name="eye" className="h-4 w-4" />
                        Live Demo
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => window.open(project.github, "_blank")}
                        className="flex items-center gap-2"
                      >
                        <Icon name="github" className="h-4 w-4" />
                        Code
                      </Button>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="mb-3 flex items-start justify-between">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      {project.featured && (
                        <span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                          Featured
                        </span>
                      )}
                    </div>

                    <p className="mb-4 leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded bg-secondary px-2 py-1 text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      {project.liveStatus && <Button
                        size="sm"
                        variant="outline"
                        onClick={() => window.open(project.live, "_blank")}
                        className="flex flex-1 items-center gap-2"
                      >
                        <Icon name="external" className="h-4 w-4" />
                        Live Demo
                      </Button>}
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => window.open(project.github, "_blank")}
                        className="flex items-center gap-2"
                      >
                        <Icon name="github" className="h-4 w-4" />
                        Code
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <Card className="border-primary/20 bg-gradient-to-r from-primary/10 to-purple-600/10 p-8 text-center">
            <h3 className="mb-4 text-2xl font-bold">
              Interested in Working Together?
            </h3>
            <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
              I'm always open to discussing new opportunities and exciting
              projects. Let's create something amazing together!
            </p>
            <Button
              size="lg"
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="mx-auto grid grid-cols-3 items-center gap-2"
            >
              <Icon name="external" className="h-5 w-5 justify-self-start" />
              <span className="text-center justify-self-center">Get In Touch</span>
              <Icon name="external" className="h-5 w-5 opacity-0 justify-self-end" />
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
