import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import styles from "./Bookmark.module.css";
// import playSvgIcon from "../../assets/icon-play.svg";

const Bookmark = ({ isMarked }) => {
  return (
    <button className={styles.bookmark}>
      {isMarked ? (
        <FaBookmark fill="#FFF" className={styles["bookmark-icon"]} />
      ) : (
        <FaRegBookmark fill="#FFF" className={styles["bookmark-icon"]} />
      )}
    </button>
  );
};

export default Bookmark;
