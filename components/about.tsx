"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { siteConfig } from "@/constants/site";
import { Card } from "@/components/ui/card";

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="bg-secondary/20 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            About Me
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Passionate about creating exceptional digital experiences and
            solving complex problems through innovative technology solutions.
          </p>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Column - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-background/50 p-8 backdrop-blur-sm">
              <h3 className="gradient-text mb-6 text-2xl font-bold">
                Who I Am
              </h3>
              <div className="space-y-6 text-muted-foreground">
                <p className="leading-relaxed">
                  I'm a senior full-stack developer with over 5 years of
                  experience in building scalable web applications. My passion
                  lies in creating elegant, performant, and user-friendly
                  solutions that solve real-world problems.
                </p>
                <p className="leading-relaxed">
                  I specialize in modern JavaScript frameworks, particularly
                  React and Next.js, with a strong focus on TypeScript for type
                  safety and better developer experience. My expertise extends
                  to backend development with Node.js and various databases.
                </p>
                <p className="leading-relaxed">
                  When I'm not coding, you can find me contributing to
                  open-source projects, writing technical blog posts, or
                  exploring new technologies to stay ahead of the curve.
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Right Column - Stats & Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Contact Info */}
            <Card className="bg-background/50 p-6 backdrop-blur-sm">
              <h4 className="mb-4 text-lg font-semibold">
                Contact Information
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="font-medium text-primary">Email:</span>
                  <span className="text-muted-foreground">
                    {siteConfig.contact.email}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-medium text-primary">Location:</span>
                  <span className="text-muted-foreground">
                    {siteConfig.contact.location}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-medium text-primary">Phone:</span>
                  <span className="text-muted-foreground">
                    {siteConfig.contact.phone}
                  </span>
                </div>
              </div>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-background/50 p-6 text-center backdrop-blur-sm">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="mb-2 text-3xl font-bold text-primary"
                >
                  5+
                </motion.div>
                <div className="text-sm text-muted-foreground">
                  Years Experience
                </div>
              </Card>
              <Card className="bg-background/50 p-6 text-center backdrop-blur-sm">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="mb-2 text-3xl font-bold text-primary"
                >
                  50+
                </motion.div>
                <div className="text-sm text-muted-foreground">
                  Projects Completed
                </div>
              </Card>
              <Card className="bg-background/50 p-6 text-center backdrop-blur-sm">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="mb-2 text-3xl font-bold text-primary"
                >
                  15+
                </motion.div>
                <div className="text-sm text-muted-foreground">
                  Technologies
                </div>
              </Card>
              <Card className="bg-background/50 p-6 text-center backdrop-blur-sm">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="mb-2 text-3xl font-bold text-primary"
                >
                  100%
                </motion.div>
                <div className="text-sm text-muted-foreground">
                  Client Satisfaction
                </div>
              </Card>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20"
        >
          <h3 className="mb-12 text-center text-2xl font-bold">What I Value</h3>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Clean Code",
                description:
                  "Writing maintainable, readable, and well-documented code that others can easily understand and build upon.",
                icon: "💻",
              },
              {
                title: "User Experience",
                description:
                  "Creating intuitive and delightful user experiences that solve real problems and exceed expectations.",
                icon: "🎨",
              },
              {
                title: "Continuous Learning",
                description:
                  "Staying up-to-date with the latest technologies and best practices to deliver cutting-edge solutions.",
                icon: "🚀",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <Card className="h-full bg-background/50 p-6 text-center backdrop-blur-sm">
                  <div className="mb-4 text-4xl">{value.icon}</div>
                  <h4 className="mb-3 text-lg font-semibold">{value.title}</h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
