"use client";

import FormInput from "./form-input";
import { useState, useEffect, use } from "react";
import { saveDataAction as saveFormData, editModule } from "@/actions/modules";
import { useActionState } from "react";
import { formFieldsByCategory } from "@/components/form/form-configuration.js";
import { startTransition } from "react";
import SubmitButton from "../buttons/button-submit.jsx";
import styles from "./form.module.css";

export default function Form({ category, moduleSelected }) {
  const [formState, formAction] = useActionState(
    moduleSelected ? editModule : saveFormData,
    { success: false }
  );

  const [categorySelected, setCategorySelected] = useState(category || "");

  const [title, setTitle] = useState(moduleSelected?.title || "");

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

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
      if (moduleSelected) {
        formAction({ formData, id: moduleSelected.id }); // Pasar el ID directamente
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
        {desplegable}
          <h1 className = {styles.title}>
            {" "}
            {moduleSelected
              ? " Editar"
              : `Crear un nuevo ${categorySelected}`}{" "}
          </h1>
          <form className={styles.formContainer} onSubmit={handleSubmit}>
            <input
              id="category"
              type="text"
              name="category"
              defaultValue={categorySelected}
              hidden
            ></input>

            {arrayInputs.map((item) =>
              //this validation is to check if the item is title or not because we need to handle it differently for setting the image
              // if someone edits the title the input detects the change and and sets the title, which is used to generate the image
              item.name == "title" ? (
                <FormInput
                  key={item.name}
                  module={moduleSelected}
                  {...item}
                  handleTitleChange={handleTitleChange}
                />
              ) : (
                <FormInput
                  key={item.name}
                  module={moduleSelected}
                  title={title}
                  {...item}
                />
              )
            )}
            <div className={styles.buttonContainer}>
              <SubmitButton isEditing={moduleSelected ? true : false} />
            </div>

            {formState?.message && <p className={styles.message}>{formState.message}</p>}
          </form>
        </>
      )}
    </div>
  );
}
