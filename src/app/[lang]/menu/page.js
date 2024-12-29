import * as React from "react";
import LocaleSwitcher from "../../../../components/localeSwitcher";
import { getDictionary } from "../../../../getDictionaries";

export const metadata = {
  title: "Menu",
};

export default async function MenuPage(props) {
  const { lang } = await props.params;
  const dictionary = await getDictionary(lang);
  return (
    <main>
      {dictionary.menu}
      <LocaleSwitcher />
    </main>
  );
}
