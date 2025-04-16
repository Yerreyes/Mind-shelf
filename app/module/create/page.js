"use client";
import Form from "@/components/form/form";
import { notFound, usePathname, useSearchParams } from "next/navigation";
import { formFieldsByCategory } from "@/components/form/form-configuration.js";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


export default function CreateModulePage() {
  const params = useSearchParams();
  const category = params.get("category");

  const router = useRouter();
  const pathname = usePathname();

  const [isValidCategory, setIsValidCategory] = useState(null);

  const validateCategory = (category) => !!formFieldsByCategory[category];

  useEffect(() => {
    if (category) {
      const isValid = validateCategory(category);
      if (!isValid) {
        // Limpia la URL eliminando el parámetro `category`
        router.replace(pathname);
      }
      setIsValidCategory(isValid);
    } 
  }, [category, router]);

  // Renderizado condicional
  if (isValidCategory === null && category != null) {
    // Muestra un indicador de carga mientras se valida la categoría
    return <p>Validando categoría...</p>;
  }

  if (isValidCategory==false){
    return notFound();
  }

  return (
    <>
      <Form category={category}></Form>
    </>
  );
}
