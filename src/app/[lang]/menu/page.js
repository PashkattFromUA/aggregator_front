import * as React from "react";
import LocaleSwitcher from "../../../../components/localeSwitcher";
import { getDictionary } from "../../../../getDictionaries";

export const metadata = {
  title: "Menu",
};

export default async function MenuPage(props) {
  const fetchData = async () => {
    const myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Basic YWRtaW5AYWdncmVnYXRvci5pbzoxMjM0NTY3OA=="
    );

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("http://localhost:8000/api/category/all", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };

  fetchData();

  const { lang } = await props.params;
  const dictionary = await getDictionary(lang);
  return (
    <main>
      {dictionary.menu}
      <LocaleSwitcher />
    </main>
  );
}
