import { useFormStatus } from "react-dom";
import styles from "./button-submit.module.css";
export default function SubmitButton({ isEditing }) {
    const { pending } = useFormStatus();
  return (
    <button className={styles.submitButton} type="submit" disabled={pending}>
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
