import React from "react";
import { FiAward } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";

const Skills: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const skills = [t.skill1, t.skill2, t.skill3, t.skill4, t.skill5, t.skill6];

  return (
    <div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 pb-2 border-b-2 border-sky-300 dark:border-sky-600">
        {t.skills}
      </h3>
      <ul className="space-y-1.5 text-gray-800 dark:text-gray-300 list-none">
        {skills.map((skill, idx) => (
          <li
            key={idx}
            className="flex items-start gap-2 text-sm leading-relaxed"
          >
            <FiAward
              className="text-sky-600 dark:text-sky-400 shrink-0 mt-1"
              size={14}
            />
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
