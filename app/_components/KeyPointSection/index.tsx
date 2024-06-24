"use client";

import dynamic from "next/dynamic";
import React from "react";
import styles from "./keyPointSection.module.css";
import Slide from "./slide";

const KeyPointSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <Slide
          title={"Financial statements"}
          text={
            "Morbi purus libero, elementum nec gravida ac, commodo at erat. Etiam porta ipsum sed diam aliquam, rutrum tincidunt metus mattis.Morbi purus libero, Morbi purus libero, elementum nec "
          }
        />
      </div>
      <div className={styles.grid}>
        <Slide
          title={"Financial statements"}
          text={
            "Morbi purus libero, elementum nec gravida ac, commodo at erat. Etiam porta ipsum sed diam aliquam, rutrum tincidunt metus mattis.Morbi purus libero, Morbi purus libero, elementum nec "
          }
        />
      </div>
      <div className={styles.grid}>
        <Slide
          title={"Financial statements"}
          text={
            "Morbi purus libero, elementum nec gravida ac, commodo at erat. Etiam porta ipsum sed diam aliquam, rutrum tincidunt metus mattis.Morbi purus libero, Morbi purus libero, elementum nec "
          }
        />
      </div>
      <div className={styles.grid}>
        <Slide
          title={"Financial statements"}
          text={
            "Morbi purus libero, elementum nec gravida ac, commodo at erat. Etiam porta ipsum sed diam aliquam, rutrum tincidunt metus mattis.Morbi purus libero, Morbi purus libero, elementum nec "
          }
        />
      </div>
    </div>
  );
};

export default KeyPointSection;
