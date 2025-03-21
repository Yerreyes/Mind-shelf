"use client";
import { usePathname } from "next/navigation";
import { formFieldsByCategory } from "./form-configuration";
import FormInput from "./form-input";
import { useState } from "react";
import { saveModule as saveFormData } from "@/actions/modules";

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
      {!category ? desplegable : <h1>Crear un nuevo {category}</h1>}

      <form action={saveFormData}>
        <input
          id="category"
          type="text"
          name="category"
          defaultValue={category ? category : categorySelected}
          hidden
        ></input>

        {arrayInputs?.map((item) => (
          <FormInput key={item.name} category {...item}></FormInput>
        ))}
        {categorySelected && <button>Submit</button>}
      </form>
    </div>
  );
}
