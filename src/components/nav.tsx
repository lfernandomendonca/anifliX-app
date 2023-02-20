import styles from "@/styles/Nav.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navWrapper}>
        <div className={styles.navBox}>
          <input
            className={styles.searchText}
            type="text"
            name=""
            placeholder="Pesquisar conteúdo"
          />
          <button className={styles.searchBtn}><Image className="btnIcon" src="./img/mag-icon.svg" alt="search" width={40} height={40} /></button>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a className={styles.navLink}>Animes</a>
            </li>
            <li className={styles.navItem}>
              <a className={styles.navLink}>Comunidades</a>
            </li>
            <li className={styles.navItem}>
              <a className={styles.navLink}>Contato</a>
            </li>
            <li className={styles.navItem}>
              <a className={styles.navLink}>Suporte</a>
            </li>
            <li className={styles.navItem}>
              <a className={styles.navLink}>Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
