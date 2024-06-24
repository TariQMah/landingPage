"use client";
import styles from "./heading.module.css";
import clsx from "clsx";

interface IHeadingProps {
  title: string;
  className?: string;
}
const Heading = ({ title, className }: IHeadingProps) => {
  return <h2 className={clsx(styles.heading, className)}>{title}</h2>;
};

export default Heading;
