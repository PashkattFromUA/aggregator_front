import styles from "@/styles/smallcardsdblock.module.css";
import { SmallCard } from "../SmallCard/SmallCard";

export const SmallCardsBlock = (props) => {
  const cards = props.cards;

  const divideArrayIntoThree = (arr) => {
    const chunkSize = Math.ceil(arr.length / 3); // Размер одной части
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  };

  const dividedArray = divideArrayIntoThree(cards);

  return (
    <div className="container">
      <div className={styles.textblock}>
        <h4>We are the best crypto browser in web</h4>
        <p>
          Who even made these limits? There are no exchange volume ceilings on
          Godex. You can easily swap as many coins as you desire.
        </p>
      </div>
      <div className={styles.cardsblock}>
        {dividedArray.map((part, index) => (
          <div
            key={index}
            className={
              index % 2 === 0 ? styles.cardsroweven : styles.cardsrowodd
            }
          >
            {part.map((item) => (
              <SmallCard
                key={item.name}
                name={item.name}
                icon={item.icon}
                catslug={item.catslug}
                slug={item.slug}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
