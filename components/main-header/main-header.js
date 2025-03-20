import styles from "./main-header.module.css";
import Link from "next/link";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <header className={styles.header}>
      <h1>MindShelf</h1>
      <nav className={styles.nav}> 
        <ul>
          <NavLink href="/"> Home</NavLink>
          <NavLink href="/explore"> Explore</NavLink>
        </ul>
      </nav>
    </header>
  );
}
