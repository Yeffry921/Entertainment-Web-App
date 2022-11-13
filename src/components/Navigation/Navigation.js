import styles from "../Navigation/Navigation.module.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as HomeLogo } from "../../assets/icon-nav-home.svg";
import { ReactComponent as MovieLogo } from "../../assets/icon-nav-movies.svg";
import { ReactComponent as TvLogo } from "../../assets/icon-nav-tv-series.svg";
import { ReactComponent as Bookmarks } from "../../assets/icon-nav-bookmark.svg";
import user from "../../assets/image-avatar.png";
import { NavLink } from "react-router-dom";

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
              <NavLink to="home">
                {({ isActive }) => (
                  <HomeLogo
                    className={`${isActive ? styles.active : undefined} ${
                      styles.logo
                    }`}
                  />
                )}
              </NavLink>
            </li>
            <li className={styles["nav-item"]}>
              <NavLink to="movies">
                {({ isActive }) => (
                  <MovieLogo
                    className={`${isActive ? styles.active : undefined} ${
                      styles.logo
                    }`}
                  />
                )}
              </NavLink>
            </li>
            <li className={styles["nav-item"]}>
              <NavLink to="tvseries">
                {({ isActive }) => (
                  <TvLogo
                    className={`${isActive ? styles.active : undefined} ${
                      styles.logo
                    }`}
                  />
                )}
              </NavLink>
            </li>
            <li className={styles["nav-item"]}>
              <NavLink to="bookmarks">
                {({ isActive }) => (
                  <Bookmarks
                    className={`${isActive ? styles.active : undefined} ${
                      styles.logo
                    }`}
                  />
                )}
              </NavLink>
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
