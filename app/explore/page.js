"use client";
import CardCategorie from "@/components/categories/card-categorie";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

/** note: here it s posible to use suspense, as a server component, and that avoid to use isloading and use client */
export default function Home() {
  const [itemsModules, setItemsModules] = useState({});
  const [isLoading, setIsLoading] = useState(true); // Estado para el indicador de carga

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true); // Mostrar el indicador de carga
        const res = await fetch("/api/modules", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        const data = await res.json();
        if (data) {
          setItemsModules(data);
        }
      } catch (error) {
        console.error("An error occurred while fetching data:", error);
      } finally {
        setIsLoading(false); // Ocultar el indicador de carga
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {isLoading ? ( // Mostrar el indicador de carga mientras se cargan los datos
        <p>Cargando datos...</p>
      ) : (
        <ul className= {styles.cardCategorie}>
          {Object.entries(itemsModules).map(([key, value]) => (
            <CardCategorie key={key} categorie={key} data={value}></CardCategorie>
          ))}
        </ul>
      )}
    </>
  );
}
