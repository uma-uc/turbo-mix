'use client';
import { Inter } from "next/font/google";
import "@incmix/ui/styles/global.css"
import {Flex, Button, Text, Theme} from "@incmix/ui";
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
    <Theme>
      <Flex direction="column" gap="2">
        <Text>Hello from Radix Themes :)</Text>
        <Button className="bg-red-300" data-accent-color className="rt-reset rt-BaseButton rt-r-size-2 rt-variant-solid rt-Button" size="2">hhh</Button>
    </Flex>
      <div className="container mx-auto max-w-[95%] border-x border-dashed border-slate-600 bg-slate-950/70 px-4 md:max-w-[800px]">
        <PageHeader supportedLngs={supportedLangs} />
        <Button label="OK"></Button>
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
    </Theme>
  );
}

export default App;