import { Auth } from "@/credits";
import axios from "axios";
import dynamic from "next/dynamic";
import Categoryslider from "@/components/CategorySlider/Categoryslider";
import { RoatingText } from "@/components/RoatingText/RoatingText";
import { MainPageImgTextBlock } from "@/components/MainPageImgTextBlock/MainPageImgTextBlock";
const Main = dynamic(() => import("@/components/MainScreen/MainScreen"));
const FAQ = dynamic(() => import("@/components/FAQ/FAQ"));
const Improveus = dynamic(() => import("@/components/ImproveUs/Improveus"), {
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
      <RoatingText />
      <MainPageImgTextBlock />
    </main>
  );
}
