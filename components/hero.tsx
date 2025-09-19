"use client";

import { Button } from "@/components/ui/button";
import { siteConfig, myResume } from "@/constants/site";
import { motion } from "framer-motion";
import { Icon } from "@/components/ui/icon";

export function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      <div className="bg-grid-white/[0.02] absolute inset-0 bg-[size:50px_50px]" />

      {/* Floating Elements */}
      <motion.div
        className="absolute left-20 top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="text-lg text-muted-foreground">Hello, I'm</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 text-4xl font-bold sm:text-6xl lg:text-7xl"
          >
            <span className="gradient-text">{siteConfig.name}</span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 text-xl text-muted-foreground sm:text-2xl lg:text-3xl"
          >
            {siteConfig.title}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-muted-foreground"
          >
            {siteConfig.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              onClick={scrollToContact}
              size="lg"
              className="group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Icon name="mail" className="h-5 w-5" />
                Get In Touch
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Icon name="download" className="h-5 w-5" />
               <a href={myResume} download> Download Resume</a>
              </span>
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
          >
            {/* <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-muted-foreground"
            >
              <span className="text-sm">Scroll to explore</span>
              <ArrowDown className="h-5 w-5" />
            </motion.div> */}
          </motion.div>
        </div>
      </div>

      {/* Tech Stack Preview */}
      {/* <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 transform hidden sm:block"
      >
        <div className="flex items-center gap-4 text-muted-foreground">
          <span className="text-sm">Tech Stack:</span>
          <div className="flex gap-2">
            {["TypeScript", "React", "Node.js", "Next.js"].map(
              (tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="rounded-full bg-secondary px-3 py-1 text-xs font-medium"
                >
                  {tech}
                </motion.span>
              )
            )}
          </div>
        </div>
      </motion.div> */}
    </section>
  );
}
