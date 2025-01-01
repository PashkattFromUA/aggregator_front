import * as React from "react";
import LocaleSwitcher from "../../../../components/localeSwitcher";
import { getDictionary } from "../../../../getDictionaries";
import { authCredit } from "../../../../credits";

export const metadata = {
  title: "Card",
};

export default async function CardPage(props) {
  const BASE_URL = "http://localhost:8000";

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
        "http://localhost:8000/api/card/676d389a92adf99844872809",
        requestOptions
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);

      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const { lang } = await props.params;
  const data = await fetchData(lang);
  const dictionary = await getDictionary(lang);

  return (
    <main>
      <img src={`${BASE_URL}${data.icon}`} />
      {dictionary.menu}
      <LocaleSwitcher />
    </main>
  );
}
