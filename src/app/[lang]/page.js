import styles from "./page.module.css";
import LocaleSwitcher from "../../../components/localeSwitcher";
import { getDictionary } from "../../../getDictionaries";

export default async function Home(props) {
  const { lang } = await props.params;

  const dictionary = await getDictionary(lang);

  return (
    <div className={styles.page}>
      <LocaleSwitcher />
    </div>
  );
}
