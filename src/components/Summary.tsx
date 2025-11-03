import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";

const Summary: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4 pb-3 border-b-2 border-sky-300 dark:border-sky-600">
        {t.about}
      </h2>
      <p 
        className="text-lg leading-relaxed text-gray-700 dark:text-gray-300"
        dangerouslySetInnerHTML={{ __html: t.summary }}
      />
    </div>
  );
};

export default Summary;
