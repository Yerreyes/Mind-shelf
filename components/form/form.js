"use client";
import { usePathname } from "next/navigation";
import { formFieldsByCategory } from "./form-configuration";
import FormInput from "./form-input";
import { useState } from "react";
import { saveFormData } from "@/lin/actions";

export default function Form({ category }) {
  const [categorySelected, setCategorySelected] = useState(category || "");

  function handleCategoryChange(event) {
    const value = event.target.value;
    setCategorySelected(value);
  }

  const arrayInputs = categorySelected
    ? formFieldsByCategory[categorySelected]
    : [];

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
      {!category ? desplegable : <h1>Create new {category}</h1>}

      <form action={saveFormData}>
        {arrayInputs?.map((item) => (
          <FormInput key={item.name} category {...item}></FormInput>
        ))}
        {categorySelected && <button>Submit</button>}
      </form>
    </div>
  );
}
