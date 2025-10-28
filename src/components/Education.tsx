import React from "react";
import { BsBook } from "react-icons/bs";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";

const Education: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 pb-2 border-b-2 border-sky-300 dark:border-sky-600">
        {t.education}
      </h3>
      <div className="space-y-3">
        <div className="flex items-start gap-2 text-gray-800 dark:text-gray-300 text-sm leading-relaxed">
          <BsBook
            className="text-sky-600 dark:text-sky-400 flex-shrink-0 mt-1"
            size={18}
          />
          <div>
            <div className="font-semibold mb-1 text-gray-900 dark:text-gray-100">
              {t.educationTitle}
            </div>
            <div className="font-semibold mb-1 dark:text-gray-300">
              {t.educationSchool}
            </div>
            <div className="dark:text-gray-300">{t.educationCity}</div>
            <div className="dark:text-gray-300">{t.educationDate}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
