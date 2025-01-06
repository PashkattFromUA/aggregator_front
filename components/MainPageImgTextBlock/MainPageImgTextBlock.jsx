import Image from "next/image";
import Coins from "@/public/images/coins.png";
import styles from "@/styles/mainpageimgttextblock.module.css";

export const MainPageImgTextBlock = () => {
  return (
    <div className="container">
      <div className={styles.block}>
        <Image src={Coins} width={520} height={550} alt="Crypto coins" />
        <p className={styles.text}>
          WhiteBIT is one of the biggest European crypto exchanges, founded back
          in 2018 in Ukraine. We{" "}
          <span className={styles.noAccentText}>prioritize safety</span>,
          transparency, and constant development. Hence, over 4 million users
          <span className={styles.noAccentText}> choose</span> us and stay with
          us. Blockcha
        </p>
      </div>
    </div>
  );
};
