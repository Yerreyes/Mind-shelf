import styles from "./form-input.module.css";
import {useForm} from "react-hook-form";



export default function FormInput({ category, ...props }) {
  const properties = { ...props };
  const { register } = useForm(); // Hook de React Hook Form para manejar inputs
  return (
    <div className={styles.row}>
      <p>
        <label htmlFor={properties.name}>{properties.label}</label>
        <input {...register(properties.name)}
          id={properties.name}
          name={properties.name}
          type={properties.type}
          required={properties.required}
        />
      </p>
    </div>
  );
}
