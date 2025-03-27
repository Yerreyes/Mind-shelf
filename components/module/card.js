import styles from "./card.module.css";
import Image from "next/image";
import Tag from "../tag";
import { formFieldsByCategory } from "@/components/form/form-configuration.js";

export default function Card({ title, category, fields }) {
  const fieldsByCategory = formFieldsByCategory[category];

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img
          src={`data:image/png;base64,${fields?.image ? fields.image : null}`}
          alt="Imagen en Base64"
        />
      </div>
      <div className={styles.content}>
        <h1>{title}</h1>
        {fieldsByCategory
          .filter((item) => item.name !== "image" && item.name !== "title")
          .map((item) => (
            <div key={item.name}>
              <p>
                {item.label}: {fields[item.name]}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}
