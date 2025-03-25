"use client";

import CategorieItem from "./categorie-item";
import styles from "./card-categorie.module.css";
import Link from "next/link";

//Contains the card of each category, and inside the items of the category
export default function CardCategorie({ categorie }) {
  const dummyCategorie = {
    name: "Sample Category",
    description: "This is a sample category description.",
    items: [
      { id: 1, title: "Item 1" },
      { id: 2, title: "Item 2" },
      { id: 3, title: "Item 3" },
    ],
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <Link href={"/?category=Libdro"}>+</Link>
      </div>

      <h1>{dummyCategorie.name}</h1>
      <p>{dummyCategorie.description}</p>
      <ul>
        {dummyCategorie.items.map((item) => (
          <CategorieItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}
