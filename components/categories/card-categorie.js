import CategorieItem from "./categorie-item";
import styles from "./card-categorie.module.css";
import Link from "next/link";

//Contains the card of each category, and inside the items of the category
export default function CardCategorie({ categorie, data }) {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <h1>{categorie}</h1>
        <Link href={`module/create/?category=${categorie}`}>Add</Link>
      </div>

      <ul className={styles.itemsContainer}>
        {/** data is a object with diferentes catgories which contains a diferentes items in a array */}
        {data.map((item) => (
          <CategorieItem key={item.id} item={item} />
        ))}
      </ul>
      <div>
        <Link href={`module`}>Explorar más</Link>
      </div>
    </div>
  );
}
