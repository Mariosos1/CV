import React from "react";
import { GiDiploma } from "react-icons/gi";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";

const Certifications: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const certifications = [
    "Cambridge English Level 1 Certificate in ESOL International (First)",
    "Elastic Observability Engineer (On-Demand)",
  ];

  return (
    <div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 pb-2 border-b-2 border-sky-300 dark:border-sky-600">
        {t.certifications}
      </h3>
      <ul className="space-y-2 text-gray-800 dark:text-gray-300 list-none">
        {certifications.map((cert, idx) => (
          <li
            key={idx}
            className="flex items-start gap-2 text-sm leading-relaxed"
          >
            <GiDiploma
              className="text-sky-600 dark:text-sky-400 flex-shrink-0 mt-0.5"
              size={16}
            />
            <span>{cert}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Certifications;
