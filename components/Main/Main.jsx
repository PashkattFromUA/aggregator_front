'use client'

import React from 'react'
import { useTranslation } from "react-i18next";
import styles from '@/styles/main.module.css';
import scrollTo from '@/utils/scrollTo';

const Main = () => {

    const { t } = useTranslation();

    const handleButtonClick = (blockid) => {
        scrollTo(blockid);
    };

    return (
        <section className={styles.main}>
            <h1>{t('mainscrtexttop')}</h1>
            <p>{t('mainscrtextbot')}</p>
        </section>
    )
}

export default Main