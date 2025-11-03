import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";

const Contact: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 pb-2 border-b-2 border-sky-300 dark:border-sky-600">
        {t.contact}
      </h3>
      <div className="text-gray-800 dark:text-gray-300 text-sm leading-relaxed space-y-3">
        <div className="flex items-center gap-2">
          <HiLocationMarker
            className="text-sky-600 dark:text-sky-400 shrink-0"
            size={16}
          />
          <div>28521, Rivas-Vaciamadrid (Madrid)</div>
        </div>
        <div className="flex items-center gap-2">
          <BsTelephone
            className="text-sky-600 dark:text-sky-400 shrink-0"
            size={16}
          />
          <div>+34 683127718</div>
        </div>
        <div className="flex items-center gap-2">
          <HiMail
            className="text-sky-600 dark:text-sky-400 shrink-0"
            size={16}
          />
          <div className="break-all">mariodepablo2005@gmail.com</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
