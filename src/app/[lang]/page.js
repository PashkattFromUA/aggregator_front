import LocaleSwitcher from "../components/localeSwitcher";
import { getDictionary } from "../../../getDictionaries";
import { Header } from "../components/header";

export default async function Home(props) {
  const { lang } = await props.params;

  const dictionary = await getDictionary(lang);

  return (
    <div>
      <Header />
      <LocaleSwitcher />
    </div>
  );
}
