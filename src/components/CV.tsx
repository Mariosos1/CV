import React from "react";
import { motion } from "framer-motion";
import { Vortex } from "./ui/vortex";
import Header from "./Header";
import Contact from "./Contact";
import Summary from "./Summary";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Certifications from "./Certifications";
import Languages from "./Languages";
import LanguageSelector from "./LanguageSelector";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../context/ThemeContext";

const CV: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen relative">
      {/* Vortex as Full Background */}
      <Vortex
        backgroundColor={theme === "dark" ? "#000000" : "#ffffff"}
        particleCount={700}
        rangeY={100}
        baseHue={theme === "dark" ? 210 : 200}
        baseSpeed={0.0}
        rangeSpeed={1.5}
        baseRadius={1}
        rangeRadius={2}
        className="w-full h-full"
        containerClassName="fixed inset-0 -z-10"
      />

      {/* All content on top */}
      <div className="relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-950 shadow-md border-b-4 border-sky-400 dark:border-sky-500 relative transition-colors duration-300"
        >
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex justify-end gap-3 mb-6">
              <ThemeToggle />
              <LanguageSelector />
            </div>
            <Header />
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar - Left Column */}
            <div className="lg:col-span-1 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-950 rounded-lg shadow-lg p-6 border-l-4 border-sky-400 dark:border-sky-500 hover:shadow-xl transition-all duration-300"
              >
                <Contact />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white dark:bg-gray-950 rounded-lg shadow-lg p-6 border-l-4 border-sky-400 dark:border-sky-500 hover:shadow-xl transition-all duration-300"
              >
                <Education />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white dark:bg-gray-950 rounded-lg shadow-lg p-6 border-l-4 border-sky-400 dark:border-sky-500 hover:shadow-xl transition-all duration-300"
              >
                <Skills />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white dark:bg-gray-950 rounded-lg shadow-lg p-6 border-l-4 border-sky-400 dark:border-sky-500 hover:shadow-xl transition-all duration-300"
              >
                <Certifications />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white dark:bg-gray-950 rounded-lg shadow-lg p-6 border-l-4 border-sky-400 dark:border-sky-500 hover:shadow-xl transition-all duration-300"
              >
                <Languages />
              </motion.div>
            </div>

            {/* Main Column - Right Side */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-950 rounded-lg shadow-lg p-8 border-l-4 border-sky-400 dark:border-sky-500 hover:shadow-xl transition-all duration-300"
              >
                <Summary />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white dark:bg-gray-950 rounded-lg shadow-lg p-8 border-l-4 border-sky-400 dark:border-sky-500 hover:shadow-xl transition-all duration-300"
              >
                <Experience />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gray-900 dark:bg-black text-white mt-16 py-8 transition-colors duration-300"
        >
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-gray-400 dark:text-gray-500">
              © 2025 Mario de Pablo Damián - Fullstack Developer
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CV;
