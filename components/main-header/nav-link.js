'use client';

import Link from "next/link";
import styles from "./nav-link.module.css";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
  // Receives the reference to the page, the path, and the name of the page
  const path = usePathname(); // usePathname is a hook from next/navigation to get the current path
  return (
    <li>
      <Link
        href = {href}
        className= {
          path === href || (href !== '/' && path.startsWith(href))
            ? `${styles.link} ${styles.active}`
            : styles.link
        }
      >
        {children}
      </Link>
    </li>
  );
}
