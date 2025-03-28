"use client";
import CardCategorie from "@/components/categories/card-categorie";
import { useEffect, useState } from "react";

export default function Home() {
  const [itemsModules, setItemsModules] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/modules", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
      console.log(data);
      setItemsModules(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
        <h1>Categorires</h1>
        <h3> Explore Categories</h3>
      </div>
      <ul>
        {Object.entries(itemsModules).map(([key, value]) => (
          <CardCategorie key={key} categorie={key} data={value}></CardCategorie>
        ))}
      </ul>
    </>
  );
}
