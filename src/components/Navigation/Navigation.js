import styles from "../Navigation/Navigation.module.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as HomeLogo } from "../../assets/icon-nav-home.svg";
import { ReactComponent as MovieLogo } from "../../assets/icon-nav-movies.svg";
import { ReactComponent as TvSeriesLogo } from "../../assets/icon-nav-tv-series.svg";
import { ReactComponent as Bookmarks } from "../../assets/icon-nav-bookmark.svg";
import user from "../../assets/image-avatar.png";

const Navigation = () => {
  return (
    <header className={styles.navigation}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <nav className={styles.nav}>
          <ul>
            <li className={styles["nav-item"]}>
              <HomeLogo/>
            </li>
            <li className={styles["nav-item"]}>
              <MovieLogo />
            </li>
            <li className={styles["nav-item"]}>
              <TvSeriesLogo />
            </li>
            <li className={styles["nav-item"]}>
              <Bookmarks />
            </li>
          </ul>
        </nav>
        <div className={styles.user}>
          <img src={user} alt="user thumbnail" />
        </div>
      </div>
    </header>
  );
};

export default Navigation;
