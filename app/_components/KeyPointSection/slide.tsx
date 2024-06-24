import { Plus } from "lucide-react";
import React from "react";
import styles from "./keyPointSection.module.css";
interface ISlideProps {
  title: String;
  text: String;
}

const Slide = ({ text, title }: ISlideProps) => {
  return (
    <div className={styles.innerDiv}>
      <div className={styles.icon}>
        <Plus />
      </div>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};

export default Slide;
