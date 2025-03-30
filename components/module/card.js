'use client'
import styles from "./card.module.css";
import Image from "next/image";
import Tag from "../tag";
import { formFieldsByCategory } from "@/components/form/form-configuration.js";
import Link from "next/link";
import { deleteModule } from "@/actions/modules";
import { useTransition } from "react";
import { useRouter } from "next/navigation";

export default function Card({ id, title, category, fields }) {
  const fieldsByCategory = formFieldsByCategory[category];
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  async function handleDelete(id) {
    try {``
      const proceed = window.confirm('Are you sure?');
      if (proceed) {
        const response = await deleteModule(id);
        if (response.success) {
          startTransition(() => {
            router.refresh(); // ✅ Refresh the UI without freezing it
          });
        } else {
          alert(response.message);
        }
      }
    } catch (error) {
      console.error("Error deleting module:", error);
      alert("Failed to delete the module. Please try again.");
    }
  }
  
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
        <div>
          <Link href={`/module/${id}`}>Modificar</Link>
          <button onClick= {()=>handleDelete(id)}>Eliminar</button>
        </div>
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
