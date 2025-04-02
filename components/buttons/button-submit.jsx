import { useFormStatus } from "react-dom";

export default function SubmitButton({ isEditing }) {
    const { pending } = useFormStatus();
  return (
    <button>
      {pending
        ? isEditing
          ? "Editando..."
          : "Creando..."
        : isEditing
        ? "Editar"
        : "Crear"}
    </button>
  );
}
