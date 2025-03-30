"use client";

import FormInput from "./form-input";
import { useState, useEffect } from "react";
import { saveDataAction as saveFormData, editModule } from "@/actions/modules";
import { useActionState } from "react";
import { formFieldsByCategory } from "@/components/form/form-configuration.js";
import { startTransition } from "react";
import SubmitButton from "../buttons/button-submit";

export default function Form({ category, module }) {
  const [formState, formAction] = useActionState(
    module ? editModule : saveFormData,
    { success: false }
  );

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

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    startTransition(() => {
      if (module) {
        formAction({ formData, id: module.id }); // Pasar el ID directamente
      } else {
        formAction(formData);
      }
    });
  }

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
      ) : (
        <>
          <h1> {module ? " Editar" : `Crear un nuevo ${categorySelected}`} </h1>
          <form onSubmit={handleSubmit}>
            <input
              id="category"
              type="text"
              name="category"
              defaultValue={categorySelected}
              hidden
            ></input>

            {arrayInputs.map((item) => (
              <FormInput key={item.name} module={module} {...item} />
            ))}

            <SubmitButton isEditing={module ? true : false} />
            {formState?.message && <p>{formState.message}</p>}
          </form>
        </>
      )}
    </div>
  );
}
