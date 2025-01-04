"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/search.module.css";
import { useTranslation } from "react-i18next";

const Search = (props) => {
  const searchimagesrc = "/images/search.svg";
  const closesearchimagesrc = "/images/closesearch.svg";
  const [cards, setCards] = useState([]);
  const { t } = useTranslation();

  const [searchResults, setSearchResults] = useState([]);
  const itemsWithSlug = cards.flatMap((category) =>
    category.items.map((item) => ({
      ...item,
      catslug: category.slug,
      catname: category.name,
    }))
  );

  // useEffect(() => {
  //     const getCards = async () => {
  //         const response = await fetch('/api/search');
  //         const data = await response.json();
  //         setCards(data.data);
  //     };
  //     getCards();
  // }, []);

  // useEffect(() => {
  //     const results = itemsWithSlug.filter(element =>
  //         element.name.toLowerCase().includes(props.searchparams.toLowerCase())
  //     );
  //     if (props.searchparams === '') {
  //         setSearchResults([]);
  //     } else {
  //         setSearchResults(results);
  //     }
  // }, [props.searchparams, cards]);

  return (
    <div className={styles.searchblock}>
      <button
        onClick={props.openSearch}
        className={
          props.isSearchOpen ? styles.opensearchopen : styles.opensearchclosed
        }
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.2083 14.2083L20.625 20.625M8.86111 16.3472C4.72665 16.3472 1.375 12.9956 1.375 8.86111C1.375 4.72665 4.72665 1.375 8.86111 1.375C12.9956 1.375 16.3472 4.72665 16.3472 8.86111C16.3472 12.9956 12.9956 16.3472 8.86111 16.3472Z"
            stroke="#1E1E21"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <div
        className={
          props.isSearchOpen ? styles.searchinputopen : styles.searchinputclosed
        }
      >
        <div className={styles.inputimg}>
          <Image
            src={searchimagesrc}
            width={19.25}
            height={19.25}
            alt="search"
          />
          <input
            type="text"
            placeholder={t("searchplaceholder")}
            value={props.searchparams}
            onChange={(e) => props.setQuery(e.target.value)}
          />
        </div>
        <button onClick={props.closeSearch}>
          <Image
            src={closesearchimagesrc}
            width={19.25}
            height={19.25}
            alt="closesearch"
          />
        </button>
      </div>
      <div
        className={props.searchparams === "" ? styles.noresult : styles.result}
      >
        {/* {searchResults.length === 0 && props.searchparams !== '' ? <div className={styles.notfound}>{t('noresult')}</div> :
                    searchResults.map(card => (
                        <Link href={`/${card.catslug}/${card.slug}`} key={card.id} onClick={props.handleLinkClick}>
                            <img src={card.icon_url} alt={card.name} width={44} height={44} />
                            <div className={styles.namecat}>
                                <p>{card.name}</p>
                                <span>{card.catname}</span>
                            </div>
                        </Link>
                    ))
                } */}
      </div>
    </div>
  );
};

export default Search;
