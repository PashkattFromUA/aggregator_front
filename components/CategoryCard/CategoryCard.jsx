import styles from "@/styles/categorycard.module.css";
import Image from "next/image";

export const CategoryCard = (props) => {
  return (
    <div className={styles.block}>
      <div className={styles.leftSide}>
        <h3>Agregator</h3>
        <p>
          WhiteBIT is one of the biggest European crypto exchanges, founded back
          in 2018 in Ukraine. We prioritize safety, transparency, and constant
          development. Hence, over 4 million users choose us and stay with us.
          Blockcha
        </p>
        <button type="button" className="button">
          More info
        </button>
      </div>
      <div className={styles.rightSide}>
        <Image
          src={props.img}
          width={props.imgwidth}
          height={props.imgheight}
          alt="Aggregator image"
        />
      </div>
    </div>
  );
};
