import * as React from "react";
import LocaleSwitcher from "../../../../components/localeSwitcher";
import { getDictionary } from "../../../../getDictionaries";
import { authCredit } from "../../../../credits";

export const metadata = {
  title: "Menu",
};

export default async function MenuPage(props) {
  const fetchData = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", authCredit);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
    };

    try {
      const response = await fetch(
        "http://localhost:8000/api/category/all",
        requestOptions
      );
      const data = await response.json();
      console.log(data);

      const catnames = data.map((item) => item.name);
      console.log(catnames);

      return catnames;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const catnames = await fetchData();

  const { lang } = await props.params;
  const dictionary = await getDictionary(lang);

  return (
    <main>
      {catnames}
      {dictionary.menu}
      <LocaleSwitcher />
    </main>
  );
}
