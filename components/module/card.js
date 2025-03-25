import styles from "./card.module.css";
import Image
 from "next/image";
import Tag from "../tag";
export default function Card({ data }) {
  const { image, title, state, opinion, date, recommendationStatus} =
    data;
  return (
    <div className={styles.card}>

      <div className={styles.image}>
        <Image src={image} alt="module image" width={300} height={300} priority/>
      </div>
      <div className={styles.content}>
        <h1>{title}</h1>
        <Tag state={state}></Tag>
        <p id={styles.date}>{date}</p>
        <p>{opinion}</p>
        <p>{recommendationStatus}</p>
      </div>
    </div>
  );
}
