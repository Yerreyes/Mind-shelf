import styles from "./card-categorie.module.css";
import Link from "next/link";
import Carousel from "../swiper/carousel";

//Contains the card of each category, and inside the items of the category
export default function CardCategorie({ categorie, data }) {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <h1>{categorie}</h1>
        <Link href={`module/create/?category=${categorie}`}>Add</Link>
      </div>
        <Carousel data={data} />
      <div>
        <Link href={`module`}>Explorar más</Link>
      </div>
    </div>
  );
}
