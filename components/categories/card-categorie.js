
import CategorieItem from "./categorie-item";
import styles from "./card-categorie.module.css";
import Link from "next/link";

//Contains the card of each category, and inside the items of the category
export default function CardCategorie({ categorie, data}) {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <Link href={`/?category=${categorie}`}>+</Link>
      </div>
      <h1>{categorie}</h1>
      <ul>
        {/** data is a object with diferentes catgories which contains a diferentes items in a array */}
        {data.map((item) => ( 
          <CategorieItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}
