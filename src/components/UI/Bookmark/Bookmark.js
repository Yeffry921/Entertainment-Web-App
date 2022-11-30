import { FaRegBookmark } from "react-icons/fa";
import styles from './Bookmark.module.css'
// import playSvgIcon from "../../assets/icon-play.svg";

const Bookmark = () => {
  return (
    <div className={styles.hover}>
      <button className={styles.bookmark}>
        <FaRegBookmark fill="#fff" className={styles["bookmark-icon"]} />
      </button>
    </div>
  );
};

export default Bookmark;
