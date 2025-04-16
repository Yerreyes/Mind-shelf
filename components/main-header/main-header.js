import styles from "./main-header.module.css";
import Link from "next/link";
import NavLink from "./nav-link";
import logo from "@/public/logo.png";
import Image from "next/image";

export default function MainHeader() {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href={"/"}>
        <Image className={styles.logoImg} src={logo} alt="Logo mind shelf" priority></Image> Mind Shelf
      </Link>
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
