import React from "react";
import { useTranslation } from "next-i18next";
import {LangIcon} from "./LangIcon";
import { SupportedLanguages } from "./config";

export type LocalSwitcherProps = {
  supportedLngs: SupportedLanguages;
};
export  const LocaleSwitcher: React.FC<LocalSwitcherProps> = ({supportedLngs}) => { 
  const { i18n } = useTranslation();

  return (
    <div className="flex items-center">
      <div className="locale-switcher">
        <LangIcon />

        <select
          value={i18n.resolvedLanguage}
          onChange={(e) => i18n.changeLanguage(e.target.value)}
        >
          {Object.entries(supportedLngs).map(([code, name]) => (
            <option value={code} key={code}>
              {name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default LocaleSwitcher;