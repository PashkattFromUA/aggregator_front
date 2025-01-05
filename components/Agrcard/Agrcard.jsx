"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import styles from "@/styles/agrcard.module.css";
import Image from "next/image";
import GlobeIcon from "@/assets/globe.svg";

const Agrcard = (props) => {
  const catslug = props.catslug;
  const { t } = useTranslation();
  const imgBaseUrl = "http://localhost:8000";

  return (
    <div className={styles.card}>
      <div className={styles.cardtop}>
        <div className={styles.icontext}>
          <Image
            src={`${imgBaseUrl}${props.card.icon}`}
            width={56}
            loading="lazy"
            height={56}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8Ww8AAl8BblCWeEoAAAAASUVORK5CYII="
            alt="icon"
          />
          <div className={styles.cardnameplace}>
            <p className={styles.cardname}>{props.card.name}</p>
            <p className={styles.cardplace}>{props.card.place}</p>
          </div>
        </div>
      </div>
      <p className={styles.carddescriprion}>{props.card.shortDescription}</p>
      <div className={styles.cardbottom}>
        <Link href={`/${catslug}/${props.card.slug}`}>
          <button type="button" className={styles.moreinfobutt}>
            {t("moreinfo")}
          </button>
        </Link>
        <div className={styles.svgbot}>
          <a
            href={props.card.rating_url}
            className={styles.cardrating}
            target="_blank"
            rel="noreferrer"
          >
            <Image src="/images/Star.svg" width={20} height={20} alt="Star" />
          </a>
          <a href={props.card.link} target="_blank" rel="noreferrer">
            <GlobeIcon width={20} height={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Agrcard;
