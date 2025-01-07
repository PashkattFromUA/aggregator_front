import styles from "@/styles/categorytab.module.css";

export const CategoryTab = (props) => {
  return (
      <div className={props.index % 2 === 0 ? styles.tabeven : styles.tabodd}>
        <div className={styles.categorySide}>
          <h4>{props.catname}</h4>
          <p>{props.catdescription}</p>
        </div>
        <div className={styles.cardsSide}>
          {props.cards.map((card) => (
            <div key={card.id} className={styles.card}>
              <h5>{card.name}</h5>
              <p>{card.shortDescription}</p>
            </div>
          ))}
          {props.cards.map((card) => (
            <div key={card.id} className={styles.card}>
              <h5>{card.name}</h5>
              <p>{card.shortDescription}</p>
            </div>
          ))}
        </div>
      </div>
  );
};
