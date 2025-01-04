"use client";

import React, { useRef, useState } from "react";
import Cardlist from "../Agregator/Cardlist";
import styles from "@/styles/categoryslider.module.css";
import { useTranslation } from "react-i18next";
import Search from "../Search/Search";

const CarouselInScrollContainer = (props) => {
  const containerRef = useRef(null);
  const buttonLabels = props.data;
  const buttonWidth = 150;
  const handleScroll = (scrollAmount) => {
    const currentScroll = containerRef.current.scrollLeft;
    containerRef.current.scrollLeft = currentScroll + scrollAmount;
  };
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);
  const sortedCategories = buttonLabels.slice().sort((a, b) => a.id - b.id);

  const handleButtonClick = (buttonId) => {
    setSelectedCategoryId(buttonId);
  };

  const [searchparams, setQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const openSearch = () => {
    setIsSearchOpen(true);
    setQuery("");
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
    setQuery("");
  };

  const handleLinkClick = () => {
    setQuery("");
    setIsSearchOpen(false);
  };

  return (
    <div className={styles.paginationblock}>
      <Search
        setQuery={setQuery}
        searchparams={searchparams}
        isSearchOpen={isSearchOpen}
        openSearch={openSearch}
        closeSearch={closeSearch}
        handleLinkClick={handleLinkClick}
      />
      <div
        className={
          isSearchOpen
            ? styles.agrsliderblocknonvisible
            : styles.agrsliderblockvisible
        }
      >
        <div className={styles.scrollingcontainer} ref={containerRef}>
          <button type="button" index="zero" className={styles.nonactivebutton}>
            All services
          </button>
          <button type="button" index="zero" className={styles.nonactivebutton}>
            All services
          </button>
          <button type="button" index="zero" className={styles.nonactivebutton}>
            All services
          </button>
          {sortedCategories.map((buttonlabel) => (
            <button
              type="button"
              key={buttonlabel.id}
              onClick={() => handleButtonClick(buttonlabel.id)}
              className={
                buttonlabel.id === selectedCategoryId
                  ? styles.activebutton
                  : styles.nonactivebutton
              }
            >
              {buttonlabel.name}
            </button>
          ))}
        </div>
      </div>
      <div className={styles.agrslider}>
        <button
          type="button"
          onClick={() => handleScroll(-buttonWidth)}
          className={styles.scrollbutton}
        >
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.0667 12.107L7.06653 12.1068L2.28922 7.00563L7.0667 1.8943C7.3111 1.63282 7.3111 1.21481 7.0667 0.953333C6.8133 0.682222 6.39443 0.682222 6.14103 0.953333L0.933301 6.52498C0.810389 6.65648 0.75 6.82187 0.75 6.99546C0.75 7.1556 0.808409 7.33233 0.933301 7.46595L6.13874 13.0351C6.39197 13.3195 6.81297 13.3194 7.0667 13.0479C7.3111 12.7864 7.3111 12.3684 7.0667 12.107Z"
              fill="black"
              stroke="black"
              stroke-width="0.5"
            />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => handleScroll(buttonWidth)}
          className={styles.scrollbutton}
        >
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.933301 1.89304L0.933468 1.89322L5.71078 6.99437L0.933301 12.1057C0.6889 12.3672 0.6889 12.7852 0.933301 13.0467C1.1867 13.3178 1.60557 13.3178 1.85897 13.0467L7.0667 7.47502C7.18961 7.34352 7.25 7.17813 7.25 7.00454C7.25 6.8444 7.19159 6.66767 7.0667 6.53405L1.86126 0.964856C1.60803 0.680488 1.18703 0.680616 0.933301 0.95207C0.6889 1.21355 0.6889 1.63156 0.933301 1.89304Z"
              fill="black"
              stroke="black"
              stroke-width="0.5"
            />
          </svg>
        </button>
      </div>

      {/* {sortedCategories.length !== 0 ? <Cardlist cardsArray={sortedCategories[selectedCategoryId - 1].items} catslug={sortedCategories[selectedCategoryId - 1].slug} /> : <></>} */}
    </div>
  );
};

export default CarouselInScrollContainer;
