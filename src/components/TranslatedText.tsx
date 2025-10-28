import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";

interface TranslatedTextProps {
  textKey: keyof typeof translations.es;
  children?: React.ReactNode;
}

const TranslatedText: React.FC<TranslatedTextProps> = ({
  textKey,
  children,
}) => {
  const { language } = useLanguage();
  const translation = translations[language];

  if (!translation || !translation[textKey]) {
    console.warn(`Translation missing for key: ${textKey}`);
    return <>{children || textKey}</>;
  }

  return <>{translation[textKey]}</>;
};

export default TranslatedText;
