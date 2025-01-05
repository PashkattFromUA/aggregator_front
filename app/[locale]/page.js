import { Auth } from "@/credits";
import axios from "axios";
import dynamic from "next/dynamic";
import Categoryslider from "@/components/Categoryslider/Categoryslider";
const Main = dynamic(() => import("@/components/Main/Main"));
const FAQ = dynamic(() => import("@/components/FAQ/FAQ"));
const Improveus = dynamic(() => import("@/components/Improveus/Improveus"), {
  ssr: false,
});

async function getLabels(lang) {
  const headers = {
    "accept-language": lang,
    Authorization: Auth,
  };

  try {
    const res = await axios.get("http://localhost:8000/api/category/all", {
      headers,
    });
    return res.data;
  } catch (error) {
    throw new Error(`Failed to fetch data: ${error.message}`);
  }
}

async function getCards(lang) {
  const headers = {
    "accept-language": lang,
    Authorization: Auth,
  };

  try {
    const res = await axios.get("http://localhost:8000/api/cards", { headers });
    return res.data;
  } catch (error) {
    throw new Error(`Failed to fetch data: ${error.message}`);
  }
}

export default async function Home({ params: { locale } }) {
  const labels = await getLabels(locale);
  const cards = await getCards(locale);

  return (
    <main>
      <Main />
      <Categoryslider data={labels} cards={cards} />
      <Improveus />
      <FAQ />
    </main>
  );
}
