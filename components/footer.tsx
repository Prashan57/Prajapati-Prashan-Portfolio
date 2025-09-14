"use client";

import { navigation, siteConfig, socialLinks } from "@/constants/site";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-border bg-secondary/20">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <h3 className="gradient-text mb-4 text-2xl font-bold">
              {siteConfig.name}
            </h3>
            <p className="mb-6 max-w-md text-muted-foreground">
              {siteConfig.description}
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background/50 backdrop-blur-sm transition-colors duration-200 hover:border-primary"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name === "GitHub" && <Github className="h-5 w-5" />}
                  {link.name === "LinkedIn" && <Linkedin className="h-5 w-5" />}
                  {link.name === "Twitter" && <Twitter className="h-5 w-5" />}
                  {link.name === "Email" && <Mail className="h-5 w-5" />}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="mb-4 font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {navigation.slice(1, 4).map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-muted-foreground transition-colors duration-200 hover:text-foreground"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="mb-4 font-semibold">Contact</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>{siteConfig.contact.email}</p>
              <p>{siteConfig.contact.phone}</p>
              <p>{siteConfig.contact.location}</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 border-t border-border pt-8"
        >
          <div className="mx-auto flex w-full flex-col items-center justify-center gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>

            {/* <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>using Next.js & TypeScript</span>
            </div> */}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
