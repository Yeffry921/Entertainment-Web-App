import styles from "./ShowcaseHeading.module.css";

const ShowcaseHeading = ({ text }) => {
  return <h1 className={styles.title}>{text}</h1>;
};

export default ShowcaseHeading;
