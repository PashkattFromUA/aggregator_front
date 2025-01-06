"use client";

import React, { useState } from "react";
import Agrcard from "@/components/Agrcard/Agrcard";
import styles from "@/styles/cardlist.module.css";
import PaginationButtons from "../PaginationButtons/PaginationButtons";

const Cardlist = (props) => {
  const cards = props.cardsArray;
  const cardsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(props.resetpage);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);
  const catslug = props.catslug;

  const scrollTo = (section) => {
    document
      .querySelector(section)
      .scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    scrollTo("#aggregator");
  };

  return (
    <div>
      <div className={styles.agrcards}>
        {currentCards.map((card) => (
          <Agrcard card={card} key={card.id} catslug={catslug} />
        ))}
      </div>
      <PaginationButtons
        currentPage={currentPage}
        totalPages={Math.ceil(cards.length / cardsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Cardlist;
