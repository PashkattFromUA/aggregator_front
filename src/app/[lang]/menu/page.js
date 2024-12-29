import * as React from "react";
import LocaleSwitcher from "../../../../components/localeSwitcher";
import { getDictionary } from "../../../../getDictionaries";
import { authCredit } from "../../../../credits";

export const metadata = {
  title: "Menu",
};

export default async function MenuPage(props) {

  const fetchData = async (lang) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", authCredit); 
    myHeaders.append("Accept-Language", lang);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
    };

    try {
      const response = await fetch(
        "http://localhost:8000/api/category/all",
        requestOptions
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);

      const catnames = data.map((item) => item.name);
      console.log(catnames);

      return catnames;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const { lang } = await props.params;
  const catnames = await fetchData(lang);
  const dictionary = await getDictionary(lang);

  return (
    <main>
      {catnames}
      {dictionary.menu}
      <LocaleSwitcher />
    </main>
  );
}
