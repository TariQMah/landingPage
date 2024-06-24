"use client";

import Image from "next/image";
import heroImage from "@/public/images/hero.jpeg";
import styles from "./heroSlider.module.css";
import Heading from "../Heading";
const HeroSection = () => {
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slide}>
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <Image
            src={heroImage}
            alt={`Slide `}
            layout="fill"
            objectFit="cover"
            className={styles.image}
          />
        </div>
        <div className={styles.bgblackgradient}>
          <Heading
            className={styles.heading}
            title="Lorem ipsum dolor sit amet, consec"
          />
          <p className={styles.text}>
            Aliquam eu malesuada turpis, eu interdum nibh. Etiam tristique erat
            in ligula consequat malesuada. <br />
            Praesent posuere vestibulum neque ac posuere. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
