'use client';
import { Inter } from "next/font/google";
import "@incmix/ui/styles/global.css"
import {Button} from "@incmix/ui";
import { useTheme } from "next-themes";
import { useTranslation } from "next-i18next";
import { PageHeader, useLocalizeDocumentAttributes, Dates, config, Plurals, Interpolation, Numbers } from "@incmix/i18n";
import type { SupportedLanguages  } from "@incmix/i18n";
; // Add this line to import the missing 'pageHeader' function

export const supportedLangs: SupportedLanguages = {
  // @ts-ignore
  en: "English",
  ar: "Arabic (العربية)",
};

function App() {
  // config({supportedLangs, defaultLang: "en"});
  const { t } = useTranslation();

  useLocalizeDocumentAttributes();

  return (
    <div className="container mx-auto max-w-[95%] border-x border-dashed border-slate-600 bg-slate-950/70 px-4 md:max-w-[800px]">
      <PageHeader supportedLngs={supportedLangs} />
      <Button>OK</Button>
      <h2 className="pt-20 text-2xl font-semibold">
        {t("translating_text_title")}
      </h2>

      <Interpolation />
      <hr />
      <Plurals />
      <hr />
      <Numbers />
      <hr />
      <Dates />
    </div>
  );
}

export default App;