import styles from "./main-header.module.css";
import Link from "next/link";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <header className={styles.header}>
      <h1>MindShelf</h1>
      <nav className={styles.nav}> 
        <ul>
          <NavLink href="/explore"> Explore</NavLink>
          <NavLink href="/module"> Module </NavLink>
          <NavLink href="/"> Create</NavLink>
        </ul>
      </nav>
    </header>
  );
}
