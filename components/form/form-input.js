import styles from "./form-input.module.css";
import ImageInput from "./image-input";

export default function FormInput({ category, module, title, ...props }) {
  const properties = { ...props };

  const onChange = properties.handleTitleChange || (() => {});

  if (properties.type === "file" && properties.name === "image") {
    // If the input is an image, we render the ImageInput component
    return (
      <ImageInput
        name={properties.name}
        label={properties.label}
        module={module}
        title={title}
      />
    );
  }

  return (
    <div className={styles.row}>
      <label htmlFor={properties.name}>{properties.label}</label>
      <input
        id={properties.name}
        name={properties.name}
        type={properties.type}
        required={properties.required}
        defaultValue={
          module?.[properties.name] || module?.fields?.[properties.name] || ""
        }
        onChange={onChange}
      />
    </div>
  );
}
