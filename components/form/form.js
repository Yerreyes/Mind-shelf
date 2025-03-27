"use client";

import { formFieldsByCategory } from "./form-configuration";
import FormInput from "./form-input";
import { useState, useEffect } from "react";
import { saveDataAction as saveFormData } from "@/actions/modules";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useActionState  } from "react";
import { useFormStatus } from "react-dom";

export default function Form() {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [formState, formAction] = useActionState(saveFormData, { success: false });
  const { pending } = useFormStatus();
  const category = params.get("category"); // Obtiene el parámetro `category`

  const [categorySelected, setCategorySelected] = useState(category || "");
  const [isValidCategory, setIsValidCategory] = useState(null); // `null` indica que aún no se ha validado

  // Función para validar la categoría
  const validateCategory = (category) => !!formFieldsByCategory[category];

  useEffect(() => {
    if (category) {
      const isValid = validateCategory(category);
      setCategorySelected(category);
      setIsValidCategory(isValid);

      if (!isValid) {
        // Limpia la URL eliminando el parámetro `category`
        router.replace(pathname);
      }
    } else {
      setCategorySelected("");
      setIsValidCategory(null); // No hay categoría seleccionada
    }
  }, [category, router]);

  // Maneja el cambio de categoría desde el desplegable
  const handleCategoryChange = (event) => {
    const value = event.target.value;
    if (value === "") {
      // Si el usuario selecciona la opción vacía, restablece el estado
      setCategorySelected("");
      setIsValidCategory(null); // No hay categoría seleccionada
    } else {
      // Si selecciona una categoría válida, actualiza el estado
      setCategorySelected(value);
      setIsValidCategory(validateCategory(value));
    }
  };

  // Obtiene los campos del formulario según la categoría seleccionada
  const arrayInputs = categorySelected
    ? formFieldsByCategory[categorySelected]
    : [];

  // Renderiza el desplegable
  const desplegable = (
    <>
      <label>Seleccione la categoría:</label>
      <select value={categorySelected} onChange={handleCategoryChange}>
        <option value="">Selecciona...</option>
        <option value="Libro">Libro</option>
        <option value="Video">Video</option>
        <option value="Pelicula">Película</option>
      </select>
    </>
  );

  // Renderizado condicional
  if (isValidCategory === null && category != null) {
    // Muestra un indicador de carga mientras se valida la categoría
    return <p>Validando categoría...</p>;
  }

  return (
    <div>
      {!categorySelected ? (
        desplegable
      ) : !isValidCategory ? (
        <>
          <h1>Error: Categoría inválida</h1>
          <p>Por favor, seleccione una categoría válida.</p>
          {desplegable}
        </>
      ) : (
        <>
          <h1>Crear un nuevo {categorySelected}</h1>
          <form action={formAction}>
            <input
              id="category"
              type="text"
              name="category"
              defaultValue={categorySelected}
              hidden
            ></input>

            {arrayInputs.map((item) => (
              <FormInput key={item.name} {...item} />
            ))}
            <button> {pending ? "Enviando..." : "Enviar" }</button>
            {formState?.message && <p>{formState.message}</p>} 
          </form>
        </>
      )}
    </div>
  );
}
