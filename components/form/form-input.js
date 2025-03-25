import styles from "./form-input.module.css";

export default function FormInput({ category, ...props }) {
  const properties = { ...props };

  return (
    <div className={styles.row}>
      <p>
        <label htmlFor={properties.name}>{properties.label}</label>
        <input
          id={properties.name}
          name={properties.name}
          type={properties.type}
          required={properties.required}
        />
      </p>
    </div>
  );
}
