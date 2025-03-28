import styles from "./categorie-item.module.css";

export default function CategorieItem({ item }) {
  //I receive a object
  return (
    <li className={styles.container}>
      <h1>{item.title}</h1>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src={`data:image/png;base64,${
            item?.fields.image ? item.fields.image : null
          }`}
          alt="Module image"
        />
      </div>
    </li>
  );
}
