"use client";

import Heading from "../Heading";
import styles from "./aboutSection.module.css";
import { Gem } from "lucide-react";
const AboutSection = () => {
  return (
    <div className={styles.container + " container"}>
      <div className={styles.icon}>
        <Gem size={40} />
      </div>

      <Heading
        className={styles.heading}
        title=" Aenean vulputate quis est et pulvinar."
      />

      <p className={styles.text}>
        Maecenas dapibus turpis id purus mollis aliquam. Sed facilisis nec ipsum
        nec rutrum.Maecenas dapibus turpis id purus mollis aliquam. Sed
        facilisis nec ipsum nec rutrum.Maecenas dapibus turpis id purus mollis
        aliquam. Sed facilisis nec ipsum nec{" "}
      </p>

      <a className={styles.callToAction}>About us</a>
    </div>
  );
};

export default AboutSection;
