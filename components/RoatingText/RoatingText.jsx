import * as React from "react";
import Marquee from "react-fast-marquee";
import styles from '@/styles/roatingtext.module.css'

export const RoatingText = () => {
  return (
    <Marquee autoFill={true}>
      <p className={styles.text}>We are the best crypto browser in web</p>
    </Marquee>
  );
};
