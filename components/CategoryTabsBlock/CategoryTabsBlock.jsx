"use client";

import styles from "@/styles/categorytabsblock.module.css";
import { CategoryTab } from "../CategoryTab/CategoryTab";
import {
  Animator,
  Fade,
  ScrollContainer,
  ScrollPage,
  Move,
  Sticky,
  batch
} from "react-scroll-motion";

export const CategoryTabsBlock = (props) => {
  const FadeUp = batch(Fade(), Move(), Sticky());
  const categories = props.data;
  const cards = props.cards;
  return (
    <div className="container">
      <ScrollContainer>
        {categories.map((category, index) => (
          <ScrollPage page={index} key={category.id}>
            <Animator animation={FadeUp} key={category.id}>
              <CategoryTab
                key={category.id}
                index={index}
                catname={category.name}
                catdescription={category.description}
                cards={cards.filter((card) => card.catslug === category.slug)}
              />
            </Animator>
          </ScrollPage>
        ))}
      </ScrollContainer>
    </div>
  );
};
