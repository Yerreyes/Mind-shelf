"use client";


import FormInput from "./form-input";
import { useState, useEffect } from "react";
import { saveDataAction as saveFormData } from "@/actions/modules";
import { useActionState  } from "react";
import { useFormStatus } from "react-dom";
import { formFieldsByCategory } from "@/components/form/form-configuration.js";

export default function Form({category, module}) {

  const [formState, formAction] = useActionState(saveFormData, { success: false });
  const { pending } = useFormStatus();
  const [categorySelected, setCategorySelected] = useState(category || "");

  // Maneja el cambio de categoría desde el desplegable
  const handleCategoryChange = (event) => {
    const value = event.target.value;
    if (value === "") {
      setCategorySelected("");
    } else {
      setCategorySelected(value);
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

  return (
    <div>
      {!categorySelected ? (
        desplegable
      ) :  (
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
              <FormInput key={item.name} module = {module} {...item} />
            ))}
            <button> {pending ? "Enviando..." : "Enviar" }</button>
            {formState?.message && <p>{formState.message}</p>} 
          </form>
        </>
      )}
    </div>
  );
}
