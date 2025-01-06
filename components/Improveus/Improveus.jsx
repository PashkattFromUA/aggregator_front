"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";
const Improveusmodal = dynamic(
  () => import("@/components/ImproveUs/Improveusmodal/Improveusmodal"),
  { ssr: false }
);
import { useTranslation } from "react-i18next";
import styles from "@/styles/improveus.module.css";
import improveusimg from "@/public/images/improveus.png";
import Image from "next/image";
const Feedbackmodal = dynamic(() => import("../FeedbackModal/Feedbackmodal"));
const Errormodal = dynamic(() => import("../ErrorModal/Errormodal"));

const Improveus = () => {
  const { t } = useTranslation();
  const [isErrorOpen, setIsErrorModalOpen] = useState(false);
  const [errorText, setErrorText] = useState("");

  const handleDataFromChild = (data) => {
    setErrorText(data);
  };

  const openErrorModal = () => {
    setIsErrorModalOpen(true);
  };

  const closeErrorModal = () => {
    setIsErrorModalOpen(false);
  };

  const [isFeedbackOpen, setIsFeedbackModalOpen] = useState(false);

  const openFeedbackModal = () => {
    setIsFeedbackModalOpen(true);
  };

  const closeFeedbackModal = () => {
    setIsFeedbackModalOpen(false);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const scrollTo = (section) => {
    document.querySelector(section).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="container">
      <div className={styles.improveus}>
        <div className={styles.improveleft}>
          <h2>For partners</h2>
          <p>
            WhiteBIT is one of the biggest European crypto exchanges, founded
            back in 2018 in Ukraine. We prioritize safety, transparency, and
            constant development. Hence, over 4 million users choose us and stay
            with us. Blockcha
          </p>
        </div>
        <div className={styles.improveright}>
          <button className={styles.button} onClick={openModal}>
            Get in touch info
          </button>
        </div>
        <div className={styles.improvebuttmobile}>
          <button className={styles.button} onClick={openModal}>
            {t("improvebutt")}
          </button>
        </div>
        {isModalOpen && (
          <Improveusmodal
            isOpen={isModalOpen}
            closeModal={closeModal}
            openFeedbackModal={openFeedbackModal}
            onDataFromChild={handleDataFromChild}
            openErrorModal={openErrorModal}
          />
        )}
        {isFeedbackOpen && (
          <Feedbackmodal
            isFeedbackOpen={isFeedbackOpen}
            closeFeedbackModal={closeFeedbackModal}
          />
        )}
        {isErrorOpen && (
          <Errormodal
            isErrorOpen={isErrorOpen}
            closeErrorModal={closeErrorModal}
            text={errorText}
          />
        )}
      </div>
    </div>
  );
};

export default Improveus;
