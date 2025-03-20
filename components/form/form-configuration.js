export const formFieldsByCategory = {
    Libro: [
      { name: "title", label: "Título", type: "text", required: true },
      { name: "author", label: "Autor", type: "text", required: false },
      { name: "notes", label: "Notas", type: "textarea", required: false },
      { name: "image", label: "Portada", type: "file", required: false },
    ],
    Video: [
      { name: "title", label: "Título", type: "text", required: true },
      { name: "url", label: "Enlace del video", type: "url", required: true },
      { name: "notes", label: "Notas", type: "textarea", required: false },
    ],
    Pelicula: [
      { name: "title", label: "Título", type: "text", required: true },
      { name: "streamingService", label: "Plataforma", type: "text", required: false },
      { name: "review", label: "Opinión", type: "textarea", required: false },
    ],
  };