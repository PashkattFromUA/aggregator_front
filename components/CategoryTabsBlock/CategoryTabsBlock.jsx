"use client";

import { CategoryTab } from "../CategoryTab/CategoryTab";
import { motion } from "framer-motion";

export const CategoryTabsBlock = (props) => {
  const categories = props.data;
  const cards = props.cards;

  // Варианты анимации для сворачивания/раскрытия по оси Y
  const variants = {
    hidden: { opacity: 0, scaleY: 0 }, // Сжимаем и скрываем элемент
    visible: { opacity: 1, scaleY: 1 }, // Открываем элемент, делаем видимым
  };

  return (
    <div style={{ overflowY: "scroll", height: "1000px" }}>
      {categories.map((category, index) => (
        <motion.div
          key={category.id}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "0px 0px -100px 0px" }} // Элемент начинает анимацию перед выходом из экрана
          transition={{ type: "spring", stiffness: 100 }}
          variants={variants}
        >
          <CategoryTab
            index={index}
            catname={category.name}
            catdescription={category.description}
            cards={cards.filter((card) => card.catslug === category.slug)}
          />
        </motion.div>
      ))}
    </div>
  );
};
