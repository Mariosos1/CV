import React from "react";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
      <div>
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 tracking-tight mb-3"
        >
          Mario de Pablo Damián
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-gray-600 dark:text-gray-400 font-semibold"
        >
          Fullstack Developer & DevOps Engineer
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-3 mt-4"
        >
          {["React", "Python", "Docker", "DevOps"].map((tech, idx) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.3 + idx * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="px-4 py-2 bg-sky-100 dark:bg-sky-900 text-sky-800 dark:text-sky-200 rounded-full text-sm font-medium transition-colors"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Profile Photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="w-40 h-40 rounded-full border-4 border-sky-400 dark:border-sky-500 overflow-hidden bg-white dark:bg-gray-700 p-1 shadow-xl">
          <img
            src="https://assets.livecareer.es/photos/p/es/1c/1cc6ea96-dbe2-4ce5-b902-dc445fb09227.jpeg"
            alt="Mario de Pablo Damián"
            className="w-full h-full object-cover rounded-full"
            loading="lazy"
            decoding="async"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
