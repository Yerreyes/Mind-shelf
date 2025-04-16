"use client";

import { useEffect, useState } from "react";
import styles from "./image-input.module.css";

export default function ImageInput({ name, label, module, title }) {
  const [imagePreview, setImagePreview] = useState(
    module?.fields?.[name] || null
  );

  useEffect(() => {
    const fetchImage = async () => {
      try {
        // Fetch the image from the server. The server generates the image based on the title.
        const response = await fetch(
          `/api/generate-image?title=${encodeURIComponent(title)}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch image");
        }
        const data = await response.json();
        setImagePreview(data);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    if (title) {
      fetchImage();
    }
  }, [title]);

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
      <label className={styles.title} htmlFor={name}>{label}</label>
      {imagePreview != null ? (
        imagePreview != "" ? (
          <img
            src={`data:image/png;base64,${imagePreview}`}
            alt="Preview"
            width="150"
          />
        ) : (
          <img
            src={`/api/generate-image?title=${encodeURIComponent(title)}`}
            alt="Preview"
            width="150"
          />
        )
      ) : (
        ""
      )}
      <input
        id={name}
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        name="image"
        style={{ display: "none" }} // Hide the default file input
      />

      <label className={styles.buttonImage} htmlFor={name}>Subir imagen</label>

      <input type="hidden" name={name} value={imagePreview == null ? "" : imagePreview} />
    </div>
  );
}
