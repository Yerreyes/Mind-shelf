"use client";

import { useState } from "react";
import styles from "./form-input.module.css";

export default function ImageInput({ name, label, module }) {
  const [imagePreview, setImagePreview] = useState(
    module?.fields?.[name] || ""
  );

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result.split(",")[1]; // Extract Base64 string
        setImagePreview(base64Image);
      };
      reader.readAsDataURL(file); // Read file as data URL
    }
  };

  return (
    <div className={styles.row}>
      <label htmlFor={name}>{label}</label>
      {imagePreview && (
        <img
          src={`data:image/png;base64,${imagePreview}`}
          alt="Preview"
          width="150"
        />
      )}
      <input
        id={name}
        name={name}
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      <input type="hidden" name={name} value={imagePreview} />
    </div>
  );
}