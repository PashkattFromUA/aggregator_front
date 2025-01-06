import styles from "@/styles/categorycardsblock.module.css";
import { CategoryCard } from "../CategoryCard/CategoryCard";
import CategoryCardImg from "@/public/images/categorycardimg.png";
import CategoryCardBigImg from "@/public/images/categorycardimgbig.png";

export const CategoryCardsBlock = () => {
  return (
    <div className="container">
      <div className={styles.block}>
        <CategoryCard img={CategoryCardBigImg} imgwidth={535} imgheight={252} />
        <div className={styles.blockbot}>
          <CategoryCard img={CategoryCardImg} imgwidth={215} imgheight={238} />
          <CategoryCard img={CategoryCardImg} imgwidth={215} imgheight={238} />
        </div>
      </div>
    </div>
  );
};
